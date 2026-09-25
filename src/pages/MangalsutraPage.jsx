import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import mangalsutra images from src/assets/img/Mangalsutra/
const msImg1 = "https://res.cloudinary.com/upodegd7/image/upload/22KELGH102647_5.webp";
const msImg2 = "https://res.cloudinary.com/upodegd7/image/upload/7_a73aa629-8559-4274-83b4-cae7a4c10134.webp";
const msImg3 = "https://res.cloudinary.com/upodegd7/image/upload/A4700723_1.webp";
const msImg4 = "https://res.cloudinary.com/upodegd7/image/upload/BIAV0992T489_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-96894.jpg";
const msImg5 = "https://res.cloudinary.com/upodegd7/image/upload/DABF12001-1024x1024.jpg";
const msImg6 = "https://res.cloudinary.com/upodegd7/image/upload/DesignerAmericanDiamondPendantShortMangalsutra-TheJewelbox-1.webp";
const msImg7 = "https://res.cloudinary.com/upodegd7/image/upload/Gemini_Generated_Image_4l31tv4l31tv4l31.webp";
const msImg8 = "https://res.cloudinary.com/upodegd7/image/upload/RK-TS-875_R4.webp";
const msImg9 = "https://res.cloudinary.com/upodegd7/image/upload/TGJ22-1696_3-scaled.jpeg";
const msImg10 = "https://res.cloudinary.com/upodegd7/image/upload/amrita.webp";
const msImg11 = "https://res.cloudinary.com/upodegd7/image/upload/image_zoom_1.jpeg";
const msImg12 = "https://res.cloudinary.com/upodegd7/image/upload/image_zoom.jpeg";
const msImg13 = "https://res.cloudinary.com/upodegd7/image/upload/images_1.jpg";
const msImg14 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const msImg15 = "https://res.cloudinary.com/upodegd7/image/upload/m.webp";
const msImg16 = "https://res.cloudinary.com/upodegd7/image/upload/modern-mangal-love-in-bloom-mangalsutra-model-detail-shot.webp";
const msImg17 = "https://res.cloudinary.com/upodegd7/image/upload/s-l1200.jpg";
const msImg18 = "https://res.cloudinary.com/upodegd7/image/upload/untitled-0_7_copy_fc131bc1-979f-4af4-98ec-d7143805b6ab.webp";

// Import catalog polished mangalsutra
const msImg19 = "https://res.cloudinary.com/upodegd7/image/upload/mangalsutra_polished.jpg";

export default function MangalsutraPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedLength, setSelectedLength] = useState('18 inches (Standard)');
  const [cartAlert, setCartAlert] = useState(null);

  const mangalsutraList = [
    {
      id: 1,
      name: "Traditional Sacred Double Wati Gold Mangalsutra",
      category: "Traditional Double Wati",
      purity: "22KT Yellow Gold",
      weight: "18.40 g",
      priceNum: 135000,
      price: "₹1,35,000",
      originalPrice: "₹1,48,000",
      rating: 5.0,
      reviews: 215,
      image: msImg1,
      badge: "Auspicious Classic",
      description: "Sacred twin gold watis embossed with floral patterns on a dual-line auspicious black bead and 22K gold chain.",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Modern Solitaire Floral Diamond Mangalsutra",
      category: "Modern Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "7.80 g",
      priceNum: 88000,
      price: "₹88,000",
      originalPrice: "₹98,000",
      rating: 5.0,
      reviews: 180,
      image: msImg2,
      badge: "IGI Certified",
      description: "A contemporary floral cluster of brilliant natural diamonds on a sleek single-strand 18K gold and black bead chain.",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Imperial Temple Lakshmi Motif Long Mangalsutra",
      category: "Temple & Antique Gold",
      purity: "22KT Yellow Gold",
      weight: "32.60 g",
      priceNum: 238000,
      price: "₹2,38,000",
      originalPrice: "₹2,62,000",
      rating: 4.9,
      reviews: 124,
      image: msImg3,
      badge: "Royal Long Chain",
      description: "A monumental 24-inch traditional mangalsutra with antique Lakshmi coin pendant and multi-strand black bead malas.",
      isBestseller: true,
    },
    {
      id: 4,
      name: "Contemporary Infinity Loop Diamond Mangalsutra",
      category: "Modern Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "6.20 g",
      priceNum: 69000,
      price: "₹69,000",
      originalPrice: "₹76,500",
      rating: 4.8,
      reviews: 92,
      image: msImg4,
      badge: "New Trend",
      description: "Eternal infinity symbol set with micro-pavé VVS diamonds representing unbounded love and modern elegance.",
      isBestseller: false,
    },
    {
      id: 5,
      name: "Maharani Polki Jadau Pendant Mangalsutra",
      category: "Temple & Antique Gold",
      purity: "22KT Yellow Gold",
      weight: "24.10 g",
      priceNum: 178000,
      price: "₹1,78,000",
      originalPrice: "₹1,96,000",
      rating: 4.9,
      reviews: 110,
      image: msImg5,
      badge: "Bridal Exclusive",
      description: "Uncut syndicate polki and ruby cabochon central pendant framed with pure 22K gold filigree borders.",
      isBestseller: false,
    },
    {
      id: 6,
      name: "Sleek Short Minimalist Dailywear Mangalsutra",
      category: "Lightweight Dailywear",
      purity: "18KT Diamond Studded",
      weight: "4.50 g",
      priceNum: 48000,
      price: "₹48,000",
      originalPrice: "₹53,000",
      rating: 4.8,
      reviews: 145,
      image: msImg6,
      badge: "Office Wear",
      description: "Featherlight 16-inch neckline design engineered for working professionals and modern everyday lifestyle.",
      isBestseller: true,
    },
    {
      id: 7,
      name: "Sacred Om & Trishul Auspicious Mangalsutra",
      category: "Traditional Double Wati",
      purity: "22KT Yellow Gold",
      weight: "12.80 g",
      priceNum: 96000,
      price: "₹96,000",
      originalPrice: "₹1,06,000",
      rating: 4.9,
      reviews: 78,
      image: msImg7,
      badge: "Spiritual Harmony",
      description: "Divine sacred symbols sculpted in solid 22K yellow gold to invoke divine blessings and eternal marital protection.",
      isBestseller: false,
    },
    {
      id: 8,
      name: "Twin Arc Diamond Contemporary Mangalsutra",
      category: "Modern Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "8.10 g",
      priceNum: 92000,
      price: "₹92,000",
      originalPrice: "₹1,02,000",
      rating: 4.9,
      reviews: 98,
      image: msImg8,
      badge: "Geometric Chic",
      description: "Dual curved concentric arches studded with channel-set natural diamonds, blending tradition with high fashion.",
      isBestseller: false,
    },
    {
      id: 9,
      name: "Grand Heritage Maharashtra Kolhapuri Mangalsutra",
      category: "Temple & Antique Gold",
      purity: "22KT Yellow Gold",
      weight: "28.50 g",
      priceNum: 210000,
      price: "₹2,10,000",
      originalPrice: "₹2,32,000",
      rating: 5.0,
      reviews: 167,
      image: msImg9,
      badge: "Kolhapuri Saaj",
      description: "Authentic Kolhapuri handcrafted design featuring auspicious gold mani beads and double wati centerpiece.",
      isBestseller: true,
    },
    {
      id: 10,
      name: "Amrita Floral Petal Diamond Mangalsutra",
      category: "Modern Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "9.20 g",
      priceNum: 105000,
      price: "₹1,05,000",
      originalPrice: "₹1,16,000",
      rating: 4.9,
      reviews: 86,
      image: msImg10,
      badge: "Bestseller",
      description: "Layered flower blossom pendant with central solitaire sparkle and delicate milgrain edging on solid 18K gold.",
      isBestseller: true,
    },
    {
      id: 11,
      name: "Vintage Filigree Dome Gold Mangalsutra",
      category: "Traditional Double Wati",
      purity: "22KT Yellow Gold",
      weight: "16.70 g",
      priceNum: 124000,
      price: "₹1,24,000",
      originalPrice: "₹1,36,000",
      rating: 4.8,
      reviews: 73,
      image: msImg11,
      badge: "Artisan Handcrafted",
      description: "Intricately woven gold lace dome wati featuring handcrafted granulation and traditional black spinel beads.",
      isBestseller: false,
    },
    {
      id: 12,
      name: "Elegance Three-Stone Trinity Diamond Mangalsutra",
      category: "Modern Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "5.80 g",
      priceNum: 74000,
      price: "₹74,000",
      originalPrice: "₹82,000",
      rating: 4.8,
      reviews: 112,
      image: msImg12,
      badge: "Past Present Future",
      description: "Three graduated bezel-set solitaire diamonds representing the everlasting journey of love and commitment.",
      isBestseller: false,
    },
    {
      id: 13,
      name: "Shree Shringar Antique Gold Coin Mangalsutra",
      category: "Temple & Antique Gold",
      purity: "22KT Yellow Gold",
      weight: "21.30 g",
      priceNum: 156000,
      price: "₹1,56,000",
      originalPrice: "₹1,72,000",
      rating: 4.9,
      reviews: 95,
      image: msImg13,
      badge: "Auspicious Kasu",
      description: "Gold coins embossed with Goddess Lakshmi seated amidst twin watis on a sturdy 22K gold and bead chain.",
      isBestseller: false,
    },
    {
      id: 14,
      name: "Dainty Bar Minimalist Gold Mangalsutra",
      category: "Lightweight Dailywear",
      purity: "22KT Yellow Gold",
      weight: "5.10 g",
      priceNum: 42000,
      price: "₹42,000",
      originalPrice: "₹46,500",
      rating: 4.7,
      reviews: 89,
      image: msImg14,
      badge: "Minimal Chic",
      description: "Sleek horizontal curved gold bar with alternating black enamel beads, subtle yet undeniably elegant.",
      isBestseller: false,
    },
    {
      id: 15,
      name: "Royal Peacock Gemstone Mangalsutra",
      category: "Temple & Antique Gold",
      purity: "22KT Yellow Gold",
      weight: "26.00 g",
      priceNum: 192000,
      price: "₹1,92,000",
      originalPrice: "₹2,12,000",
      rating: 5.0,
      reviews: 130,
      image: msImg15,
      badge: "Peacock Motif",
      description: "Magnificent sculpted peacock pendant studded with genuine ruby accents and dangling gold droplets.",
      isBestseller: true,
    },
    {
      id: 16,
      name: "Love in Bloom Modern Diamond Mangalsutra",
      category: "Modern Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "8.60 g",
      priceNum: 98000,
      price: "₹98,000",
      originalPrice: "₹1,09,000",
      rating: 4.9,
      reviews: 152,
      image: msImg16,
      badge: "Trending 2026",
      description: "As seen on red carpets, an exquisite blooming diamond centerpiece suspended on a delicate black bead chain.",
      isBestseller: true,
    },
    {
      id: 17,
      name: "Classic Bengali Gold Mukut Mangalsutra",
      category: "Traditional Double Wati",
      purity: "22KT Yellow Gold",
      weight: "19.50 g",
      priceNum: 144000,
      price: "₹1,44,000",
      originalPrice: "₹1,58,000",
      rating: 4.8,
      reviews: 67,
      image: msImg17,
      badge: "Regional Craft",
      description: "Traditional eastern handcrafted gold crown filigree centerpiece celebrating sacred wedding vows.",
      isBestseller: false,
    },
    {
      id: 18,
      name: "Graceful Chevron V-Shape Diamond Mangalsutra",
      category: "Lightweight Dailywear",
      purity: "18KT Diamond Studded",
      weight: "6.90 g",
      priceNum: 79000,
      price: "₹79,000",
      originalPrice: "₹87,000",
      rating: 4.9,
      reviews: 108,
      image: msImg18,
      badge: "Modern V-Neck",
      description: "Deep chevron V-silhouette that aligns naturally with western necklines and formal suits.",
      isBestseller: false,
    },
    {
      id: 19,
      name: "Luxe Aura Signature Polished Diamond Mangalsutra",
      category: "Modern Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "11.20 g",
      priceNum: 128000,
      price: "₹1,28,000",
      originalPrice: "₹1,42,000",
      rating: 5.0,
      reviews: 235,
      image: msImg19,
      badge: "Signature Collection",
      description: "Our signature heirloom design uniting sacred double wati geometry with certified solitaire diamond radiance.",
      isBestseller: true,
    },
  ];

  const categories = ['All', 'Traditional Double Wati', 'Modern Solitaire & Diamond', 'Lightweight Dailywear', 'Temple & Antique Gold'];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} (${selectedLength}) added to your shopping bag!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredMangalsutras = useMemo(() => {
    return mangalsutraList
      .filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesPurity = selectedPurity === 'All' || item.purity === selectedPurity;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesPurity && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.priceNum - b.priceNum;
        if (sortBy === 'price-high') return b.priceNum - a.priceNum;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'popular') return b.reviews - a.reviews;
        return 0; // featured
      });
  }, [mangalsutraList, selectedCategory, selectedPurity, sortBy, searchQuery]);

  return (
    <div className="grow pb-16">
      {/* Toast Alert */}
      {cartAlert && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-brand-gold flex items-center space-x-3 animate-bounce">
          <span className="text-xl text-brand-gold">✨</span>
          <span className="text-sm font-medium">{cartAlert}</span>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/60 via-amber-50/40 to-transparent py-10 sm:py-14 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-amber-900/80 mb-6 font-medium">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange font-semibold">Sacred Mangalsutra Collection</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm">
                <span>🖤</span> Sacred Vows • BIS 916 Hallmark & IGI Diamonds
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Sacred Vows & <br className="hidden sm:inline" />
                <span className="text-brand-orange">Modern Mangalsutras</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Honor the sacred bond of eternal togetherness. Discover our harmonious blend of traditional double wati 22K gold mangalsutras, certified solitaire diamond dailywear pendants, and royal long temple malas.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-brand-gold/40 shadow-lg space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">✓</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">100% Certified</h4>
                  <p className="text-[11px] text-slate-600">BIS 916 Hallmark & IGI Certified Diamonds</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">🧵</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">High-Tensile Gold Threading</h4>
                  <p className="text-[11px] text-slate-600">Break-resistant micro-woven gold wire</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">🔄</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Free Lifetime Restringing</h4>
                  <p className="text-[11px] text-slate-600">Complimentary bead maintenance & polish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter & Sorting Section */}
      <section className="py-6 bg-white/40 backdrop-blur-sm sticky top-16 z-40 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex overflow-x-auto pb-1 gap-2 hide-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-sm ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-brand-gold shadow-md scale-105'
                      : 'bg-white/80 text-slate-700 hover:bg-white border border-brand-gold/30 hover:text-brand-orange'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${mangalsutraList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search mangalsutra..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/90 border border-brand-gold/40 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
                <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Purity Filter */}
              <select
                value={selectedPurity}
                onChange={(e) => setSelectedPurity(e.target.value)}
                className="bg-white/90 border border-brand-gold/40 rounded-full px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange cursor-pointer"
              >
                {purities.map(p => (
                  <option key={p} value={p}>{p === 'All' ? 'All Purities' : p}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/90 border border-brand-gold/40 rounded-full px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange cursor-pointer font-medium"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Mangalsutra Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedCategory === 'All' ? 'All Mangalsutra Designs' : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Showing {filteredMangalsutras.length} auspicious creations</p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Prices inclusive of all taxes & making charges
          </div>
        </div>

        {filteredMangalsutras.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">🖤</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Mangalsutra Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any mangalsutra matching your current filter criteria. Try resetting your search or selecting another category.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedPurity('All'); setSearchQuery(''); }}
              className="bg-brand-orange hover:bg-brand-red text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-md transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredMangalsutras.map((ms) => (
              <div
                key={ms.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {ms.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-amber-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {ms.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(ms.id)}
                  title="Add to Wishlist"
                  className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-red shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill={wishlist[ms.id] ? "#E73F1E" : "none"}
                    stroke={wishlist[ms.id] ? "#E73F1E" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Image Container with Hover Zoom & Quick View */}
                <div 
                  className="relative aspect-square overflow-hidden bg-amber-50/50 cursor-pointer flex items-center justify-center p-2"
                  onClick={() => setActiveModalProduct(ms)}
                >
                  <img
                    src={ms.image}
                    alt={ms.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveModalProduct(ms); }}
                      className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-brand-gold transition-colors flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    {/* Metal details */}
                    <div className="flex items-center justify-between text-[11px] text-amber-900 font-semibold mb-1">
                      <span>{ms.purity}</span>
                      <span className="bg-amber-100/80 px-2 py-0.5 rounded text-slate-800">{ms.weight}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(ms)}
                      className="text-base font-semibold text-slate-900 hover:text-brand-orange transition-colors cursor-pointer line-clamp-1"
                    >
                      {ms.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1.5 mt-1">
                      <div className="flex text-brand-gold text-xs">
                        {"★".repeat(Math.floor(ms.rating))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{ms.rating}</span>
                      <span className="text-[11px] text-slate-400">({ms.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{ms.price}</div>
                      <div className="text-[11px] text-slate-400 line-through">{ms.originalPrice}</div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(ms)}
                      className="bg-slate-900 hover:bg-brand-orange text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm flex items-center gap-1 hover:shadow"
                    >
                      <span>+</span> Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Mangalsutra Length & Symbolism Guide */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-y border-brand-gold/30 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Guide Chart */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Sacred Heritage & Lifestyle Guide</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">Choosing the Perfect Mangalsutra Length</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Whether you prefer subtle daily elegance or grand traditional drape, choose the length tailored to your lifestyle:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-brand-gold/40 shadow-sm bg-white">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-amber-50 text-slate-800 font-bold border-b border-brand-gold/30">
                    <tr>
                      <th className="px-4 py-2.5">Style Style</th>
                      <th className="px-4 py-2.5">Chain Length</th>
                      <th className="px-4 py-2.5">Position</th>
                      <th className="px-4 py-2.5">Lifestyle Match</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="px-4 py-2 font-semibold">Short Dailywear</td><td className="px-4 py-2">16 inches</td><td className="px-4 py-2">Collarbone</td><td className="px-4 py-2">Western Wear & Work</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold text-brand-orange">Standard Classic</td><td className="px-4 py-2">18 inches</td><td className="px-4 py-2">Upper Chest</td><td className="px-4 py-2">Versatile Daily & Festive</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Traditional Double Line</td><td className="px-4 py-2">20 - 22 inches</td><td className="px-4 py-2">Mid Chest</td><td className="px-4 py-2">Sarees & Traditional Attire</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold">Long Maharani Mala</td><td className="px-4 py-2">24 - 30 inches</td><td className="px-4 py-2">Center Torso</td><td className="px-4 py-2">Weddings & Pooja Ceremonies</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Name / Solitaire Mangalsutra Consultation */}
            <div className="bg-gradient-to-br from-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-4 shadow-2xl relative overflow-hidden border border-brand-gold">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl"></div>
              <span className="text-xs uppercase tracking-widest text-brand-lightgold font-semibold">Bespoke Monogram Studio</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-chicago text-white">Custom Initial & Solitaire Mangalsutra</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Incorporate personalized couple initials, anniversary dates, or customized solitaire diamond shapes into your sacred thread.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-brand-orange hover:bg-brand-red text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
                >
                  Book Bespoke Designer
                </a>
                <Link
                  to="/"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-colors border border-white/30"
                >
                  Explore All Categories
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick View Product Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-brand-gold flex flex-col md:flex-row relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 z-20 bg-slate-900/80 hover:bg-brand-red text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-md"
            >
              ✕
            </button>

            {/* Modal Image View */}
            <div className="md:w-1/2 bg-amber-50 p-6 flex flex-col justify-center items-center relative">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full max-h-80 object-contain rounded-2xl shadow-md border border-brand-gold/30 bg-white/60 p-4"
              />
              <span className="mt-3 text-[11px] text-amber-900 font-semibold bg-amber-100/80 px-3 py-1 rounded-full">
                🔍 100% Authentic Product Image
              </span>
            </div>

            {/* Modal Content */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange px-2.5 py-0.5 rounded-full">
                    {activeModalProduct.category}
                  </span>
                  <span className="text-xs text-slate-500">• {activeModalProduct.purity}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-chicago leading-snug">
                  {activeModalProduct.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mt-2 text-xs">
                  <span className="text-brand-gold font-bold">★ {activeModalProduct.rating}</span>
                  <span className="text-slate-500">({activeModalProduct.reviews} customer reviews)</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {activeModalProduct.description}
                </p>

                {/* Specs Box */}
                <div className="mt-4 grid grid-cols-2 gap-2 bg-amber-50/60 p-3 rounded-xl border border-brand-gold/20 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Net Metal Weight</span>
                    <span className="font-bold text-slate-800">{activeModalProduct.weight}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Hallmark Certificate</span>
                    <span className="font-bold text-slate-800">BIS 916 / IGI Laser</span>
                  </div>
                </div>

                {/* Chain Length Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Select Chain Length:</label>
                  <div className="flex flex-wrap gap-2">
                    {['16" Short', '18" Standard', '20" Medium', '22" Double Line', '24" Long'].map(len => (
                      <button
                        key={len}
                        onClick={() => setSelectedLength(len)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedLength === len
                            ? 'bg-slate-900 text-brand-gold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange'
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-2xl font-bold text-slate-900">{activeModalProduct.price}</span>
                  <span className="text-xs text-slate-400 line-through">{activeModalProduct.originalPrice}</span>
                  <span className="text-xs font-bold text-emerald-600">Save 10%</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="flex-1 bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-orange-700 text-white py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition-all text-center"
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => setActiveModalProduct(null)}
                    className="px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold hover:bg-slate-50 transition-colors text-slate-700"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
