import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getCachedMetalRates } from './api/gold-rate.js'

// Custom dev middleware to serve /api/gold-rate during local `npm run dev`
function goldRateDevPlugin() {
  return {
    name: 'gold-rate-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
        if (url.pathname === '/api/gold-rate') {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
          try {
            const data = await getCachedMetalRates()
            res.statusCode = 200
            res.end(JSON.stringify(data, null, 2))
          } catch (err) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: err.message }))
          }
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    goldRateDevPlugin(),
  ],
})

