import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import all collection images from src/assets/img/Collection/
const collectionImg1 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const collectionImg2 = "https://res.cloudinary.com/upodegd7/image/upload/images_1.jpg";
const collectionImg3 = "https://res.cloudinary.com/upodegd7/image/upload/images_2.jpg";
const collectionImg4 = "https://res.cloudinary.com/upodegd7/image/upload/images_3.jpg";
const collectionImg5 = "https://res.cloudinary.com/upodegd7/image/upload/images_4.jpg";
const collectionImg6 = "https://res.cloudinary.com/upodegd7/image/upload/images_5.jpg";
const collectionImg7 = "https://res.cloudinary.com/upodegd7/image/upload/images_6.jpg";
const collectionImg8 = "https://res.cloudinary.com/upodegd7/image/upload/images_7.jpg";
const collectionImg9 = "https://res.cloudinary.com/upodegd7/image/upload/images_8.jpg";
const collectionImg10 = "https://res.cloudinary.com/upodegd7/image/upload/images_9.jpg";
const collectionImg11 = "https://res.cloudinary.com/upodegd7/image/upload/images_10.jpg";
const collectionImg12 = "https://res.cloudinary.com/upodegd7/image/upload/images_11.jpg";

export default function CollectionPage() {
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [cartAlert, setCartAlert] = useState(null);

  const collectionsList = [
    {
      id: 1,
      name: "The Royal Heritage Syndicate Polki Choker Suite",
      theme: "Royal Heritage",
      purity: "22KT Yellow Gold",
      weight: "76.40 g",
      priceNum: 585000,
      price: "₹5,85,000",
      originalPrice: "₹6,45,000",
      rating: 5.0,
      reviews: 145,
      image: collectionImg1,
      badge: "Signature Edition",
      description: "Our flagship heritage creation inspired by 18th-century Rajput royal courts. Intricately set with uncut syndicate polki, natural emerald cabochons, and hand-strung South Sea seed pearls.",
      isBestseller: true,
      features: ["24KT Gold Jadau Setting", "Natural Columbian Emeralds", "Heirloom Presentation Box", "Lifetime Gold Buyback"],
    },
    {
      id: 2,
      name: "Celestial Solitaire Diamond & Emerald Collar",
      theme: "Celestial Diamonds",
      purity: "18KT Diamond Studded",
      weight: "52.80 g",
      priceNum: 740000,
      price: "₹7,40,000",
      originalPrice: "₹8,15,000",
      rating: 5.0,
      reviews: 89,
      image: collectionImg2,
      badge: "IGI Certified",
      description: "A dazzling celestial constellation of 180 brilliant-cut VVS-GH diamonds surrounding an exquisite 3.5 carat natural Zambian emerald center-stone.",
      isBestseller: true,
      features: ["IGI Certified VVS Diamonds", "18KT Rose & White Gold", "Laser Micro-Pave Setting", "Complimentary Insurance"],
    },
    {
      id: 3,
      name: "Rajwada Meenakari Peacock Filigree Necklace",
      theme: "Rajwada Kundan",
      purity: "22KT Yellow Gold",
      weight: "64.20 g",
      priceNum: 495000,
      price: "₹4,95,000",
      originalPrice: "₹5,40,000",
      rating: 4.9,
      reviews: 110,
      image: collectionImg3,
      badge: "Jaipur Art",
      description: "Vibrant royal blue and turquoise peacock meenakari enameling on pure 22K gold openwork lattice, adorned with cascading golden latkans.",
      isBestseller: false,
      features: ["Traditional Enamel Work", "Hand-Chiseled Peacocks", "BIS 916 Hallmark", "Matching Earrings Included"],
    },
    {
      id: 4,
      name: "Temple Nagas Ashtalakshmi Antique Mala",
      theme: "Temple Nagas",
      purity: "22KT Yellow Gold",
      weight: "88.00 g",
      priceNum: 680000,
      price: "₹6,80,000",
      originalPrice: "₹7,50,000",
      rating: 5.0,
      reviews: 167,
      image: collectionImg4,
      badge: "Auspicious Temple",
      description: "Authentic South Indian temple craft showcasing eight divine forms of Goddess Lakshmi in deep 3D relief antique gold with red kemp stone bezels.",
      isBestseller: true,
      features: ["Deep 3D Nagas Relief", "Burmese Ruby Accents", "Oxidized Antique Finish", "Sacred Blessing Coin"],
    },
    {
      id: 5,
      name: "Modernist Minimal 22K Geometric Gold Collar",
      theme: "Contemporary Gold",
      purity: "22KT Yellow Gold",
      weight: "34.50 g",
      priceNum: 265000,
      price: "₹2,65,000",
      originalPrice: "₹2,90,000",
      rating: 4.8,
      reviews: 74,
      image: collectionImg5,
      badge: "Modern Chic",
      description: "Sleek, fluid geometric curves with dual mirror and matte brush finishes. Designed for the modern cosmopolitan woman's evening soirées.",
      isBestseller: false,
      features: ["Dual Texture Polish", "Ergonomic Neck Contour", "Lightweight Comfort", "Easy Magnetic Clasp"],
    },
    {
      id: 6,
      name: "Padmavati Imperial Multi-Tier Polki Haar",
      theme: "Royal Heritage",
      purity: "22KT Yellow Gold",
      weight: "105.30 g",
      priceNum: 820000,
      price: "₹8,20,000",
      originalPrice: "₹9,00,000",
      rating: 5.0,
      reviews: 198,
      image: collectionImg6,
      badge: "Grand Festive",
      description: "A majestic three-strand royal necklace featuring uncut diamond medallions strung on fine woven gold threads with pearl tassels.",
      isBestseller: true,
      features: ["Triple Strand Layering", "Syndicate Grade Polki", "Pure 22KT Yellow Gold", "Master Goldsmith Monogram"],
    },
    {
      id: 7,
      name: "Gulabi Meenakari Floral Medallion Pendant",
      theme: "Rajwada Kundan",
      purity: "22KT Yellow Gold",
      weight: "41.60 g",
      priceNum: 320000,
      price: "₹3,20,000",
      originalPrice: "₹3,55,000",
      rating: 4.9,
      reviews: 62,
      image: collectionImg7,
      badge: "Benaras Heritage",
      description: "Rare Banarasi pink enameling (Gulabi Meenakari) over pure gold, depicting blooming lotus flowers centered with radiant uncut polki.",
      isBestseller: false,
      features: ["Rare Pink Enamel Art", "Basra Pearl Hangings", "Reversible Dual Side Finish", "Custom Chain Length"],
    },
    {
      id: 8,
      name: "Aurora Solitaire Diamond Waterfall Choker",
      theme: "Celestial Diamonds",
      purity: "18KT Diamond Studded",
      weight: "48.20 g",
      priceNum: 690000,
      price: "₹6,90,000",
      originalPrice: "₹7,65,000",
      rating: 5.0,
      reviews: 93,
      image: collectionImg8,
      badge: "Haute Joaillerie",
      description: "Graduated cascading drops of round and marquise brilliant diamonds that capture every ray of light with unmatched scintillation.",
      isBestseller: true,
      features: ["Marquise & Round Cuts", "18KT White Gold Prongs", "Invisible Illusion Clasp", "IGI Diamond Certificate"],
    },
    {
      id: 9,
      name: "Kundan & Ruby Devyani Royal Choker",
      theme: "Royal Heritage",
      purity: "22KT Yellow Gold",
      weight: "58.90 g",
      priceNum: 460000,
      price: "₹4,60,000",
      originalPrice: "₹5,10,000",
      rating: 4.9,
      reviews: 118,
      image: collectionImg9,
      badge: "Heritage Classic",
      description: "A regal high-neck collar studded with glowing pigeon-blood rubies set in 24K gold Jadau foil with natural freshwater pearl clusters.",
      isBestseller: false,
      features: ["Pigeon-Blood Rubies", "Handcrafted Silk Tie", "Velvet Neck Lining", "BIS 916 Stamped"],
    },
    {
      id: 10,
      name: "Antique Temple Filigree Kasu Bangle Pair",
      theme: "Temple Nagas",
      purity: "22KT Yellow Gold",
      weight: "46.70 g",
      priceNum: 375000,
      price: "₹3,75,000",
      originalPrice: "₹4,10,000",
      rating: 4.8,
      reviews: 81,
      image: collectionImg10,
      badge: "Handcrafted Art",
      description: "Pair of intricately stamped Goddess coin bangles with openwork filigree borders and screw locks for effortless wear.",
      isBestseller: false,
      features: ["Screw Lock Kada Pair", "Auspicious Motif", "High Relief Engraving", "Solid Inner Core"],
    },
    {
      id: 11,
      name: "Elysian Bloom 22K Gold Lariat & Drops",
      theme: "Contemporary Gold",
      purity: "22KT Yellow Gold",
      weight: "29.40 g",
      priceNum: 228000,
      price: "₹2,28,000",
      originalPrice: "₹2,50,000",
      rating: 4.8,
      reviews: 57,
      image: collectionImg11,
      badge: "Versatile Daily",
      description: "A lightweight modern lariat with delicate floral charms that can be styled at three different lengths for western and ethnic ensembles.",
      isBestseller: false,
      features: ["3-Way Adjustable Length", "Tangle-Free Box Chain", "22KT Bright Yellow Gold", "Gift Ready Packaging"],
    },
    {
      id: 12,
      name: "The Grand Imperial Maharani Heritage Ensemble",
      theme: "Royal Heritage",
      purity: "22KT Yellow Gold",
      weight: "132.00 g",
      priceNum: 995000,
      price: "₹9,95,000",
      originalPrice: "₹10,90,000",
      rating: 5.0,
      reviews: 215,
      image: collectionImg12,
      badge: "Supreme Masterpiece",
      description: "The epitome of high Indian jewellery craftsmanship. A monumental royal suite incorporating all classical techniques: Jadau, Meenakari, and Nagas.",
      isBestseller: true,
      features: ["Tri-Craft Integration", "Syndicate Polki Stones", "Custom Handcrafted Trunk", "100% Value Buyback"],
    },
  ];

  const themes = ['All', 'Royal Heritage', 'Celestial Diamonds', 'Rajwada Kundan', 'Temple Nagas', 'Contemporary Gold'];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} added to your shopping bag!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredCollections = useMemo(() => {
    return collectionsList
      .filter(item => {
        const matchesTheme = selectedTheme === 'All' || item.theme === selectedTheme;
        const matchesPurity = selectedPurity === 'All' || item.purity === selectedPurity;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.theme.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTheme && matchesPurity && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.priceNum - b.priceNum;
        if (sortBy === 'price-high') return b.priceNum - a.priceNum;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'popular') return b.reviews - a.reviews;
        return 0; // featured
      });
  }, [collectionsList, selectedTheme, selectedPurity, sortBy, searchQuery]);

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
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-transparent py-12 sm:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-amber-900/80 mb-6 font-medium">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange font-semibold">Signature Curated Collections</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md">
                <span>✦</span> Haute Joaillerie & Curated Suites 2026
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Curated Luxury <br className="hidden sm:inline" />
                <span className="text-brand-orange">Jewellery Collections</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Explore our prestigious thematic collections: from the regal corridors of Rajputana and sacred South Indian Temple Nagas to celestial solitaire cascades and modern minimalist gold.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#collection-catalogue"
                  className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-orange-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Browse All Suites
                </a>
                <Link
                  to="/bridal"
                  className="bg-white/80 hover:bg-white text-slate-800 border border-brand-gold/60 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors shadow-sm"
                >
                  Explore Bridal Atelier →
                </Link>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-brand-gold/40 shadow-xl space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-orange border-b border-brand-gold/30 pb-2">
                Atelier Heritage & Standards
              </h4>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">🎖️</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">30+ Years Legacy</h5>
                  <p className="text-[11px] text-slate-600">Preserving 4 generations of artisanal heritage.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">✨</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">BIS 916 & 100% Certified</h5>
                  <p className="text-[11px] text-slate-600">Every jewel carries authentic hallmark engraving.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">🔄</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Lifetime Exchange Guarantee</h5>
                  <p className="text-[11px] text-slate-600">100% gold value & transparent buyback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Interactive Filter & Sorting Section */}
      <section id="collection-catalogue" className="py-6 bg-white/50 backdrop-blur-md sticky top-16 z-40 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex overflow-x-auto pb-1 gap-2 hide-scrollbar">
              {themes.map(th => (
                <button
                  key={th}
                  onClick={() => setSelectedTheme(th)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-sm ${
                    selectedTheme === th
                      ? 'bg-slate-900 text-brand-gold shadow-md scale-105'
                      : 'bg-white/90 text-slate-700 hover:bg-white border border-brand-gold/30 hover:text-brand-orange'
                  }`}
                >
                  {th} {th === 'All' ? `(${collectionsList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/95 border border-brand-gold/40 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-sm"
                />
                <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Purity Filter */}
              <select
                value={selectedPurity}
                onChange={(e) => setSelectedPurity(e.target.value)}
                className="bg-white/95 border border-brand-gold/40 rounded-full px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange cursor-pointer shadow-sm"
              >
                {purities.map(p => (
                  <option key={p} value={p}>{p === 'All' ? 'All Purities' : p}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/95 border border-brand-gold/40 rounded-full px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange cursor-pointer font-medium shadow-sm"
              >
                <option value="featured">Sort: Featured</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Collections Product Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedTheme === 'All' ? 'All Curated Signature Suites' : `${selectedTheme} Collection`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Showing {filteredCollections.length} certified bespoke designs
            </p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Every piece arrives with authenticity certificate & luxury gift case
          </div>
        </div>

        {filteredCollections.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">✨</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Collections Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any designs matching your filter criteria. Try resetting your search or selecting another collection theme.
            </p>
            <button
              onClick={() => { setSelectedTheme('All'); setSelectedPurity('All'); setSearchQuery(''); }}
              className="bg-brand-orange hover:bg-brand-red text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-md transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredCollections.map((item) => (
              <div
                key={item.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-amber-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(item.id)}
                  title="Add to Wishlist"
                  className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-red shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill={wishlist[item.id] ? "#E73F1E" : "none"}
                    stroke={wishlist[item.id] ? "#E73F1E" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Image Container */}
                <div 
                  className="relative aspect-square overflow-hidden bg-amber-50/50 cursor-pointer"
                  onClick={() => setActiveModalProduct(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveModalProduct(item); }}
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
                      <span>{item.purity}</span>
                      <span className="bg-amber-100/90 px-2 py-0.5 rounded text-slate-800">{item.weight}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(item)}
                      className="text-base font-semibold text-slate-900 hover:text-brand-orange transition-colors cursor-pointer line-clamp-1"
                    >
                      {item.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1.5 mt-1">
                      <div className="flex text-brand-gold text-xs">
                        {"★".repeat(Math.floor(item.rating))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{item.rating}</span>
                      <span className="text-[11px] text-slate-400">({item.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base sm:text-lg font-bold text-slate-900">{item.price}</div>
                      <div className="text-[11px] text-slate-400 line-through">{item.originalPrice}</div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
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

      {/* Artisanal Heritage Craftsmanship Section */}
      <section className="py-14 bg-gradient-to-r from-amber-50 via-white to-amber-50 border-y border-brand-gold/40 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Master Karigar Lineage</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">The Art of Pure Gold Filigree & Jadau</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Every piece in our collections requires over 120 hours of focused hand-carving, annealing, gem bezel-setting, and high-precision diamond faceting. Our master goldsmiths continue age-old royal traditions passed through four generations.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-4 rounded-xl border border-brand-gold/30 shadow-sm">
                  <div className="text-lg font-bold text-brand-orange">100% Handcrafted</div>
                  <p className="text-[11px] text-slate-600 mt-1">Non-machine authentic Karigari detailing</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-brand-gold/30 shadow-sm">
                  <div className="text-lg font-bold text-brand-orange">Ethical Sourcing</div>
                  <p className="text-[11px] text-slate-600 mt-1">Conflict-free natural diamonds & gemstones</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-amber-950 rounded-3xl p-8 text-white space-y-4 shadow-xl border border-brand-gold relative overflow-hidden">
              <span className="text-xs uppercase tracking-wider text-brand-lightgold font-bold">Custom Jewellery Commissions</span>
              <h4 className="text-xl sm:text-2xl font-bold font-chicago text-white">Have a Bespoke Vision in Mind?</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Work directly with our lead jewellery artists to turn your dream sketches or family heirlooms into certified fine gold and diamond masterworks.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/gifting"
                  className="bg-brand-orange hover:bg-brand-red text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow"
                >
                  Explore Gifting Collection
                </Link>
                <Link
                  to="/bangles"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors border border-white/30"
                >
                  View Royal Bangles
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick View Product Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
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
                className="w-full max-h-80 object-cover rounded-2xl shadow-md border border-brand-gold/30"
              />
              <span className="mt-3 text-[11px] text-amber-900 font-semibold bg-amber-100/80 px-3 py-1 rounded-full">
                🔍 100% Authentic Collection Image
              </span>
            </div>

            {/* Modal Content */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange px-2.5 py-0.5 rounded-full">
                    {activeModalProduct.theme}
                  </span>
                  <span className="text-xs text-slate-500">• {activeModalProduct.purity}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-chicago leading-snug">
                  {activeModalProduct.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mt-2 text-xs">
                  <span className="text-brand-gold font-bold">★ {activeModalProduct.rating}</span>
                  <span className="text-slate-500">({activeModalProduct.reviews} collector reviews)</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {activeModalProduct.description}
                </p>

                {/* Key Features */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {activeModalProduct.features?.map((feat, idx) => (
                    <span key={idx} className="bg-amber-100/60 text-amber-900 text-[10px] font-medium px-2 py-0.5 rounded-md border border-brand-gold/20">
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Specs Box */}
                <div className="mt-3 grid grid-cols-2 gap-2 bg-amber-50/60 p-3 rounded-xl border border-brand-gold/20 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Net Gold Weight</span>
                    <span className="font-bold text-slate-800">{activeModalProduct.weight}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Hallmark Certificate</span>
                    <span className="font-bold text-slate-800">BIS 916 & IGI</span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-2xl font-bold text-slate-900">{activeModalProduct.price}</span>
                  <span className="text-xs text-slate-400 line-through">{activeModalProduct.originalPrice}</span>
                  <span className="text-xs font-bold text-emerald-600">Exclusive Edition</span>
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
