import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import ring images from src/assets/img/Rings/
const ringImg1 = "https://res.cloudinary.com/upodegd7/image/upload/16ea9a100765f0fe242f6bc0e62ea807.jpg";
const ringImg2 = "https://res.cloudinary.com/upodegd7/image/upload/3635-6-69448BrassLeafDesignerRingforWomen1.webp";
const ringImg3 = "https://res.cloudinary.com/upodegd7/image/upload/61ThxBRrVtL._AC_UY1100_.jpg";
const ringImg4 = "https://res.cloudinary.com/upodegd7/image/upload/81MVqOnQ7LL._AC_UY1100_.jpg";
const ringImg5 = "https://res.cloudinary.com/upodegd7/image/upload/BINS0639R11_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-65665.jpg";
const ringImg6 = "https://res.cloudinary.com/upodegd7/image/upload/C002660__1.webp";
const ringImg7 = "https://res.cloudinary.com/upodegd7/image/upload/DCBE00658-1.jpg";
const ringImg8 = "https://res.cloudinary.com/upodegd7/image/upload/GR00107__1.webp";
const ringImg9 = "https://res.cloudinary.com/upodegd7/image/upload/JR07849-1YS300_11_listfront.png";
const ringImg10 = "https://res.cloudinary.com/upodegd7/image/upload/free-size-1-pan-gold-ring-women-ring-miral-original-imahcw4k6trdnrhx.webp";
const ringImg11 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const ringImg12 = "https://res.cloudinary.com/upodegd7/image/upload/women-wedding-gold-ring-2220011683-dc3xcrhg.avif";

// Import catalog polished rings
const ringImg13 = "https://res.cloudinary.com/upodegd7/image/upload/rings_polished.jpg";
const ringImg14 = "https://res.cloudinary.com/upodegd7/image/upload/rings.webp";

export default function RingsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedRingSize, setSelectedRingSize] = useState('14');
  const [cartAlert, setCartAlert] = useState(null);

  const ringsList = [
    {
      id: 1,
      name: "Maharani Solitaire Diamond Crown Ring",
      category: "Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "5.40 g",
      priceNum: 86000,
      price: "₹86,000",
      originalPrice: "₹96,000",
      rating: 5.0,
      reviews: 162,
      image: ringImg1,
      badge: "IGI Certified",
      description: "Center VVS solitaire surrounded by a luminous halo of brilliant diamonds set in solid 18K yellow gold.",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Nature Leaf Filigree Designer Gold Ring",
      category: "Floral & Filigree",
      purity: "22KT Yellow Gold",
      weight: "6.80 g",
      priceNum: 54000,
      price: "₹54,000",
      originalPrice: "₹61,000",
      rating: 4.9,
      reviews: 114,
      image: ringImg2,
      badge: "Trending Design",
      description: "Inspired by sacred botanical motifs, this handcrafted leaf pattern wraps gracefully with delicate vein filigree.",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Imperial Kundan Jadau Statement Ring",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "12.20 g",
      priceNum: 92000,
      price: "₹92,000",
      originalPrice: "₹1,04,000",
      rating: 5.0,
      reviews: 98,
      image: ringImg3,
      badge: "Bridal Exclusive",
      description: "A showstopping royal oversized cocktail ring featuring uncut syndicate polki and rich ruby meenakari edging.",
      isBestseller: true,
    },
    {
      id: 4,
      name: "Royal Peacock Gemstone Cocktail Ring",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "10.50 g",
      priceNum: 79000,
      price: "₹79,000",
      originalPrice: "₹88,000",
      rating: 4.8,
      reviews: 87,
      image: ringImg4,
      badge: "Artisan Special",
      description: "Graceful peacock feathers rendered in micro-pavé CZ and emerald-cut ruby crystals on a textured 22K gold shank.",
      isBestseller: false,
    },
    {
      id: 5,
      name: "Eternal Floral Cluster 22K Gold Ring",
      category: "Floral & Filigree",
      purity: "22KT Yellow Gold",
      weight: "4.90 g",
      priceNum: 39500,
      price: "₹39,500",
      originalPrice: "₹44,000",
      rating: 4.9,
      reviews: 130,
      image: ringImg5,
      badge: "Everyday Luxury",
      description: "A blossom of seven radiant golden petals featuring diamond-cut micro-facets that sparkle under any light.",
      isBestseller: true,
    },
    {
      id: 6,
      name: "Contemporary Geometric Diamond Band",
      category: "Dailywear & Bands",
      purity: "18KT Diamond Studded",
      weight: "3.80 g",
      priceNum: 48000,
      price: "₹48,000",
      originalPrice: "₹53,500",
      rating: 4.7,
      reviews: 75,
      image: ringImg6,
      badge: "Modern Chic",
      description: "Sleek unisex architectural lines studded with channel-set natural diamonds, ideal for stackable modern aesthetics.",
      isBestseller: false,
    },
    {
      id: 7,
      name: "Antique South Temple Divine Ring",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "8.60 g",
      priceNum: 68000,
      price: "₹68,000",
      originalPrice: "₹75,000",
      rating: 4.9,
      reviews: 142,
      image: ringImg7,
      badge: "Temple Heritage",
      description: "Hand-embossed temple deity medallion with matte antique nagas patina and auspicious red kemp stone embellishments.",
      isBestseller: true,
    },
    {
      id: 8,
      name: "Classic Solitaire 6-Prong Engagement Ring",
      category: "Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "4.20 g",
      priceNum: 74000,
      price: "₹74,000",
      originalPrice: "₹82,000",
      rating: 5.0,
      reviews: 215,
      image: ringImg8,
      badge: "Best for Proposal",
      description: "The timeless engagement ring silhouette with elevated six-prong platinum crown holding a flawless brilliant diamond.",
      isBestseller: true,
    },
    {
      id: 9,
      name: "Infinity Twin Row Diamond Cocktail Ring",
      category: "Solitaire & Diamond",
      purity: "18KT Diamond Studded",
      weight: "5.10 g",
      priceNum: 62000,
      price: "₹62,000",
      originalPrice: "₹69,000",
      rating: 4.8,
      reviews: 69,
      image: ringImg9,
      badge: "New Arrival",
      description: "Two intertwined infinity ribbons of lustrous gold and brilliant pavé diamonds symbolizing timeless love.",
      isBestseller: false,
    },
    {
      id: 10,
      name: "Traditional Indian Free-Size Pan Ring",
      category: "Dailywear & Bands",
      purity: "22KT Yellow Gold",
      weight: "5.70 g",
      priceNum: 46000,
      price: "₹46,000",
      originalPrice: "₹51,000",
      rating: 4.7,
      reviews: 83,
      image: ringImg10,
      badge: "Adjustable Fit",
      description: "Classic adjustable open-shank betel leaf (pan) inspired ring that fits fingers effortlessly with maximum comfort.",
      isBestseller: false,
    },
    {
      id: 11,
      name: "Navratna Astrological Harmony Gold Ring",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "7.40 g",
      priceNum: 59000,
      price: "₹59,000",
      originalPrice: "₹66,000",
      rating: 4.9,
      reviews: 94,
      image: ringImg11,
      badge: "Auspicious",
      description: "Sacred arrangement of nine planetary gems in 22K hallmarked gold to bestow prosperity, positivity, and elegance.",
      isBestseller: false,
    },
    {
      id: 12,
      name: "Grand Wedding Bridal Varmala Ring",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "11.80 g",
      priceNum: 95000,
      price: "₹95,000",
      originalPrice: "₹1,06,000",
      rating: 5.0,
      reviews: 128,
      image: ringImg12,
      badge: "Grand Bridal",
      description: "A majestic bridal statement piece designed for wedding day celebrations, layered with filigree lacework and kundan.",
      isBestseller: true,
    },
    {
      id: 13,
      name: "Luxe Aura Signature Polished Wave Ring",
      category: "Dailywear & Bands",
      purity: "22KT Yellow Gold",
      weight: "4.50 g",
      priceNum: 36000,
      price: "₹36,000",
      originalPrice: "₹40,000",
      rating: 4.9,
      reviews: 180,
      image: ringImg13,
      badge: "Signature Collection",
      description: "Our iconic fluid wave band crafted in high-mirror polish 22K yellow gold with smooth comfort-fit ergonomics.",
      isBestseller: true,
    },
    {
      id: 14,
      name: "Royal Heritage Multi-Tier Gold Ring",
      category: "Antique & Temple",
      purity: "24KT Pure Gold",
      weight: "9.20 g",
      priceNum: 81000,
      price: "₹81,000",
      originalPrice: "₹90,000",
      rating: 4.9,
      reviews: 104,
      image: ringImg14,
      badge: "24K Pure Gold",
      description: "Three stepped tiers of embossed gold granules honoring historic Maratha and Rajput court jewellery art.",
      isBestseller: false,
    },
  ];

  const categories = ['All', 'Solitaire & Diamond', 'Bridal & Jadau', 'Antique & Temple', 'Floral & Filigree', 'Dailywear & Bands'];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded', '24KT Pure Gold'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} (Ring Size ${selectedRingSize}) added to your shopping bag!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredRings = useMemo(() => {
    return ringsList
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
  }, [ringsList, selectedCategory, selectedPurity, sortBy, searchQuery]);

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
            <span className="text-brand-orange font-semibold">Gold & Diamond Rings Collection</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm">
                <span>💍</span> Certified Solitaires & BIS 916 Hallmarked Gold
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Exquisite Rings & <br className="hidden sm:inline" />
                <span className="text-brand-orange">Solitaire Bands</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Adorn your hands with enduring brilliance. Explore our curated sanctuary of 22K gold cocktail rings, certified solitaire engagement bands, royal bridal jadau pieces, and delicate dailywear rings.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-brand-gold/40 shadow-lg space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">✓</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">100% Certified</h4>
                  <p className="text-[11px] text-slate-600">BIS 916 Hallmark & IGI / SGL Diamonds</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">🔄</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Free Resizing</h4>
                  <p className="text-[11px] text-slate-600">30-day complimentary size adjustment</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">🎁</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Luxury Ring Box</h4>
                  <p className="text-[11px] text-slate-600">Velvet presentation case with LED glow</p>
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
                  {cat} {cat === 'All' ? `(${ringsList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search rings..."
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

      {/* Rings Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedCategory === 'All' ? 'All Rings & Bands' : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Showing {filteredRings.length} certified ring designs</p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Prices inclusive of all taxes & making charges
          </div>
        </div>

        {filteredRings.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">💍</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Rings Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any rings matching your current filter criteria. Try resetting your search or selecting another category.
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
            {filteredRings.map((ring) => (
              <div
                key={ring.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {ring.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-amber-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {ring.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(ring.id)}
                  title="Add to Wishlist"
                  className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-red shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill={wishlist[ring.id] ? "#E73F1E" : "none"}
                    stroke={wishlist[ring.id] ? "#E73F1E" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Image Container with Hover Zoom & Quick View */}
                <div 
                  className="relative aspect-square overflow-hidden bg-amber-50/50 cursor-pointer flex items-center justify-center p-2"
                  onClick={() => setActiveModalProduct(ring)}
                >
                  <img
                    src={ring.image}
                    alt={ring.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveModalProduct(ring); }}
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
                      <span>{ring.purity}</span>
                      <span className="bg-amber-100/80 px-2 py-0.5 rounded text-slate-800">{ring.weight}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(ring)}
                      className="text-base font-semibold text-slate-900 hover:text-brand-orange transition-colors cursor-pointer line-clamp-1"
                    >
                      {ring.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1.5 mt-1">
                      <div className="flex text-brand-gold text-xs">
                        {"★".repeat(Math.floor(ring.rating))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{ring.rating}</span>
                      <span className="text-[11px] text-slate-400">({ring.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{ring.price}</div>
                      <div className="text-[11px] text-slate-400 line-through">{ring.originalPrice}</div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(ring)}
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

      {/* Ring Sizing Guide & Hallmark Assurance */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-y border-brand-gold/30 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Sizing Chart */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Precise Fit Guarantee</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">How to Measure Your Ring Size</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Wrap a strip of paper or string around the base of your intended finger, mark where it overlaps, measure the millimeter length, and match our standard Indian sizing chart:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-brand-gold/40 shadow-sm bg-white">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-amber-50 text-slate-800 font-bold border-b border-brand-gold/30">
                    <tr>
                      <th className="px-4 py-2.5">Indian Size</th>
                      <th className="px-4 py-2.5">Inner Diameter (mm)</th>
                      <th className="px-4 py-2.5">Finger Circumference (mm)</th>
                      <th className="px-4 py-2.5">US / Global Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="px-4 py-2 font-semibold">Size 10</td><td className="px-4 py-2">15.9 mm</td><td className="px-4 py-2">50.0 mm</td><td className="px-4 py-2">US 5.5</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold">Size 12</td><td className="px-4 py-2">16.5 mm</td><td className="px-4 py-2">51.9 mm</td><td className="px-4 py-2">US 6.0</td></tr>
                    <tr><td className="px-4 py-2 font-semibold text-brand-orange">Size 14 (Standard Women)</td><td className="px-4 py-2 font-semibold">17.2 mm</td><td className="px-4 py-2">54.0 mm</td><td className="px-4 py-2 font-semibold">US 7.0</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold">Size 16</td><td className="px-4 py-2">17.8 mm</td><td className="px-4 py-2">56.0 mm</td><td className="px-4 py-2">US 7.5</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Size 18 (Standard Men)</td><td className="px-4 py-2">18.5 mm</td><td className="px-4 py-2">58.1 mm</td><td className="px-4 py-2">US 8.5</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold">Size 20</td><td className="px-4 py-2">19.1 mm</td><td className="px-4 py-2">60.0 mm</td><td className="px-4 py-2">US 9.0</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Solitaire & Ring Consultation */}
            <div className="bg-gradient-to-br from-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-4 shadow-2xl relative overflow-hidden border border-brand-gold">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl"></div>
              <span className="text-xs uppercase tracking-widest text-brand-lightgold font-semibold">Custom Solitaire Studio</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-chicago text-white">Design Your Dream Engagement Ring</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Choose your diamond cut (Round, Oval, Emerald, Cushion), select your gold band (Yellow, Rose, Platinum 950), and let our master gemologists craft an eternal memory.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-brand-orange hover:bg-brand-red text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
                >
                  Book Solitaire Specialist
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
                    <span className="font-bold text-slate-800">BIS 916 / IGI Diamond</span>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Select Ring Size (Indian Standard):</label>
                  <div className="flex flex-wrap gap-2">
                    {['10', '12', '14', '16', '18', '20'].map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedRingSize(size)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedRingSize === size
                            ? 'bg-slate-900 text-brand-gold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange'
                        }`}
                      >
                        Size {size}
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
