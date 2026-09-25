import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import jhumka images from src/assets/img/Jhumkas/
const jhumkaImg1 = "https://res.cloudinary.com/upodegd7/image/upload/-473Wx593H-466469826-gold-MODEL.avif";
const jhumkaImg2 = "https://res.cloudinary.com/upodegd7/image/upload/-473Wx593H-467027962-gold-MODEL.avif";
const jhumkaImg3 = "https://res.cloudinary.com/upodegd7/image/upload/22K306GLP18450_1.webp";
const jhumkaImg4 = "https://res.cloudinary.com/upodegd7/image/upload/292197ace27402801bfd02248fea3a01.jpg";
const jhumkaImg5 = "https://res.cloudinary.com/upodegd7/image/upload/3_548e5fcc-0a2e-4659-b35f-fe718458f117.webp";
const jhumkaImg6 = "https://res.cloudinary.com/upodegd7/image/upload/AAKRITI-GOLD-EARRING.jpg";
const jhumkaImg7 = "https://res.cloudinary.com/upodegd7/image/upload/BITD0993D108_YAA22XXXXXXXXXXXX_ABCD00-PICS-00004-1024-86104.jpg";
const jhumkaImg8 = "https://res.cloudinary.com/upodegd7/image/upload/ChatGPT_Image_Apr_12_2026_02_30_53_PM.webp";
const jhumkaImg9 = "https://res.cloudinary.com/upodegd7/image/upload/FullSizeRender_5d59fa01-3964-4dee-b0b3-05e57f55cac5.webp";
const jhumkaImg10 = "https://res.cloudinary.com/upodegd7/image/upload/image_2_344a83b3_thumbnail_1024.jpg";
const jhumkaImg11 = "https://res.cloudinary.com/upodegd7/image/upload/image_2_6af6a06f_thumbnail_1024.jpg";
const jhumkaImg12 = "https://res.cloudinary.com/upodegd7/image/upload/images_1.jpg";
const jhumkaImg13 = "https://res.cloudinary.com/upodegd7/image/upload/images_2.jpg";
const jhumkaImg14 = "https://res.cloudinary.com/upodegd7/image/upload/images_3.jpg";
const jhumkaImg15 = "https://res.cloudinary.com/upodegd7/image/upload/images_4.jpg";
const jhumkaImg16 = "https://res.cloudinary.com/upodegd7/image/upload/images_5.jpg";
const jhumkaImg17 = "https://res.cloudinary.com/upodegd7/image/upload/images_6.jpg";
const jhumkaImg18 = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const jhumkaImg19 = "https://res.cloudinary.com/upodegd7/image/upload/yEWepCxHKGyZ6CDDpk3h.webp";

// Import catalog polished jhumka
const jhumkaImg20 = "https://res.cloudinary.com/upodegd7/image/upload/Jhumka_polished.jpg";

export default function JhumkasPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPurity, setSelectedPurity] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedClosure, setSelectedClosure] = useState('Screw Back');
  const [cartAlert, setCartAlert] = useState(null);

  const jhumkasList = [
    {
      id: 1,
      name: "Maharani Multi-Tier Royal Bridal Jhumka",
      category: "Bridal & Multi-Tier",
      purity: "22KT Yellow Gold",
      weight: "26.40 g",
      priceNum: 188000,
      price: "₹1,88,000",
      originalPrice: "₹2,08,000",
      rating: 5.0,
      reviews: 148,
      image: jhumkaImg1,
      badge: "Bridal Bestseller",
      description: "Three stepped tiers of filigree gold bells adorned with dangling seed pearls and rubies fit for royalty.",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Heritage South Temple Nagas Peacock Jhumka",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "22.80 g",
      priceNum: 162000,
      price: "₹1,62,000",
      originalPrice: "₹1,78,000",
      rating: 4.9,
      reviews: 112,
      image: jhumkaImg2,
      badge: "Temple Nagas",
      description: "Intricately hand-sculpted dancing peacocks with antique matte finish and deep crimson kemp stones.",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Jaipur Meenakari Lotus Bell Jhumka",
      category: "Kundan & Meenakari",
      purity: "22KT Yellow Gold",
      weight: "18.50 g",
      priceNum: 132000,
      price: "₹1,32,000",
      originalPrice: "₹1,45,000",
      rating: 4.9,
      reviews: 95,
      image: jhumkaImg3,
      badge: "Hand-Painted Art",
      description: "Traditional Jaipur royal blue and emerald green enamel work framing pure gold micro-granules.",
      isBestseller: false,
    },
    {
      id: 4,
      name: "Imperial Kundan Polki Chandelier Jhumka",
      category: "Kundan & Meenakari",
      purity: "22KT Yellow Gold",
      weight: "28.20 g",
      priceNum: 198000,
      price: "₹1,98,000",
      originalPrice: "₹2,20,000",
      rating: 5.0,
      reviews: 176,
      image: jhumkaImg4,
      badge: "Grand Wedding",
      description: "Uncut syndicate polki crystals set in open 22K gold bezel cups with hanging pearl clusters and emerald drops.",
      isBestseller: true,
    },
    {
      id: 5,
      name: "Aakriti Classic Floral Dome Gold Jhumka",
      category: "Contemporary Dailywear",
      purity: "22KT Yellow Gold",
      weight: "12.60 g",
      priceNum: 92000,
      price: "₹92,000",
      originalPrice: "₹1,02,000",
      rating: 4.8,
      reviews: 134,
      image: jhumkaImg5,
      badge: "Lightweight Classic",
      description: "Delicate floral upper ear stud with lightweight hollow umbrella dome for comfortable all-day festive wear.",
      isBestseller: true,
    },
    {
      id: 6,
      name: "Divine Lakshmi Devi Antique Temple Jhumka",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "24.50 g",
      priceNum: 175000,
      price: "₹1,75,000",
      originalPrice: "₹1,92,000",
      rating: 5.0,
      reviews: 89,
      image: jhumkaImg6,
      badge: "Auspicious Lakshmi",
      description: "Embossed Goddess Lakshmi medallion atop a traditional South Indian carved bell with delicate gold ghungroos.",
      isBestseller: false,
    },
    {
      id: 7,
      name: "Brilliant Starburst Diamond Studded Jhumka",
      category: "Diamond Jhumkas",
      purity: "18KT Diamond Studded",
      weight: "16.80 g",
      priceNum: 165000,
      price: "₹1,65,000",
      originalPrice: "₹1,85,000",
      rating: 4.9,
      reviews: 73,
      image: jhumkaImg7,
      badge: "IGI Certified",
      description: "Natural round-cut VVS diamonds pavé-set across dual gold domes for blinding 360-degree shimmer.",
      isBestseller: false,
    },
    {
      id: 8,
      name: "Royal Rajputana Pearl Drop Jhumka",
      category: "Bridal & Multi-Tier",
      purity: "22KT Yellow Gold",
      weight: "21.10 g",
      priceNum: 152000,
      price: "₹1,52,000",
      originalPrice: "₹1,68,000",
      rating: 4.8,
      reviews: 104,
      image: jhumkaImg8,
      badge: "Trending 2026",
      description: "Flawless Basra-style pearls cascade from a fine filigree umbrella bell crowned with a ruby ear stud.",
      isBestseller: false,
    },
    {
      id: 9,
      name: "Vintage Filigree Lattice Gold Jhumka",
      category: "Contemporary Dailywear",
      purity: "22KT Yellow Gold",
      weight: "14.20 g",
      priceNum: 102000,
      price: "₹1,02,000",
      originalPrice: "₹1,14,000",
      rating: 4.7,
      reviews: 62,
      image: jhumkaImg9,
      badge: "Artisan Special",
      description: "Fine wire lace filigree with openwork dome providing high visual presence at optimal gram weight.",
      isBestseller: false,
    },
    {
      id: 10,
      name: "Padmavati Double Umbrella Grand Jhumka",
      category: "Bridal & Multi-Tier",
      purity: "22KT Yellow Gold",
      weight: "31.00 g",
      priceNum: 218000,
      price: "₹2,18,000",
      originalPrice: "₹2,42,000",
      rating: 5.0,
      reviews: 161,
      image: jhumkaImg10,
      badge: "Grand Bridal Suite",
      description: "Dual cascading umbrellas linked with golden chains and embellished with teardrop ruby latkans.",
      isBestseller: true,
    },
    {
      id: 11,
      name: "Floral Vine Delicate Dailywear Jhumki",
      category: "Contemporary Dailywear",
      purity: "22KT Yellow Gold",
      weight: "9.80 g",
      priceNum: 72000,
      price: "₹72,000",
      originalPrice: "₹80,000",
      rating: 4.8,
      reviews: 120,
      image: jhumkaImg11,
      badge: "Daily Chic",
      description: "Petite comfort-weight jhumki featuring leafy vine studs and smooth mirror-finish golden bells.",
      isBestseller: true,
    },
    {
      id: 12,
      name: "Emerald Bloom Kundan Bell Earrings",
      category: "Kundan & Meenakari",
      purity: "22KT Yellow Gold",
      weight: "19.70 g",
      priceNum: 142000,
      price: "₹1,42,000",
      originalPrice: "₹1,56,000",
      rating: 4.9,
      reviews: 81,
      image: jhumkaImg12,
      badge: "Emerald Glow",
      description: "Lustrous emerald green crystal center surrounded by kundan florets and hanging golden beads.",
      isBestseller: false,
    },
    {
      id: 13,
      name: "Kasu Mala Coin Studded Temple Jhumka",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "17.40 g",
      priceNum: 125000,
      price: "₹1,25,000",
      originalPrice: "₹1,38,000",
      rating: 4.9,
      reviews: 99,
      image: jhumkaImg13,
      badge: "Auspicious Kasu",
      description: "Traditional embossed Lakshmi coins circling the perimeter of a high-relief antique gold bell.",
      isBestseller: false,
    },
    {
      id: 14,
      name: "Modern Geometric Hexagon Gold Jhumka",
      category: "Contemporary Dailywear",
      purity: "22KT Yellow Gold",
      weight: "11.50 g",
      priceNum: 84000,
      price: "₹84,000",
      originalPrice: "₹93,000",
      rating: 4.7,
      reviews: 58,
      image: jhumkaImg14,
      badge: "Modern Twist",
      description: "Sharp architectural geometric lines meet traditional dome bells in a clean, fusion silhouette.",
      isBestseller: false,
    },
    {
      id: 15,
      name: "Solitaire Crown 18K Diamond Danglers",
      category: "Diamond Jhumkas",
      purity: "18KT Diamond Studded",
      weight: "15.20 g",
      priceNum: 154000,
      price: "₹1,54,000",
      originalPrice: "₹1,72,000",
      rating: 4.9,
      reviews: 87,
      image: jhumkaImg15,
      badge: "IGI Certified",
      description: "Elevated solitaire diamond studs holding a delicately swaying micro-pavé diamond bell.",
      isBestseller: false,
    },
    {
      id: 16,
      name: "Nagas Antique Swan Deity Jhumka",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "23.60 g",
      priceNum: 169000,
      price: "₹1,69,000",
      originalPrice: "₹1,86,000",
      rating: 4.9,
      reviews: 79,
      image: jhumkaImg16,
      badge: "Hamsa Motif",
      description: "Sacred mythical swan (Hamsa) motif carved with micro-chisel detailing and vintage oxidized luster.",
      isBestseller: false,
    },
    {
      id: 17,
      name: "Traditional Chandbali Jhumka Symphony",
      category: "Bridal & Multi-Tier",
      purity: "22KT Yellow Gold",
      weight: "27.80 g",
      priceNum: 195000,
      price: "₹1,95,000",
      originalPrice: "₹2,16,000",
      rating: 5.0,
      reviews: 142,
      image: jhumkaImg17,
      badge: "Chandbali Fusion",
      description: "Crescent moon chandbali upper silhouette holding suspended multi-layer golden umbrella jhumkas.",
      isBestseller: true,
    },
    {
      id: 18,
      name: "Ghungroo Melody Festive Gold Earrings",
      category: "Contemporary Dailywear",
      purity: "22KT Yellow Gold",
      weight: "13.80 g",
      priceNum: 99000,
      price: "₹99,000",
      originalPrice: "₹1,09,000",
      rating: 4.8,
      reviews: 105,
      image: jhumkaImg18,
      badge: "Musical Ghungroo",
      description: "Rhythmic dangling gold beads that chime subtly with every movement, crafted in 22K yellow gold.",
      isBestseller: false,
    },
    {
      id: 19,
      name: "Royal Rajputana Polki Latkan Jhumka",
      category: "Kundan & Meenakari",
      purity: "22KT Yellow Gold",
      weight: "25.90 g",
      priceNum: 182000,
      price: "₹1,82,000",
      originalPrice: "₹2,02,000",
      rating: 4.9,
      reviews: 116,
      image: jhumkaImg19,
      badge: "Royal Heritage",
      description: "Long statement latkan jhumka with handcrafted golden chain extensions and ruby bead tassels.",
      isBestseller: false,
    },
    {
      id: 20,
      name: "Luxe Aura Signature Polished Royal Jhumka",
      category: "Bridal & Multi-Tier",
      purity: "22KT Yellow Gold",
      weight: "29.40 g",
      priceNum: 208000,
      price: "₹2,08,000",
      originalPrice: "₹2,30,000",
      rating: 5.0,
      reviews: 240,
      image: jhumkaImg20,
      badge: "Signature Collection",
      description: "Our signature flagship royal jhumka featuring high-mirror polish, micro-filigree lace, and heavy bridal presence.",
      isBestseller: true,
    },
  ];

  const categories = ['All', 'Bridal & Multi-Tier', 'Antique & Temple', 'Kundan & Meenakari', 'Contemporary Dailywear', 'Diamond Jhumkas'];
  const purities = ['All', '22KT Yellow Gold', '18KT Diamond Studded'];

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(`${product.name} (${selectedClosure}) added to your shopping bag!`);
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredJhumkas = useMemo(() => {
    return jhumkasList
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
  }, [jhumkasList, selectedCategory, selectedPurity, sortBy, searchQuery]);

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
            <span className="text-brand-orange font-semibold">Royal Jhumkas & Earrings</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm">
                <span>👑</span> BIS 916 Hallmarked Pure Gold & IGI Diamonds
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Royal Jhumkas & <br className="hidden sm:inline" />
                <span className="text-brand-orange">Heritage Earrings</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Step into a world of timeless melody and royal elegance. Explore our handcrafted collection of multi-tier bridal jhumkas, antique temple nagas bells, Jaipur meenakari blossoms, and sparkling diamond danglers.
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
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">👂</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Comfort Weight Engineering</h4>
                  <p className="text-[11px] text-slate-600">Ergonomic balance with secure closures</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">🔄</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Lifetime Exchange</h4>
                  <p className="text-[11px] text-slate-600">100% gold weight value guarantee</p>
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
                  {cat} {cat === 'All' ? `(${jhumkasList.length})` : ''}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search jhumkas..."
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

      {/* Jhumkas Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedCategory === 'All' ? 'All Jhumkas & Earrings' : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Showing {filteredJhumkas.length} handcrafted jhumka designs</p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Prices inclusive of all taxes & making charges
          </div>
        </div>

        {filteredJhumkas.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">✨</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">No Jhumkas Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any jhumkas matching your current filter criteria. Try resetting your search or selecting another category.
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
            {filteredJhumkas.map((jhumka) => (
              <div
                key={jhumka.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {jhumka.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-amber-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {jhumka.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(jhumka.id)}
                  title="Add to Wishlist"
                  className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-red shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill={wishlist[jhumka.id] ? "#E73F1E" : "none"}
                    stroke={wishlist[jhumka.id] ? "#E73F1E" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Image Container with Hover Zoom & Quick View */}
                <div 
                  className="relative aspect-square overflow-hidden bg-amber-50/50 cursor-pointer flex items-center justify-center p-2"
                  onClick={() => setActiveModalProduct(jhumka)}
                >
                  <img
                    src={jhumka.image}
                    alt={jhumka.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveModalProduct(jhumka); }}
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
                      <span>{jhumka.purity}</span>
                      <span className="bg-amber-100/80 px-2 py-0.5 rounded text-slate-800">{jhumka.weight}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(jhumka)}
                      className="text-base font-semibold text-slate-900 hover:text-brand-orange transition-colors cursor-pointer line-clamp-1"
                    >
                      {jhumka.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1.5 mt-1">
                      <div className="flex text-brand-gold text-xs">
                        {"★".repeat(Math.floor(jhumka.rating))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{jhumka.rating}</span>
                      <span className="text-[11px] text-slate-400">({jhumka.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900">{jhumka.price}</div>
                      <div className="text-[11px] text-slate-400 line-through">{jhumka.originalPrice}</div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(jhumka)}
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

      {/* Jhumka Styling & Earring Weight Guide */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-y border-brand-gold/30 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Guide Chart */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Expert Earring Engineering</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">Jhumka Weight & Fastening Guide</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Choose the optimal earring closure and weight profile for maximum festive comfort without ear lobe strain:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-brand-gold/40 shadow-sm bg-white">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-amber-50 text-slate-800 font-bold border-b border-brand-gold/30">
                    <tr>
                      <th className="px-4 py-2.5">Category</th>
                      <th className="px-4 py-2.5">Weight Range</th>
                      <th className="px-4 py-2.5">Recommended Closure</th>
                      <th className="px-4 py-2.5">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="px-4 py-2 font-semibold">Petite Daily Jhumki</td><td className="px-4 py-2">6 - 12 g</td><td className="px-4 py-2">Push Back / Stud</td><td className="px-4 py-2">Dailywear & Office</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold text-brand-orange">Festive Classic</td><td className="px-4 py-2 font-semibold">14 - 22 g</td><td className="px-4 py-2 font-semibold">South Screw Back</td><td className="px-4 py-2 font-semibold">Festivals & Functions</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Grand Bridal Jhumka</td><td className="px-4 py-2">24 - 36 g</td><td className="px-4 py-2">Bombay Screw + Ear Sahara</td><td className="px-4 py-2">Weddings & Receptions</td></tr>
                    <tr className="bg-amber-50/30"><td className="px-4 py-2 font-semibold">Chandbali Jhumka</td><td className="px-4 py-2">20 - 30 g</td><td className="px-4 py-2">Safety Latch / Clip</td><td className="px-4 py-2">Sangeet & Grand Gala</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Bridal Jhumka & Sahara Consultation */}
            <div className="bg-gradient-to-br from-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-4 shadow-2xl relative overflow-hidden border border-brand-gold">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl"></div>
              <span className="text-xs uppercase tracking-widest text-brand-lightgold font-semibold">Earring Concierge Service</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-chicago text-white">Custom Ear Sahara & Bridal Jhumkas</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Need matching multi-strand gold ear-chains (Kaan Sahara), custom pearl latkans, or clip-on backs for unpierced ears? Connect with our master jewellers.
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

                {/* Earring Fastening Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Select Earring Closure Type:</label>
                  <div className="flex flex-wrap gap-2">
                    {['Screw Back', 'Push Back', 'Bombay Screw', 'Clip-On (Unpierced)'].map(closure => (
                      <button
                        key={closure}
                        onClick={() => setSelectedClosure(closure)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedClosure === closure
                            ? 'bg-slate-900 text-brand-gold border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-brand-orange'
                        }`}
                      >
                        {closure}
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
