import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import necklace images from src/assets/img/Necklace/
const necklaceImg1 = "https://res.cloudinary.com/upodegd7/image/upload/-88x4h3st.avif";
const necklaceImg2 = "https://res.cloudinary.com/upodegd7/image/upload/1747378417522-9b25886f-27af-44a2-85db-82c8282aaa58.webp";
const necklaceImg3 = "https://res.cloudinary.com/upodegd7/image/upload/1784123537_3c6762b551750038f7e4.webp";
const necklaceImg4 = "https://res.cloudinary.com/upodegd7/image/upload/525fa0f0eb9beb5a8c087e36c586e6c3.jpg";
const necklaceImg5 = "https://res.cloudinary.com/upodegd7/image/upload/7b7c9578583a9a60dd2d1443ac688525.jpg";
const necklaceImg6 = "https://res.cloudinary.com/upodegd7/image/upload/87983a63ac98e911f2c2bd2437c09b82.jpg";
const necklaceImg7 = "https://res.cloudinary.com/upodegd7/image/upload/attractive-designer-and-fancy-golden-22k-real-gold-necklace-weight-20-gram-088.jpg";
const necklaceImg8 = "https://res.cloudinary.com/upodegd7/image/upload/beautiful-traditional-designer-gold-necklace-and-earring-set-091.jpg";
const necklaceImg9 = "https://res.cloudinary.com/upodegd7/image/upload/il_570xN.5151572033_dkb9.webp";
const necklaceImg10 = "https://res.cloudinary.com/upodegd7/image/upload/images_1.jpg";
const necklaceImg11 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const necklaceImg12 = "https://res.cloudinary.com/upodegd7/image/upload/traditional-gold-necklace-set-for-girls-802317371-a065x4n9.jpg";
const necklaceImg13 = "https://res.cloudinary.com/upodegd7/image/upload/whatsapp-image-2024-08-20-at-12-01-17-pm-2.jpeg";

// Import catalog polished necklaces
const necklaceImg14 = "https://res.cloudinary.com/upodegd7/image/upload/necklace_polished.jpg";
const necklaceImg15 = "https://res.cloudinary.com/upodegd7/image/upload/nackles.jpeg";

export default function NecklacePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedLength, setSelectedLength] = useState('16 inches');
  const [cartAlert, setCartAlert] = useState(null);

  const necklacesList = [
    {
      id: 1,
      name: "Maharani Polki Jadau Choker Set",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "68.50 g",
      priceNum: 485000,
      price: "₹4,85,000",
      originalPrice: "₹5,40,000",
      rating: 5.0,
      reviews: 185,
      image: necklaceImg1,
      badge: "Bridal Masterpiece",
      description: "Heirloom bridal choker handcrafted with uncut syndicate polki, natural Zambian emerald beads, and pearl drops in 22K gold.",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Grand Peacock Temple Nagas Necklace",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "54.20 g",
      priceNum: 395000,
      price: "₹3,95,000",
      originalPrice: "₹4,30,000",
      rating: 4.9,
      reviews: 142,
      image: necklaceImg2,
      badge: "Temple Heritage",
      description: "Authentic South Indian temple craft featuring dancing peacocks and blooming lotuses with antique oxidized finish.",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Royal Rajputana Meenakari Hasli Choker",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "48.60 g",
      priceNum: 345000,
      price: "₹3,45,000",
      originalPrice: "₹3,80,000",
      rating: 4.9,
      reviews: 97,
      image: necklaceImg3,
      badge: "Jaipur Meenakari",
      description: "Traditional Jaipur enamel work in vibrant crimson and green, framing a bold 22K gold collar neckline with matching earrings.",
      isBestseller: false,
    },
    {
      id: 4,
      name: "Imperial Kundan Floral Choker Suite",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "62.10 g",
      priceNum: 440000,
      price: "₹4,40,000",
      originalPrice: "₹4,85,000",
      rating: 5.0,
      reviews: 168,
      image: necklaceImg4,
      badge: "Grand Wedding",
      description: "Intricately clustered kundan gemstones crowned with lustrous South Sea pearls and hand-threaded adjustable dori clasp.",
      isBestseller: true,
    },
    {
      id: 5,
      name: "Vintage Filigree Lakshmi Rani Haar",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "78.40 g",
      priceNum: 560000,
      price: "₹5,60,000",
      originalPrice: "₹6,15,000",
      rating: 5.0,
      reviews: 210,
      image: necklaceImg5,
      badge: "Long Rani Haar",
      description: "A monumental 26-inch royal layered necklace featuring an ornate Goddess Lakshmi pendant with micro-granulation work.",
      isBestseller: true,
    },
    {
      id: 6,
      name: "Classic Floral Cutwork 22K Gold Necklace",
      category: "Contemporary & Chic",
      purity: "22KT Yellow Gold",
      weight: "32.80 g",
      priceNum: 235000,
      price: "₹2,35,000",
      originalPrice: "₹2,58,000",
      rating: 4.8,
      reviews: 86,
      image: necklaceImg6,
      badge: "Festive Favorite",
      description: "Delicate openwork mesh petals with high-refraction diamond cut faceting for supreme golden radiance at festive gatherings.",
      isBestseller: false,
    },
    {
      id: 7,
      name: "Designer Fancy Lightweight 20g Gold Collar",
      category: "Contemporary & Chic",
      purity: "22KT Yellow Gold",
      weight: "20.10 g",
      priceNum: 145000,
      price: "₹1,45,000",
      originalPrice: "₹1,60,000",
      rating: 4.8,
      reviews: 125,
      image: necklaceImg7,
      badge: "Best Value 20g",
      description: "Sleek and modern 20-gram engineered 22K gold necklace offering immense visual volume without heavy neck strain.",
      isBestseller: true,
    },
    {
      id: 8,
      name: "Traditional Complete Necklace & Jhumka Set",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "58.70 g",
      priceNum: 418000,
      price: "₹4,18,000",
      originalPrice: "₹4,60,000",
      rating: 4.9,
      reviews: 139,
      image: necklaceImg8,
      badge: "Matching Set",
      description: "A complete coordinated suite featuring a majestic floral gold necklace and twin handcrafted bell jhumkas with hanging latkans.",
      isBestseller: true,
    },
    {
      id: 9,
      name: "Heirloom Antique Goddess Pendant Necklace",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "44.50 g",
      priceNum: 318000,
      price: "₹3,18,000",
      originalPrice: "₹3,50,000",
      rating: 4.9,
      reviews: 91,
      image: necklaceImg9,
      badge: "Heritage Exclusive",
      description: "Deep antique matte gold pendant suspended on double-strand gold ball malas, adorned with authentic ruby red stones.",
      isBestseller: false,
    },
    {
      id: 10,
      name: "Padmavati Multi-Gemstone Collar Necklace",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "51.00 g",
      priceNum: 365000,
      price: "₹3,65,000",
      originalPrice: "₹4,00,000",
      rating: 4.8,
      reviews: 77,
      image: necklaceImg10,
      badge: "Royal Collection",
      description: "Inspired by ancient royal courts, adorned with bezel-set emeralds, rubies, and handcrafted dangling gold ghungroos.",
      isBestseller: false,
    },
    {
      id: 11,
      name: "Subtle Gold Coin Kasu Mala Necklace",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "36.20 g",
      priceNum: 258000,
      price: "₹258,000",
      originalPrice: "₹2,82,000",
      rating: 4.9,
      reviews: 118,
      image: necklaceImg11,
      badge: "Auspicious Kasu",
      description: "Overlapping embossed Lakshmi gold coins strung in flawless unison to invite prosperity, wealth, and timeless tradition.",
      isBestseller: false,
    },
    {
      id: 12,
      name: "Shree Shringar Festive Gold Necklace Set",
      category: "Contemporary & Chic",
      purity: "22KT Yellow Gold",
      weight: "39.40 g",
      priceNum: 279000,
      price: "₹2,79,000",
      originalPrice: "₹3,05,000",
      rating: 4.8,
      reviews: 84,
      image: necklaceImg12,
      badge: "Trending 2026",
      description: "Delicate lattice mesh neckpiece paired with matching drop earrings, crafted for weddings, sangeet, and reception galas.",
      isBestseller: false,
    },
    {
      id: 13,
      name: "Bespoke Royal Kundan & Ruby Bridal Collar",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "65.30 g",
      priceNum: 465000,
      price: "₹4,65,000",
      originalPrice: "₹5,10,000",
      rating: 5.0,
      reviews: 153,
      image: necklaceImg13,
      badge: "Bridal Exclusive",
      description: "Masterpiece multi-tier choker with teardrop ruby accents, hand-cut polki crystals, and royal velvet inner neck lining.",
      isBestseller: true,
    },
    {
      id: 14,
      name: "Luxe Aura Signature Peacock Gold Necklace",
      category: "Contemporary & Chic",
      purity: "22KT Yellow Gold",
      weight: "42.00 g",
      priceNum: 298000,
      price: "₹2,98,000",
      originalPrice: "₹3,28,000",
      rating: 4.9,
      reviews: 260,
      image: necklaceImg14,
      badge: "Signature Collection",
      description: "Our signature high-polish peacock neckpiece sculpted with mirror-finish golden feathers and fine filigree lace borders.",
      isBestseller: true,
    },
    {
      id: 15,
      name: "Diamond Constellation 18K Solitaire Necklace",
      category: "Diamond & Solitaire",
      purity: "18KT Diamond Studded",
      weight: "28.50 g",
      priceNum: 385000,
      price: "₹3,85,000",
      originalPrice: "₹4,25,000",
      rating: 5.0,
      reviews: 112,
      image: necklaceImg15,
      badge: "IGI Certified",
      description: "A cascade of 152 brilliant round-cut VVS diamonds set in fluid 18K white and rose gold channels for maximum fire.",
      isBestseller: true,
    },
  ];

  const categories = ['All', 'Bridal & Jadau', 'Antique & Temple', 'Contemporary & Chic', 'Diamond & Solitaire'];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded', '24KT Pure Gold'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} (${selectedLength}) added to your shopping bag!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredNecklaces = useMemo(() => {
    return necklacesList
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
  }, [necklacesList, selectedCategory, selectedPurity, sortBy, searchQuery]);

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
            <span className="text-brand-orange font-semibold">Necklaces & Chokers Collection</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm">
                <span>👑</span> BIS 916 Hallmarked Pure Gold & Certified Diamonds
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Royal Necklaces & <br className="hidden sm:inline" />
                <span className="text-brand-orange">Bridal Chokers</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Crown your silhouette with regal splendor. From uncut Polki chokers and sacred South Indian Temple Nagas malas to contemporary 20g lightweight gold collars and brilliant diamond cascades.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-brand-gold/40 shadow-lg space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">✓</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">100% Certified</h4>
                  <p className="text-[11px] text-slate-600">BIS 916 Hallmark & IGI Certification</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">🔄</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Lifetime Exchange</h4>
                  <p className="text-[11px] text-slate-600">100% gold weight value guarantee</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">📦</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Insured Armored Transit</h4>
                  <p className="text-[11px] text-slate-600">Doorstep delivery with secure PIN release</p>
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
                  {cat} {cat === 'All' ? `(${necklacesList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search necklaces..."
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

      {/* Necklaces Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedCategory === 'All' ? 'All Necklaces & Chokers' : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Showing {filteredNecklaces.length} handcrafted necklace masterpieces</p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Prices inclusive of all taxes & making charges
          </div>
        </div>

        {filteredNecklaces.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">👑</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Necklaces Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any necklaces matching your current filter criteria. Try resetting your search or selecting another category.
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
            {filteredNecklaces.map((necklace) => (
              <div
                key={necklace.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {necklace.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-amber-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {necklace.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(necklace.id)}
                  title="Add to Wishlist"
                  className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-red shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill={wishlist[necklace.id] ? "#E73F1E" : "none"}
                    stroke={wishlist[necklace.id] ? "#E73F1E" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Image Container with Hover Zoom & Quick View */}
                <div 
                  className="relative aspect-square overflow-hidden bg-amber-50/50 cursor-pointer flex items-center justify-center p-2"
                  onClick={() => setActiveModalProduct(necklace)}
                >
                  <img
                    src={necklace.image}
                    alt={necklace.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveModalProduct(necklace); }}
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
                      <span>{necklace.purity}</span>
                      <span className="bg-amber-100/80 px-2 py-0.5 rounded text-slate-800">{necklace.weight}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(necklace)}
                      className="text-base font-semibold text-slate-900 hover:text-brand-orange transition-colors cursor-pointer line-clamp-1"
                    >
                      {necklace.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1.5 mt-1">
                      <div className="flex text-brand-gold text-xs">
                        {"★".repeat(Math.floor(necklace.rating))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{necklace.rating}</span>
                      <span className="text-[11px] text-slate-400">({necklace.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{necklace.price}</div>
                      <div className="text-[11px] text-slate-400 line-through">{necklace.originalPrice}</div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(necklace)}
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

      {/* Necklace Length Guide & Layering Tips */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-y border-brand-gold/30 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Length Chart */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Flawless Neckline Styling</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">Necklace Length & Layering Guide</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Choose the perfect necklace length to complement your blouse, lehenga neckline, or evening gown:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-brand-gold/40 shadow-sm bg-white">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-amber-50 text-slate-800 font-bold border-b border-brand-gold/30">
                    <tr>
                      <th className="px-4 py-2.5">Style Style</th>
                      <th className="px-4 py-2.5">Length (Inches)</th>
                      <th className="px-4 py-2.5">Position on Body</th>
                      <th className="px-4 py-2.5">Ideal Neckline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="px-4 py-2 font-semibold">Choker</td><td className="px-4 py-2">14 - 15 in</td><td className="px-4 py-2">Snug on neck base</td><td className="px-4 py-2">Deep Sweetheart / V-Neck</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold text-brand-orange">Collar (Standard Bridal)</td><td className="px-4 py-2 font-semibold">16 in</td><td className="px-4 py-2">At collarbone</td><td className="px-4 py-2">Round / Boat / Square Neck</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Princess Mala</td><td className="px-4 py-2">18 - 20 in</td><td className="px-4 py-2">Below collarbone</td><td className="px-4 py-2">Versatile / Saree Blouse</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold">Matinee Layer</td><td className="px-4 py-2">22 - 24 in</td><td className="px-4 py-2">At center bust</td><td className="px-4 py-2">Layered with Choker</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Royal Rani Haar (Opera)</td><td className="px-4 py-2">26 - 32 in</td><td className="px-4 py-2">Below bustline</td><td className="px-4 py-2">Grand Bridal Layering</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Bridal Trousseau Consultation */}
            <div className="bg-gradient-to-br from-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-4 shadow-2xl relative overflow-hidden border border-brand-gold">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl"></div>
              <span className="text-xs uppercase tracking-widest text-brand-lightgold font-semibold">Bridal Trousseau Concierge</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-chicago text-white">Custom Bridal Suite Crafting</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Looking to match your wedding lehenga embroidery or craft a matching Maang Tikka, Nath, and Hathphool set to your dream necklace? Our royal stylists are at your service.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-brand-orange hover:bg-brand-red text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
                >
                  Book Video Consultation
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
                    <span className="text-slate-500 block text-[10px]">Net Gold Weight</span>
                    <span className="font-bold text-slate-800">{activeModalProduct.weight}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Hallmark Certificate</span>
                    <span className="font-bold text-slate-800">BIS 916 Laser Marked</span>
                  </div>
                </div>

                {/* Chain Length Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Select Chain / Dori Length:</label>
                  <div className="flex flex-wrap gap-2">
                    {['14" Choker', '16" Collar', '18" Princess', '22" Matinee', '26" Rani Haar'].map(length => (
                      <button
                        key={length}
                        onClick={() => setSelectedLength(length)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedLength === length
                            ? 'bg-slate-900 text-brand-gold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange'
                        }`}
                      >
                        {length}
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
