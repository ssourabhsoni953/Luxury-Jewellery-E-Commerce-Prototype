import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import nosepin images from src/assets/img/Nose-pin/
const nosepinImg1 = "https://res.cloudinary.com/upodegd7/image/upload/1574.webp";
const nosepinImg2 = "https://res.cloudinary.com/upodegd7/image/upload/1750220537736_3.webp";
const nosepinImg3 = "https://res.cloudinary.com/upodegd7/image/upload/18KDIJVTR307_1.webp";
const nosepinImg4 = "https://res.cloudinary.com/upodegd7/image/upload/1_8807b9a7_thumbnail_1024.jpg";
const nosepinImg5 = "https://res.cloudinary.com/upodegd7/image/upload/2819OHQ_1.webp";
const nosepinImg6 = "https://res.cloudinary.com/upodegd7/image/upload/BIVS0021X06_YAA18YLSPXXXXXXXX_ABCD00-PICS-00004-1024-23236.jpg";
const nosepinImg7 = "https://res.cloudinary.com/upodegd7/image/upload/F60CBD6C-86FC-4C8E-827B-69FCCD8C9330.webp";
const nosepinImg8 = "https://res.cloudinary.com/upodegd7/image/upload/il_570xN.7517085477_6m07.avif";
const nosepinImg9 = "https://res.cloudinary.com/upodegd7/image/upload/images_1.jpg";
const nosepinImg10 = "https://res.cloudinary.com/upodegd7/image/upload/images_2.jpg";
const nosepinImg11 = "https://res.cloudinary.com/upodegd7/image/upload/images_3.jpg";
const nosepinImg12 = "https://res.cloudinary.com/upodegd7/image/upload/images_4.jpg";
const nosepinImg13 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const nosepinImg14 = "https://res.cloudinary.com/upodegd7/image/upload/nosem61.webp";
const nosepinImg15 = "https://res.cloudinary.com/upodegd7/image/upload/np0299_copy.webp";

// Import catalog polished nosepin
const nosepinImg16 = "https://res.cloudinary.com/upodegd7/image/upload/nosepin_polished.jpg";
const nosepinImg17 = "https://res.cloudinary.com/upodegd7/image/upload/nosepins.png";

export default function NosepinsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedFastening, setSelectedFastening] = useState('Wire (Pierced)');
  const [cartAlert, setCartAlert] = useState(null);

  const nosepinsList = [
    {
      id: 1,
      name: "Maharani Royal Maharashtrian Pearl Nath",
      category: "Traditional Bridal Naths",
      purity: "22KT Yellow Gold",
      weight: "4.80 g",
      priceNum: 38500,
      price: "₹38,500",
      originalPrice: "₹43,000",
      rating: 5.0,
      reviews: 194,
      image: nosepinImg1,
      badge: "Bridal Masterpiece",
      description: "Iconic Brahmani cashewnut silhouette adorned with genuine Basra seed pearls, ruby cabochons, and emerald drops.",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Solitaire Blossom 18K Diamond Nose Stud",
      category: "Classic Solitaire Studs",
      purity: "18KT Diamond Studded",
      weight: "0.85 g",
      priceNum: 16500,
      price: "₹16,500",
      originalPrice: "₹19,000",
      rating: 5.0,
      reviews: 310,
      image: nosepinImg2,
      badge: "IGI Certified",
      description: "A brilliant round-cut VVS solitaire diamond held in a delicate 4-prong setting with twist-wire comfort post.",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Floral Cluster 7-Diamond Star Nose Pin",
      category: "Floral & Peacock Studs",
      purity: "18KT Diamond Studded",
      weight: "1.20 g",
      priceNum: 24000,
      price: "₹24,000",
      originalPrice: "₹27,500",
      rating: 4.9,
      reviews: 148,
      image: nosepinImg3,
      badge: "Popular Sparkle",
      description: "Seven brilliant natural diamonds clustered to form a shimmering floral starburst on solid 18K yellow gold.",
      isBestseller: true,
    },
    {
      id: 4,
      name: "Royal Rajputana Kundan Nath with Pearl Chain",
      category: "Traditional Bridal Naths",
      purity: "22KT Yellow Gold",
      weight: "6.40 g",
      priceNum: 52000,
      price: "₹52,000",
      originalPrice: "₹58,000",
      rating: 5.0,
      reviews: 112,
      image: nosepinImg4,
      badge: "Grand Bridal",
      description: "Circular royal bridal hoop with kundan centerpiece and delicate single-strand pearl chain securing into hair.",
      isBestseller: true,
    },
    {
      id: 5,
      name: "Petite Free-Fit Non-Piercing Clip-On Nath",
      category: "Clip-On (Non-Pierced)",
      purity: "22KT Yellow Gold",
      weight: "2.10 g",
      priceNum: 18500,
      price: "₹18,500",
      originalPrice: "₹21,000",
      rating: 4.8,
      reviews: 165,
      image: nosepinImg5,
      badge: "No Piercing Needed",
      description: "Gentle spring-action smooth clip mechanism that holds firmly and painlessly on unpierced nostrils.",
      isBestseller: true,
    },
    {
      id: 6,
      name: "Classic 22K Solid Gold Ball Nose Stud",
      category: "Dailywear & Minimalist",
      purity: "22KT Yellow Gold",
      weight: "0.60 g",
      priceNum: 5800,
      price: "₹5,800",
      originalPrice: "₹6,500",
      rating: 4.9,
      reviews: 280,
      image: nosepinImg6,
      badge: "Daily Essential",
      description: "Smooth mirror-polished 22K pure gold bead stud with smooth rounded edges, perfect for 24/7 wear.",
      isBestseller: false,
    },
    {
      id: 7,
      name: "Peacock Dancing Feather Ruby Nose Pin",
      category: "Floral & Peacock Studs",
      purity: "22KT Yellow Gold",
      weight: "1.40 g",
      priceNum: 14200,
      price: "₹14,200",
      originalPrice: "₹16,000",
      rating: 4.8,
      reviews: 84,
      image: nosepinImg7,
      badge: "Peacock Art",
      description: "Miniature hand-carved peacock head embellished with an eye ruby stone and textured feather tail.",
      isBestseller: false,
    },
    {
      id: 8,
      name: "South Indian Temple Mookuthi Nose Ring",
      category: "Traditional Bridal Naths",
      purity: "22KT Yellow Gold",
      weight: "1.80 g",
      priceNum: 16800,
      price: "₹16,800",
      originalPrice: "₹19,000",
      rating: 4.9,
      reviews: 95,
      image: nosepinImg8,
      badge: "Temple Mookuthi",
      description: "Traditional South Indian sunburst mookuthi studded with authentic red kemp stones in pure 22K gold bezel.",
      isBestseller: false,
    },
    {
      id: 9,
      name: "Dainty Crescent Moon Diamond Nose Pin",
      category: "Dailywear & Minimalist",
      purity: "18KT Diamond Studded",
      weight: "0.95 g",
      priceNum: 13500,
      price: "₹13,500",
      originalPrice: "₹15,200",
      rating: 4.7,
      reviews: 76,
      image: nosepinImg9,
      badge: "Trending 2026",
      description: "Slender curved crescent moon set with micro-pavé diamonds, offering delicate modern subtlety.",
      isBestseller: false,
    },
    {
      id: 10,
      name: "Peshwai Royal Maharashtrian Karwari Nath",
      category: "Traditional Bridal Naths",
      purity: "22KT Yellow Gold",
      weight: "5.20 g",
      priceNum: 42000,
      price: "₹42,000",
      originalPrice: "₹47,000",
      rating: 5.0,
      reviews: 138,
      image: nosepinImg10,
      badge: "Peshwai Royal",
      description: "Historic Peshwa-era court design featuring emerald beads, pearls, and pure gold wire lacework.",
      isBestseller: true,
    },
    {
      id: 11,
      name: "Modern Geometric Hexagon Diamond Stud",
      category: "Dailywear & Minimalist",
      purity: "18KT Diamond Studded",
      weight: "1.10 g",
      priceNum: 17800,
      price: "₹17,800",
      originalPrice: "₹20,000",
      rating: 4.8,
      reviews: 63,
      image: nosepinImg11,
      badge: "Modern Minimal",
      description: "Clean hexagonal bezel enclosing a sparkling central diamond for contemporary workplace chic.",
      isBestseller: false,
    },
    {
      id: 12,
      name: "Vintage Leaf Filigree Nose Ring",
      category: "Floral & Peacock Studs",
      purity: "22KT Yellow Gold",
      weight: "1.30 g",
      priceNum: 12800,
      price: "₹12,800",
      originalPrice: "₹14,500",
      rating: 4.7,
      reviews: 58,
      image: nosepinImg12,
      badge: "Botanical",
      description: "Handcrafted filigree leaf contour with subtle diamond-cut facets that catch the light effortlessly.",
      isBestseller: false,
    },
    {
      id: 13,
      name: "Padmavati Teardrop Kundan Clip Nath",
      category: "Clip-On (Non-Pierced)",
      purity: "22KT Yellow Gold",
      weight: "3.40 g",
      priceNum: 29500,
      price: "₹29,500",
      originalPrice: "₹33,000",
      rating: 4.9,
      reviews: 104,
      image: nosepinImg13,
      badge: "Non-Pierced Bridal",
      description: "Grand teardrop uncut polki stone with ruby halo, designed as a slip-on clip nath for festive comfort.",
      isBestseller: false,
    },
    {
      id: 14,
      name: "Subtle Gold Wire Open Loop Nose Ring",
      category: "Dailywear & Minimalist",
      purity: "22KT Yellow Gold",
      weight: "0.75 g",
      priceNum: 6900,
      price: "₹6,900",
      originalPrice: "₹7,800",
      rating: 4.8,
      reviews: 119,
      image: nosepinImg14,
      badge: "Classic Hoop",
      description: "Seamless 22K yellow gold hoop with smooth ball stop, ultra-comfortable for active lifestyle.",
      isBestseller: false,
    },
    {
      id: 15,
      name: "Emerald Bloom 6-Stone Gold Nose Pin",
      category: "Floral & Peacock Studs",
      purity: "22KT Yellow Gold",
      weight: "1.50 g",
      priceNum: 15200,
      price: "₹15,200",
      originalPrice: "₹17,000",
      rating: 4.9,
      reviews: 82,
      image: nosepinImg15,
      badge: "Emerald Glow",
      description: "Vibrant emerald center accented with micro-pearl granules on solid 22K yellow gold mount.",
      isBestseller: false,
    },
    {
      id: 16,
      name: "Luxe Aura Signature Polished Diamond Nosepin",
      category: "Classic Solitaire Studs",
      purity: "18KT Diamond Studded",
      weight: "1.10 g",
      priceNum: 21000,
      price: "₹21,000",
      originalPrice: "₹24,000",
      rating: 5.0,
      reviews: 260,
      image: nosepinImg16,
      badge: "Signature Collection",
      description: "Our signature flagship VVS diamond nose pin set in high-mirror polish 18K yellow gold with screw post.",
      isBestseller: true,
    },
    {
      id: 17,
      name: "Imperial Bridal Kundan Chained Nath Suite",
      category: "Traditional Bridal Naths",
      purity: "22KT Yellow Gold",
      weight: "7.20 g",
      priceNum: 58000,
      price: "₹58,000",
      originalPrice: "₹65,000",
      rating: 5.0,
      reviews: 145,
      image: nosepinImg17,
      badge: "Bridal Exclusive",
      description: "Large royal bridal ring with 3-strand pearl chain extension and uncut polki setting for grand wedding entry.",
      isBestseller: true,
    },
  ];

  const categories = ['All', 'Classic Solitaire Studs', 'Traditional Bridal Naths', 'Floral & Peacock Studs', 'Clip-On (Non-Pierced)', 'Dailywear & Minimalist'];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} (${selectedFastening}) added to your shopping bag!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredNosepins = useMemo(() => {
    return nosepinsList
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
  }, [nosepinsList, selectedCategory, selectedPurity, sortBy, searchQuery]);

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
            <span className="text-brand-orange font-semibold">Nose Pins & Bridal Naths</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm">
                <span>✨</span> BIS 916 Hallmarked Gold & Certified Diamonds
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Graceful Nose Pins & <br className="hidden sm:inline" />
                <span className="text-brand-orange">Royal Bridal Naths</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Add an enchanting sparkle to your visage. From certified solitaire diamond studs and traditional Maharashtrian pearl naths to convenient clip-on non-pierced festive jewelry.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-brand-gold/40 shadow-lg space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">✓</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">100% Hypoallergenic</h4>
                  <p className="text-[11px] text-slate-600">Pure 22K Gold & 18K Nickel-Free</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">📎</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Pierced & Clip-On Options</h4>
                  <p className="text-[11px] text-slate-600">Easy screw, twist-wire & press-fit locks</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">🎁</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Sanitized Luxury Box</h4>
                  <p className="text-[11px] text-slate-600">Sealed sterile tamper-proof capsule</p>
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
                  {cat} {cat === 'All' ? `(${nosepinsList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search nosepins..."
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

      {/* Nosepins Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedCategory === 'All' ? 'All Nose Pins & Naths' : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Showing {filteredNosepins.length} handcrafted designs</p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Prices inclusive of all taxes & making charges
          </div>
        </div>

        {filteredNosepins.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">✨</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Nosepins Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any nosepins matching your current filter criteria. Try resetting your search or selecting another category.
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
            {filteredNosepins.map((pin) => (
              <div
                key={pin.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {pin.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-amber-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {pin.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(pin.id)}
                  title="Add to Wishlist"
                  className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-red shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill={wishlist[pin.id] ? "#E73F1E" : "none"}
                    stroke={wishlist[pin.id] ? "#E73F1E" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Image Container with Hover Zoom & Quick View */}
                <div 
                  className="relative aspect-square overflow-hidden bg-amber-50/50 cursor-pointer flex items-center justify-center p-2"
                  onClick={() => setActiveModalProduct(pin)}
                >
                  <img
                    src={pin.image}
                    alt={pin.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveModalProduct(pin); }}
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
                      <span>{pin.purity}</span>
                      <span className="bg-amber-100/80 px-2 py-0.5 rounded text-slate-800">{pin.weight}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(pin)}
                      className="text-base font-semibold text-slate-900 hover:text-brand-orange transition-colors cursor-pointer line-clamp-1"
                    >
                      {pin.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1.5 mt-1">
                      <div className="flex text-brand-gold text-xs">
                        {"★".repeat(Math.floor(pin.rating))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{pin.rating}</span>
                      <span className="text-[11px] text-slate-400">({pin.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{pin.price}</div>
                      <div className="text-[11px] text-slate-400 line-through">{pin.originalPrice}</div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(pin)}
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

      {/* Nose Pin Fastening & Fit Guide */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-y border-brand-gold/30 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Guide Chart */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Comfort & Piercing Guide</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">Nose Pin Fastenings & Fit Types</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Choose the fastening mechanism that best matches your piercing type and comfort preferences:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-brand-gold/40 shadow-sm bg-white">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-amber-50 text-slate-800 font-bold border-b border-brand-gold/30">
                    <tr>
                      <th className="px-4 py-2.5">Fastening Type</th>
                      <th className="px-4 py-2.5">Piercing Needed</th>
                      <th className="px-4 py-2.5">Security Level</th>
                      <th className="px-4 py-2.5">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="px-4 py-2 font-semibold">Twist Wire / L-Bend</td><td className="px-4 py-2">Yes (Standard)</td><td className="px-4 py-2">High</td><td className="px-4 py-2">Dailywear Studs</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold text-brand-orange">Screw Back Post</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2 font-semibold">Maximum (Zero Slip)</td><td className="px-4 py-2 font-semibold">Solitaire Diamonds</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Clip-On Spring Nath</td><td className="px-4 py-2">No (Non-Pierced)</td><td className="px-4 py-2">Comfort Firm</td><td className="px-4 py-2">Weddings & Photo Shoots</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold">Seamless Open Hoop</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">Very High</td><td className="px-4 py-2">Boho & Modern Chic</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Bridal Nath & Face Matching Consultation */}
            <div className="bg-gradient-to-br from-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-4 shadow-2xl relative overflow-hidden border border-brand-gold">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl"></div>
              <span className="text-xs uppercase tracking-widest text-brand-lightgold font-semibold">Bridal Nath Styling</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-chicago text-white">Find Your Perfect Nath Proportion</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Need help matching your face shape, lehenga colors, and jewelry tone with the perfect left/right Maharashtrian or Rajasthani nath? Our stylists are ready.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-brand-orange hover:bg-brand-red text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
                >
                  Book Stylist Advice
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

                {/* Fastening Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Select Fastening Style:</label>
                  <div className="flex flex-wrap gap-2">
                    {['Wire (Pierced)', 'Screw Post (Pierced)', 'Clip-On (Non-Pierced)', 'L-Bend (Pierced)'].map(fast => (
                      <button
                        key={fast}
                        onClick={() => setSelectedFastening(fast)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedFastening === fast
                            ? 'bg-slate-900 text-brand-gold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange'
                        }`}
                      >
                        {fast}
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
