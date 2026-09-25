import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import all gift images from src/assets/img/gifts/
const giftImg1 = "https://res.cloudinary.com/upodegd7/image/upload/Social_Sharing_Image_1200x628_28.4.webp";
const giftImg2 = "https://res.cloudinary.com/upodegd7/image/upload/p-personalized-gold-letters-bracelet-for-women-401394-m.avif";
const giftImg3 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const giftImg4 = "https://res.cloudinary.com/upodegd7/image/upload/images_1.jpg";
const giftImg5 = "https://res.cloudinary.com/upodegd7/image/upload/images_2.jpg";
const giftImg6 = "https://res.cloudinary.com/upodegd7/image/upload/images_3.jpg";
const giftImg7 = "https://res.cloudinary.com/upodegd7/image/upload/images_4.jpg";
const giftImg8 = "https://res.cloudinary.com/upodegd7/image/upload/images_5.jpg";
const giftImg9 = "https://res.cloudinary.com/upodegd7/image/upload/images_6.jpg";
const giftImg10 = "https://res.cloudinary.com/upodegd7/image/upload/images_7.jpg";
const giftImg11 = "https://res.cloudinary.com/upodegd7/image/upload/images_12.jpg";

export default function GiftingPage() {
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [giftBoxColor, setGiftBoxColor] = useState('Royal Velvet Maroon');
  const [personalMessage, setPersonalMessage] = useState('');
  const [cartAlert, setCartAlert] = useState(null);

  const giftsList = [
    {
      id: 1,
      name: "The Eternal Love Diamond Pendant & Earrings Set",
      occasion: "Anniversary & Romance",
      budgetTier: "above-50k",
      purity: "18KT Diamond Studded",
      weight: "14.20 g",
      priceNum: 98000,
      price: "₹98,000",
      originalPrice: "₹1,10,000",
      rating: 5.0,
      reviews: 184,
      image: giftImg1,
      badge: "Best Romantic Gift",
      description: "A timeless token of love featuring sparkling round-cut certified diamonds in a graceful infinity knot silhouette, set in 18KT rose gold.",
      isBestseller: true,
      features: ["IGI Certified Diamonds", "Complimentary Engraving", "Velvet Heart Gift Box", "Insured Delivery"],
    },
    {
      id: 2,
      name: "Personalized Custom Initial Gold Letter Charm Bracelet",
      occasion: "Personalized Charms",
      budgetTier: "25k-50k",
      purity: "22KT Yellow Gold",
      weight: "6.80 g",
      priceNum: 48500,
      price: "₹48,500",
      originalPrice: "₹54,000",
      rating: 4.9,
      reviews: 240,
      image: giftImg2,
      badge: "Custom Engraved",
      description: "A bespoke 22K pure gold bracelet customized with initials of your choice, adorned with high-luster golden beads on an adjustable lock chain.",
      isBestseller: true,
      features: ["Custom Alphabet Letters", "Adjustable Wrist Fit", "Solid 22KT Pure Gold", "Laser Precision Finish"],
    },
    {
      id: 3,
      name: "Divine Lakshmi-Ganesh 24KT Pure Gold Blessing Coin (10g)",
      occasion: "Auspicious & Shagun",
      budgetTier: "above-50k",
      purity: "24KT Pure Gold (999)",
      weight: "10.00 g",
      priceNum: 74500,
      price: "₹74,500",
      originalPrice: "₹78,000",
      rating: 5.0,
      reviews: 310,
      image: giftImg3,
      badge: "Auspicious Shagun",
      description: "99.9% 24KT pure minted gold coin featuring embossed motifs of Lord Ganesha and Goddess Lakshmi. Perfect for Diwali, Dhanteras, weddings, and housewarmings.",
      isBestseller: true,
      features: ["999 Purity Certified", "Tamper-Proof Assay Card", "Zero Making Charge Loss", "Instant Liquid Buyback"],
    },
    {
      id: 4,
      name: "Fluttering Butterfly Rose Gold Diamond Pendant",
      occasion: "Birthday & Milestones",
      budgetTier: "25k-50k",
      purity: "18KT Diamond Studded",
      weight: "5.40 g",
      priceNum: 38900,
      price: "₹38,900",
      originalPrice: "₹43,500",
      rating: 4.9,
      reviews: 115,
      image: giftImg4,
      badge: "Birthday Special",
      description: "Dainty butterfly pendant with shimmering micro-pave diamonds that flutter with your movement, capturing youthful grace and joy.",
      isBestseller: false,
      features: ["VVS Clarity Diamonds", "18KT Pink Rose Gold", "Matching Cable Chain Included", "Wax-Sealed Card"],
    },
    {
      id: 5,
      name: "Royal Solitaire Halo Diamond Stud Earrings",
      occasion: "Anniversary & Romance",
      budgetTier: "above-50k",
      purity: "18KT Diamond Studded",
      weight: "8.60 g",
      priceNum: 86000,
      price: "₹86,000",
      originalPrice: "₹95,000",
      rating: 5.0,
      reviews: 162,
      image: giftImg5,
      badge: "Luxury Classic",
      description: "Center round solitaire surrounded by a brilliant halo of micro diamonds with secure screw-back closures for all-day comfort and sparkle.",
      isBestseller: true,
      features: ["Double Halo Fire", "Secure Threaded Screw-Back", "IGI Certification Card", "Signature Luxe Box"],
    },
    {
      id: 6,
      name: "Sacred Om & Swastik 22K Gold Auspicious Pendant",
      occasion: "Auspicious & Shagun",
      budgetTier: "under-25k",
      purity: "22KT Yellow Gold",
      weight: "3.20 g",
      priceNum: 24200,
      price: "₹24,200",
      originalPrice: "₹26,800",
      rating: 4.8,
      reviews: 98,
      image: giftImg6,
      badge: "Under ₹25k",
      description: "Sacred Vedic protection symbol carved in high-polish 22KT gold. A meaningful gift for graduations, new beginnings, and newborns.",
      isBestseller: false,
      features: ["22K BIS Hallmarked", "High Polish Luster", "Spiritual Blessing", "Ready Gift Pouch"],
    },
    {
      id: 7,
      name: "Twin Heart Diamond Interlock Ring in Rose Gold",
      occasion: "Anniversary & Romance",
      budgetTier: "25k-50k",
      purity: "18KT Diamond Studded",
      weight: "4.80 g",
      priceNum: 34800,
      price: "₹34,800",
      originalPrice: "₹39,000",
      rating: 4.9,
      reviews: 147,
      image: giftImg7,
      badge: "Romantic Charm",
      description: "Intertwined double hearts representing two souls bound in eternal companionship, accented with fine hand-set diamonds.",
      isBestseller: true,
      features: ["Interlocking Twin Hearts", "Comfort Fit Band", "Free Ring Resizing", "Gift Ribbon Wrapped"],
    },
    {
      id: 8,
      name: "Celestial Star & Crescent Moon Diamond Lariat",
      occasion: "Birthday & Milestones",
      budgetTier: "25k-50k",
      purity: "18KT Diamond Studded",
      weight: "6.10 g",
      priceNum: 44000,
      price: "₹44,000",
      originalPrice: "₹49,500",
      rating: 4.8,
      reviews: 79,
      image: giftImg8,
      badge: "Trending 2026",
      description: "An enchanting celestial star and crescent moon dropped gracefully on a delicate gold chain for modern layering and chic charm.",
      isBestseller: false,
      features: ["Multi-Length Clasp", "Certified Natural Diamonds", "Rose & Yellow Gold Options", "Personal Message Card"],
    },
    {
      id: 9,
      name: "Navratna Astrological Charm Gold Bracelet",
      occasion: "Auspicious & Shagun",
      budgetTier: "above-50k",
      purity: "22KT Yellow Gold",
      weight: "9.50 g",
      priceNum: 69000,
      price: "₹69,000",
      originalPrice: "₹76,000",
      rating: 4.9,
      reviews: 104,
      image: giftImg9,
      badge: "Auspicious Navratna",
      description: "Nine sacred planetary gemstones set in bezel frames along a pure 22K gold link chain to bestow health, wealth, and spiritual bliss.",
      isBestseller: false,
      features: ["Natural Planetary Gems", "Solid 22KT Gold Bezels", "Hallmark Authenticity", "Protective Aura"],
    },
    {
      id: 10,
      name: "Dainty Evil Eye Diamond & Sapphire Protection Bracelet",
      occasion: "Personalized Charms",
      budgetTier: "under-25k",
      purity: "18KT Diamond Studded",
      weight: "3.10 g",
      priceNum: 23500,
      price: "₹23,500",
      originalPrice: "₹26,500",
      rating: 4.9,
      reviews: 195,
      image: giftImg10,
      badge: "Protection Gift",
      description: "Ancient Mediterranean evil eye talisman set with natural blue sapphires and brilliant diamond halo to ward off negativity and bestow good fortune.",
      isBestseller: true,
      features: ["Natural Blue Sapphires", "Micro Pave Diamonds", "Adjustable Slide Bead", "Best Value Under 25k"],
    },
    {
      id: 11,
      name: "The Royal Crown Emerald & Diamond Cocktail Ring",
      occasion: "Anniversary & Romance",
      budgetTier: "above-50k",
      purity: "18KT Diamond Studded",
      weight: "11.20 g",
      priceNum: 115000,
      price: "₹1,15,000",
      originalPrice: "₹1,28,000",
      rating: 5.0,
      reviews: 88,
      image: giftImg11,
      badge: "Grand Milestones",
      description: "An opulent statement cocktail ring featuring a certified 2.2 carat natural oval emerald enclosed by a tiara crown of marquise and brilliant diamonds.",
      isBestseller: false,
      features: ["Certified Natural Emerald", "Marquise Crown Setting", "Royal Presentation Case", "Complimentary Custom Fit"],
    },
  ];

  const occasions = ['All', 'Anniversary & Romance', 'Birthday & Milestones', 'Personalized Charms', 'Auspicious & Shagun'];
  const budgetOptions = [
    { label: 'All Budgets', value: 'All' },
    { label: 'Under ₹25,000', value: 'under-25k' },
    { label: '₹25,000 - ₹50,000', value: '25k-50k' },
    { label: 'Above ₹50,000', value: 'above-50k' },
  ];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded', '24KT Pure Gold (999)'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} (with ${giftBoxColor}) added to your gift cart!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredGifts = useMemo(() => {
    return giftsList
      .filter(item => {
        const matchesOccasion = selectedOccasion === 'All' || item.occasion === selectedOccasion;
        const matchesBudget = selectedBudget === 'All' || item.budgetTier === selectedBudget;
        const matchesPurity = selectedPurity === 'All' || item.purity.includes(selectedPurity) || item.purity === selectedPurity;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.occasion.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesOccasion && matchesBudget && matchesPurity && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.priceNum - b.priceNum;
        if (sortBy === 'price-high') return b.priceNum - a.priceNum;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'popular') return b.reviews - a.reviews;
        return 0; // featured
      });
  }, [giftsList, selectedOccasion, selectedBudget, selectedPurity, sortBy, searchQuery]);

  return (
    <div className="grow pb-16">
      {/* Toast Alert */}
      {cartAlert && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-brand-gold flex items-center space-x-3 animate-bounce">
          <span className="text-xl text-brand-gold">🎁</span>
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
            <span className="text-brand-orange font-semibold">Luxury Gifting Boutique</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-orange to-brand-red text-white shadow-md">
                <span>🎁</span> The Art of Gold & Diamond Gifting
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Gifts That Last <br className="hidden sm:inline" />
                <span className="text-brand-orange">Generations</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Celebrate love, milestones, birthdays, and auspicious blessings with certified fine gold and scintillating diamond keepsakes. Each gift includes our royal velvet presentation box and customized wax-sealed message card.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#gifting-catalogue"
                  className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-orange-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Find The Perfect Gift
                </a>
                <a
                  href="#gift-packaging-guide"
                  className="bg-white/80 hover:bg-white text-slate-800 border border-brand-gold/60 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors shadow-sm"
                >
                  Complimentary Luxury Packaging →
                </a>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-brand-gold/40 shadow-xl space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-orange border-b border-brand-gold/30 pb-2">
                Complimentary Gifting Services
              </h4>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">🎀</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Royal Velvet Gift Box</h5>
                  <p className="text-[11px] text-slate-600">Satin lined presentation box with ribbon seal.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">💌</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Custom Wax-Sealed Note</h5>
                  <p className="text-[11px] text-slate-600">Personalized handwritten note on textured paper.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-lg shrink-0">⚡</div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Express Insured Transit</h5>
                  <p className="text-[11px] text-slate-600">Guaranteed discreet safe delivery to their doorstep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Interactive Filter & Sorting Section */}
      <section id="gifting-catalogue" className="py-6 bg-white/50 backdrop-blur-md sticky top-16 z-40 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Occasion Filter Pills */}
            <div className="flex overflow-x-auto pb-1 gap-2 hide-scrollbar">
              {occasions.map(occ => (
                <button
                  key={occ}
                  onClick={() => setSelectedOccasion(occ)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-sm ${
                    selectedOccasion === occ
                      ? 'bg-slate-900 text-brand-gold shadow-md scale-105'
                      : 'bg-white/90 text-slate-700 hover:bg-white border border-brand-gold/30 hover:text-brand-orange'
                  }`}
                >
                  {occ} {occ === 'All' ? `(${giftsList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-52">
                <input
                  type="text"
                  placeholder="Search gifts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/95 border border-brand-gold/40 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-sm"
                />
                <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Budget Filter */}
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="bg-white/95 border border-brand-gold/40 rounded-full px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange cursor-pointer shadow-sm"
              >
                {budgetOptions.map(b => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>

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

      {/* Gifts Product Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedOccasion === 'All' ? 'All Curated Gifts' : `${selectedOccasion}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Showing {filteredGifts.length} thoughtful gold & diamond keepsakes
            </p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Includes free luxury gift packaging & wax-sealed message card
          </div>
        </div>

        {filteredGifts.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">🎁</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Gifts Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any gifts matching your criteria. Try adjusting your budget or selecting another occasion.
            </p>
            <button
              onClick={() => { setSelectedOccasion('All'); setSelectedBudget('All'); setSelectedPurity('All'); setSearchQuery(''); }}
              className="bg-brand-orange hover:bg-brand-red text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-md transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredGifts.map((item) => (
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
                      Gift Preview
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
                      <span>🎁</span> Gift
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Luxury Packaging Showcase */}
      <section id="gift-packaging-guide" className="py-14 bg-gradient-to-r from-amber-50 via-rose-50/50 to-amber-50 border-y border-brand-gold/40 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Unboxing Experience</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">The Royal Luxe Aura Gift Presentation</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We believe unwrapping a gift is just as magical as wearing it. Every purchase from our Gifting Suite is packed inside a plush velvet jewelry case, finished with a golden satin ribbon, an authenticity certificate card, and your personal wax-sealed greeting.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-800">
                  <span className="text-brand-orange text-base">✦</span>
                  <span><strong>Rich Velvet Presentation Box:</strong> Protects and showcases the jewel in heirloom splendor.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-800">
                  <span className="text-brand-orange text-base">✦</span>
                  <span><strong>Wax-Sealed Message Envelope:</strong> Your personalized note stamped with gold wax seal.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-800">
                  <span className="text-brand-orange text-base">✦</span>
                  <span><strong>Discreet Tamper-Proof Outer Box:</strong> Zero price tags shown on delivery.</span>
                </div>
              </div>
            </div>

            {/* Instant Digital Gift Card Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-brand-gold relative overflow-hidden space-y-4">
              <span className="text-xs uppercase tracking-wider text-brand-lightgold font-bold">Instant Gifting Choice</span>
              <h4 className="text-2xl sm:text-3xl font-bold font-chicago text-white">Luxe Aura Digital E-Gift Vouchers</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Can't decide on their size or favorite design? Send an instant digital gift voucher directly to their email or WhatsApp with your custom wishes.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['₹5,000', '₹10,000', '₹25,000', '₹50,000', '₹1,00,000'].map(amt => (
                  <button
                    key={amt}
                    onClick={() => setCartAlert(`E-Gift Card (${amt}) added to bag!`)}
                    className="bg-white/10 hover:bg-brand-orange hover:text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border border-white/20"
                  >
                    {amt}
                  </button>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to="/collections"
                  className="inline-block bg-brand-orange hover:bg-brand-red text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow"
                >
                  Explore All Collections →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick View Product Modal with Custom Message & Box Options */}
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
                🔍 100% Authentic Gift Image
              </span>
            </div>

            {/* Modal Content */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange px-2.5 py-0.5 rounded-full">
                    {activeModalProduct.occasion}
                  </span>
                  <span className="text-xs text-slate-500">• {activeModalProduct.purity}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-chicago leading-snug">
                  {activeModalProduct.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mt-2 text-xs">
                  <span className="text-brand-gold font-bold">★ {activeModalProduct.rating}</span>
                  <span className="text-slate-500">({activeModalProduct.reviews} gift recipient reviews)</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeModalProduct.description}
                </p>

                {/* Gift Box Selection */}
                <div className="mt-3">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Select Velvet Gift Box Color:</label>
                  <div className="flex gap-2">
                    {['Royal Maroon', 'Midnight Blue', 'Emerald Green'].map(color => (
                      <button
                        key={color}
                        onClick={() => setGiftBoxColor(color)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all ${
                          giftBoxColor === color
                            ? 'bg-slate-900 text-brand-gold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Gift Note Input */}
                <div className="mt-3">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Add Personalized Wax-Sealed Message (Optional):</label>
                  <input
                    type="text"
                    placeholder="e.g., Happy 10th Anniversary, my love! Forever yours."
                    value={personalMessage}
                    onChange={(e) => setPersonalMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                {/* Specs Box */}
                <div className="mt-3 grid grid-cols-2 gap-2 bg-amber-50/60 p-2.5 rounded-xl border border-brand-gold/20 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Net Gold Weight</span>
                    <span className="font-bold text-slate-800">{activeModalProduct.weight}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Hallmark Stamp</span>
                    <span className="font-bold text-slate-800">BIS 916 / IGI</span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-2xl font-bold text-slate-900">{activeModalProduct.price}</span>
                  <span className="text-xs text-slate-400 line-through">{activeModalProduct.originalPrice}</span>
                  <span className="text-xs font-bold text-emerald-600">Gift Packaging Free</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="flex-1 bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-orange-700 text-white py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition-all text-center"
                  >
                    Send As Gift
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
