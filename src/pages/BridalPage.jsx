import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import all bridal images from src/assets/img/Bridal/
const bridalImg1 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const bridalImg2 = "https://res.cloudinary.com/upodegd7/image/upload/images_1.jpg";
const bridalImg3 = "https://res.cloudinary.com/upodegd7/image/upload/images_2.jpg";
const bridalImg4 = "https://res.cloudinary.com/upodegd7/image/upload/images_3.jpg";
const bridalImg5 = "https://res.cloudinary.com/upodegd7/image/upload/images_4.jpg";
const bridalImg6 = "https://res.cloudinary.com/upodegd7/image/upload/images_5.jpg";
const bridalImg7 = "https://res.cloudinary.com/upodegd7/image/upload/images_6.jpg";
const bridalImg8 = "https://res.cloudinary.com/upodegd7/image/upload/images_7.jpg";
const bridalImg9 = "https://res.cloudinary.com/upodegd7/image/upload/images_8.jpg";
const bridalImg10 = "https://res.cloudinary.com/upodegd7/image/upload/images_9.jpg";
const bridalImg11 = "https://res.cloudinary.com/upodegd7/image/upload/images_10.jpg";

export default function BridalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedSetOption, setSelectedSetOption] = useState('Complete Set');
  const [cartAlert, setCartAlert] = useState(null);
  const [consultationBooked, setConsultationBooked] = useState(false);

  const bridalList = [
    {
      id: 1,
      name: "Maharani Padmavati Royal Polki Kundan Bridal Set",
      category: "Grand Choker Sets",
      purity: "22KT Yellow Gold",
      weight: "185.40 g",
      priceNum: 1425000,
      price: "₹14,25,000",
      originalPrice: "₹15,80,000",
      rating: 5.0,
      reviews: 94,
      image: bridalImg1,
      badge: "Grand Bridal 2026",
      description: "An imperial bridal set featuring an intricately layered syndicate polki choker, royal rani haar, matching chandelier earrings, maang tikka, and hathphool crafted in 22K hallmarked antique gold.",
      isBestseller: true,
      features: ["Certified Uncut Polki", "Zambian Emerald Drops", "South Sea Pearls", "Adjustable Silk Dori"],
    },
    {
      id: 2,
      name: "Rajputana Meenakari Floral Bridal Choker Suite",
      category: "Rajputana Kundan",
      purity: "22KT Yellow Gold",
      weight: "142.80 g",
      priceNum: 1120000,
      price: "₹11,20,000",
      originalPrice: "₹12,40,000",
      rating: 4.9,
      reviews: 78,
      image: bridalImg2,
      badge: "Jaipur Meenakari",
      description: "Hand-enameled royal red and mint green Jaipur Meenakari reverse work framing brilliant kundan stones with cluster pearl accents.",
      isBestseller: true,
      features: ["Double-Sided Meenakari", "Pure 22K Hallmark", "Handcrafted in Jaipur", "Lifetime Polish Guarantee"],
    },
    {
      id: 3,
      name: "South Indian Temple Nagas Lakshmi Bridal Haar",
      category: "Temple Nagas",
      purity: "22KT Yellow Gold",
      weight: "168.20 g",
      priceNum: 1290000,
      price: "₹12,90,000",
      originalPrice: "₹14,10,000",
      rating: 5.0,
      reviews: 112,
      image: bridalImg3,
      badge: "Heritage Temple",
      description: "Sacred South Indian temple architecture carved in 3D antique gold featuring Goddess Lakshmi seated on a bloomed lotus surrounded by dancing peacocks and authentic kemp rubies.",
      isBestseller: true,
      features: ["Authentic Nagas Handcraft", "Natural Burmese Rubies", "Matte Antique Polish", "Temple Certified"],
    },
    {
      id: 4,
      name: "Imperial Victorian Polki Diamond Wedding Collar",
      category: "Royal Polki Jadau",
      purity: "18KT Diamond Studded",
      weight: "128.60 g",
      priceNum: 1650000,
      price: "₹16,50,000",
      originalPrice: "₹18,00,000",
      rating: 5.0,
      reviews: 65,
      image: bridalImg4,
      badge: "Victorian Luxe",
      description: "A breathtaking Victorian-cut open-setting diamond collar with high-clarity rose cut diamonds and rare tanzanite gemstone droplets.",
      isBestseller: false,
      features: ["IGI Certified Diamonds", "Victorian Rhodium Finish", "Rose-Cut Fire", "Bespoke Fit Clasp"],
    },
    {
      id: 5,
      name: "Noor-E-Chashm Kundan Matha Patti & Passa Set",
      category: "Matha Patti & Tikka",
      purity: "22KT Yellow Gold",
      weight: "74.50 g",
      priceNum: 580000,
      price: "₹5,80,000",
      originalPrice: "₹6,40,000",
      rating: 4.9,
      reviews: 83,
      image: bridalImg5,
      badge: "Bridal Crown",
      description: "A regal multi-tier bridal headpiece adorned with cascading seed pearls, radiant kundan stones, and matching royal passa for an unforgettable entrance.",
      isBestseller: true,
      features: ["Multi-Tier Hair Grip", "Featherweight Balance", "22KT Gold Bezels", "Lustrous Basra Pearls"],
    },
    {
      id: 6,
      name: "Sabyasachi Inspired Floral Jadau Trousseau Set",
      category: "Grand Choker Sets",
      purity: "22KT Yellow Gold",
      weight: "196.00 g",
      priceNum: 1540000,
      price: "₹15,40,000",
      originalPrice: "₹16,90,000",
      rating: 5.0,
      reviews: 142,
      image: bridalImg6,
      badge: "Celebrity Favorite",
      description: "Epitome of modern royal elegance. A massive layered choker paired with long gold bead mala, statement jhumkis, and bridal nath.",
      isBestseller: true,
      features: ["Comprehensive 5-Piece Set", "Syndicate Polki", "Emerald Bead Strands", "Insured Shipping"],
    },
    {
      id: 7,
      name: "Devyani Ruby & Emerald Filigree Bridal Collar",
      category: "Rajputana Kundan",
      purity: "22KT Yellow Gold",
      weight: "135.20 g",
      priceNum: 1060000,
      price: "₹10,60,000",
      originalPrice: "₹11,70,000",
      rating: 4.8,
      reviews: 59,
      image: bridalImg7,
      badge: "Handcrafted Art",
      description: "Intricate micro-filigree lattice gold collar embellished with pigeon-blood rubies and natural uncut emeralds.",
      isBestseller: false,
      features: ["Micro-Granulation Detail", "Natural Gemstones", "Smooth Neck Contour", "Certificate of Authenticity"],
    },
    {
      id: 8,
      name: "Kashi Antique Gold Kasu Bridal Rani Haar",
      category: "Temple Nagas",
      purity: "22KT Yellow Gold",
      weight: "152.00 g",
      priceNum: 1190000,
      price: "₹11,90,000",
      originalPrice: "₹13,10,000",
      rating: 4.9,
      reviews: 71,
      image: bridalImg8,
      badge: "Auspicious Heritage",
      description: "32-inch grand auspicious gold coin rani haar intricately stamped with sacred divine iconography and accented with emerald cabochons.",
      isBestseller: false,
      features: ["32-Inch Grand Length", "Embossed Coin Motif", "Solid 22KT Pure Gold", "BIS 916 Laser Stamp"],
    },
    {
      id: 9,
      name: "Zeenat Royal Polki & Pearl Bridal Choker",
      category: "Royal Polki Jadau",
      purity: "22KT Yellow Gold",
      weight: "148.90 g",
      priceNum: 1175000,
      price: "₹11,75,000",
      originalPrice: "₹12,95,000",
      rating: 4.9,
      reviews: 88,
      image: bridalImg9,
      badge: "Exclusive Polki",
      description: "Mastercrafted with syndicate uncut polki diamonds bezel-set in pure 24K gold foil (Jadau) on a solid 22K gold structure with natural pearl fringes.",
      isBestseller: true,
      features: ["Traditional 24K Jadau Setting", "Fine Pearl Fringes", "Comfortable Velvet Back", "Matching Chandbalis"],
    },
    {
      id: 10,
      name: "Aishwarya Filigree Bridal Chooda & Kada Ensemble",
      category: "Grand Choker Sets",
      purity: "22KT Yellow Gold",
      weight: "112.50 g",
      priceNum: 890000,
      price: "₹8,90,000",
      originalPrice: "₹9,80,000",
      rating: 4.9,
      reviews: 64,
      image: bridalImg10,
      badge: "Bridal Bangles",
      description: "A pair of heavy bridal kadas with matching filigree bangles designed to sit gorgeously beside traditional red bridal chooda.",
      isBestseller: false,
      features: ["Screw Clasp Mechanism", "Solid Heavy Core", "Intricate Wire Filigree", "Custom Sizing Available"],
    },
    {
      id: 11,
      name: "Mumtaz Mahal Complete Heritage Bridal Trousseau",
      category: "Royal Polki Jadau",
      purity: "22KT Yellow Gold",
      weight: "225.00 g",
      priceNum: 1780000,
      price: "₹17,80,000",
      originalPrice: "₹19,50,000",
      rating: 5.0,
      reviews: 130,
      image: bridalImg11,
      badge: "Supreme Masterpiece",
      description: "The crown jewel of our bridal atelier. Includes high-neck choker, grand rani haar, oversized chandelier earrings, sheeshpatti, maang tikka, nath, and pair of hathphool.",
      isBestseller: true,
      features: ["Complete 7-Piece Trousseau", "Master Goldsmith Monogram", "Custom Velvet Trunk Case", "Lifetime Buyback 100%"],
    },
  ];

  const categories = ['All', 'Grand Choker Sets', 'Rajputana Kundan', 'Temple Nagas', 'Royal Polki Jadau', 'Matha Patti & Tikka'];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} (${selectedSetOption}) added to your bridal shopping bag!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredBridal = useMemo(() => {
    return bridalList
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
  }, [bridalList, selectedCategory, selectedPurity, sortBy, searchQuery]);

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
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/70 via-rose-50/40 to-transparent py-12 sm:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-amber-900/80 mb-6 font-medium">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange font-semibold">Grand Bridal Atelier</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-700 to-brand-orange text-white shadow-md">
                <span>👑</span> The Heirloom Bridal Atelier 2026
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Imperial Bridal <br className="hidden sm:inline" />
                <span className="text-brand-orange">Jewellery Masterpieces</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Step into a world of celestial splendor. Handcrafted by 4th-generation master karigars using certified uncut polki diamonds, 22K hallmarked gold, vibrant Zambian emeralds, and sacred South Indian Temple Nagas motifs.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#bridal-grid"
                  className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-orange-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Explore Bridal Trousseau
                </a>
                <a
                  href="#bridal-consultation"
                  className="bg-white/80 hover:bg-white text-slate-800 border border-brand-gold/60 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors shadow-sm"
                >
                  Book Private Bridal Styling
                </a>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-brand-gold/40 shadow-xl space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-orange border-b border-brand-gold/30 pb-2">
                The Luxe Aura Bridal Promise
              </h4>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">🏛️</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">BIS 916 Hallmark & IGI Certified</h5>
                  <p className="text-[11px] text-slate-600">100% government recognized purity verification.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">💎</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Syndicate Uncut Polki & Emeralds</h5>
                  <p className="text-[11px] text-slate-600">Ethically sourced natural precious stones.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">🛡️</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Insured Armored Transit</h5>
                  <p className="text-[11px] text-slate-600">Doorstep delivery with tamper-proof seal & insurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter & Sorting Section */}
      <section id="bridal-grid" className="py-6 bg-white/50 backdrop-blur-md sticky top-16 z-40 border-b border-brand-gold/30">
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
                      : 'bg-white/90 text-slate-700 hover:bg-white border border-brand-gold/30 hover:text-brand-orange'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${bridalList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search bridal jewellery..."
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

      {/* Bridal Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedCategory === 'All' ? 'Complete Bridal & Wedding Collection' : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Showing {filteredBridal.length} handcrafted bridal heirlooms
            </p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Prices include hallmarking, insured shipping & velvet trunk case
          </div>
        </div>

        {filteredBridal.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">👑</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Bridal Pieces Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any bridal pieces matching your current filter criteria. Try resetting your search or selecting another category.
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
            {filteredBridal.map((item) => (
              <div
                key={item.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-red-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
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

      {/* Bridal Trousseau 7-Piece Essential Checklist */}
      <section className="py-14 bg-gradient-to-r from-amber-50 via-rose-50/50 to-amber-50 border-y border-brand-gold/40 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Bridal Trousseau Guide</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-chicago">The 7 Sacred Bridal Adornments</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Every bride deserves timeless grandeur. Discover the essential bridal jewellery pieces curated to complete your Solah Shringar on your wedding day:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
            {[
              { icon: "✨", title: "1. Choker Haar", desc: "Regal collar piece" },
              { icon: "📿", title: "2. Rani Haar", desc: "Long layered mala" },
              { icon: "👑", title: "3. Maang Tikka", desc: "Forehead crown" },
              { icon: "💫", title: "4. Bridal Nath", desc: "Nose ring with chain" },
              { icon: "✋", title: "5. Hathphool", desc: "Hand jewelry flowers" },
              { icon: "💍", title: "6. Royal Kadas", desc: "Heavy gold bangles" },
              { icon: "🔔", title: "7. Bridal Payal", desc: "Silver / gold anklets" },
            ].map((step, idx) => (
              <div key={idx} className="bg-white/90 rounded-2xl p-4 border border-brand-gold/30 shadow-sm hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{step.icon}</div>
                <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Bridal Styling & Master Goldsmith Consultation */}
      <section id="bridal-consultation" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-brand-gold">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-lightgold font-bold">Bespoke Bridal Atelier</span>
              <h3 className="text-2xl sm:text-4xl font-bold font-chicago text-white leading-tight">
                Private Video & Showroom Consultation with Master Goldsmiths
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Personalize your wedding trousseau to match your lehenga color, neckline, and family heirlooms. Our master artisans craft custom weights, matching groom jewellery, and personalized initial engravings.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                {consultationBooked ? (
                  <div className="bg-emerald-600 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    ✓ Bridal Consultation Booked! Our stylist will connect within 2 hours.
                  </div>
                ) : (
                  <button
                    onClick={() => setConsultationBooked(true)}
                    className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-orange-700 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
                  >
                    Schedule Free Consultation
                  </button>
                )}
                <Link
                  to="/collections"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-colors border border-white/30"
                >
                  Explore All Collections
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-3">
              <h4 className="text-sm font-bold text-brand-lightgold uppercase tracking-wider">VIP Bridal Perks:</h4>
              <ul className="text-xs text-stone-200 space-y-2">
                <li className="flex items-center gap-2"><span>✦</span> 1-on-1 stylist match with your bridal attire</li>
                <li className="flex items-center gap-2"><span>✦</span> 3D CAD design preview before casting</li>
                <li className="flex items-center gap-2"><span>✦</span> Customized pure 24K gold Jadau foil setting</li>
                <li className="flex items-center gap-2"><span>✦</span> Complimentary heritage monogrammed trunk</li>
              </ul>
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
                🔍 100% Authentic Bridal Product Image
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
                  <span className="text-slate-500">({activeModalProduct.reviews} verified bridal reviews)</span>
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

                {/* Set Options Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Package Option:</label>
                  <div className="flex gap-2">
                    {['Complete Set', 'Choker Only', 'With Rani Haar'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setSelectedSetOption(opt)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedSetOption === opt
                            ? 'bg-slate-900 text-brand-gold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange'
                        }`}
                      >
                        {opt}
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
                  <span className="text-xs font-bold text-emerald-600">Bridal Season Discount</span>
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
