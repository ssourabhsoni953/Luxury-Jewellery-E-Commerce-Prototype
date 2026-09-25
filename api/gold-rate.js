// In-memory cache storage (persists while server/lambda is warm)
let memoryCache = {
  data: null,
  lastFetched: 0,
};

// Cache duration: 1 hour (3600 seconds)
const CACHE_TTL_MS = 60 * 60 * 1000;

// High-accuracy fallback market rates in case external API is unreachable or rate-limited
const FALLBACK_RATES = {
  gold24k: { perGram: 7640, per10g: 76400 },
  gold22k: { perGram: 7003, per10g: 70030 },
  gold18k: { perGram: 5730, per10g: 57300 },
  silver: { perGram: 92, per10g: 920, per1kg: 92000 },
  currency: 'INR',
  lastUpdated: new Date().toISOString(),
  source: 'Fallback IBJA Reference Rates',
  cacheStatus: 'FALLBACK',
};

/**
 * Core function to fetch and format metal rates with caching
 */
export async function getCachedMetalRates() {
  const now = Date.now();

  // 1. Check if memory cache is still fresh (< 1 hour old)
  if (memoryCache.data && (now - memoryCache.lastFetched) < CACHE_TTL_MS) {
    const ageSeconds = Math.round((now - memoryCache.lastFetched) / 1000);
    return {
      ...memoryCache.data,
      cacheStatus: 'HIT',
      cacheAgeSeconds: ageSeconds,
    };
  }

  // 2. Fetch fresh rates from Metals API
  const apiKey = process.env.METALS_API_KEY || process.env.VITE_API_ID || 'HKQLHUODJLDO99O0R3QO616O0R3QO';
  const apiUrl = process.env.METALS_API_URL || 'https://api.metals.dev/v1/latest';

  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}&currency=INR&unit=g`, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000), // 8s timeout
    });

    if (!response.ok) {
      throw new Error(`External API responded with status ${response.status}`);
    }

    const json = await response.json();

    if (json.status !== 'success' || !json.metals?.gold) {
      throw new Error('Invalid response structure from metals API');
    }

    const goldPerGram = json.metals.gold;
    const silverPerGram = json.metals.silver || 92;

    const formattedData = {
      gold24k: {
        perGram: Math.round(goldPerGram),
        per10g: Math.round(goldPerGram * 10),
      },
      gold22k: {
        perGram: Math.round(goldPerGram * (22 / 24)),
        per10g: Math.round(goldPerGram * (22 / 24) * 10),
      },
      gold18k: {
        perGram: Math.round(goldPerGram * (18 / 24)),
        per10g: Math.round(goldPerGram * (18 / 24) * 10),
      },
      silver: {
        perGram: Math.round(silverPerGram),
        per10g: Math.round(silverPerGram * 10),
        per1kg: Math.round(silverPerGram * 1000),
      },
      currency: 'INR',
      lastUpdated: json.timestamps?.metal || new Date().toISOString(),
      source: 'Metals.dev Live Market Feed',
      cacheStatus: 'MISS',
      cacheAgeSeconds: 0,
    };

    // Save to memory cache
    memoryCache = {
      data: formattedData,
      lastFetched: now,
    };

    return formattedData;
  } catch (error) {
    console.warn('[GoldRateBackend] External fetch failed, utilizing cache or fallback:', error.message);

    // If we have stale cache, return it rather than completely failing
    if (memoryCache.data) {
      return {
        ...memoryCache.data,
        cacheStatus: 'STALE_HIT',
        cacheAgeSeconds: Math.round((now - memoryCache.lastFetched) / 1000),
      };
    }

    // Return realistic fallback rates
    return {
      ...FALLBACK_RATES,
      lastUpdated: new Date().toISOString(),
    };
  }
}

/**
 * Vercel Serverless Function Handler
 * Route: GET /api/gold-rate
 */
export default async function handler(req, res) {
  // Allow GET requests only
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Set CORS headers for security & flexibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Set Vercel CDN Edge Caching header (Cache for 1 hour, serve stale up to 24 hours while revalidating)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );

  const rates = await getCachedMetalRates();
  return res.status(200).json(rates);
}
