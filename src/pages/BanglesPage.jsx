import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Import all bangle images from src/assets/img/Bangles/
const bangleImg2 = "https://res.cloudinary.com/upodegd7/image/upload/khizar-rathore-AoZrJQ80KCc-unsplash.jpg";
const bangleImg3 = "https://res.cloudinary.com/upodegd7/image/upload/khizar-rathore-AoZrJQ80KCc-unsplash_1.jpg";
const bangleImg4 = "https://res.cloudinary.com/upodegd7/image/upload/khizar-rathore-xQ9HeP870EE-unsplash.jpg";
const bangleImg5 = "https://res.cloudinary.com/upodegd7/image/upload/pexels-akoonie-34118116.jpg";
const bangleImg6 = "https://res.cloudinary.com/upodegd7/image/upload/pexels-deepesh-raj-1934768-20429577.jpg";
const bangleImg7 = "https://res.cloudinary.com/upodegd7/image/upload/pexels-kushith-m-442883749-20493839.jpg";
const bangleImg8 = "https://res.cloudinary.com/upodegd7/image/upload/pexels-mlkbnl-12194299.jpg";
const bangleImg9 = "https://res.cloudinary.com/upodegd7/image/upload/pexels-ventarafilms-7251792.jpg";
const bangleImg10 = "https://res.cloudinary.com/upodegd7/image/upload/sanjay-jain-ynts2uDw1ws-unsplash.jpg";
const bangleImg11 = "https://res.cloudinary.com/upodegd7/image/upload/Unconfirmed_378168.jpg";
const bangleImg12 = "https://res.cloudinary.com/upodegd7/image/upload/Unconfirmed_378168.j5pg.jpg";
const bangleImg13 = "https://res.cloudinary.com/upodegd7/image/upload/zayed-ahmed-zadu-wreS7kv_tLE-unsplash.jpg";

// Import catalog bangles from parent img directory
const bangleImg14 = "https://res.cloudinary.com/upodegd7/image/upload/gold_bangle_polished.jpg";
const bangleImg15 = "https://res.cloudinary.com/upodegd7/image/upload/gold-bangle.jpg";

export default function BanglesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPurity, setSelectedPurity] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState({});
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("2.6");
  const [cartAlert, setCartAlert] = useState(null);

  const banglesList = [
    {
      id: 1,
      name: "Maharani Royal Kundan Jadau Kada",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "48.20 g",
      priceNum: 312000,
      price: "₹3,12,000",
      originalPrice: "₹3,45,000",
      rating: 5.0,
      reviews: 148,
      image:
        "https://res.cloudinary.com/upodegd7/image/upload/v1790328491/8180766-indian-3184578_1920.jpg",
      badge: "Bridal Exclusive",
      description:
        "An heirloom masterpiece handcrafted with uncut syndicate polki diamonds and vibrant ruby gemstones set in 22KT antique finish gold.",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Heritage Temple Floral Antique Kada",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "38.60 g",
      priceNum: 248000,
      price: "₹2,48,000",
      originalPrice: "₹2,72,000",
      rating: 4.9,
      reviews: 96,
      image: bangleImg2,
      badge: "Heritage 2026",
      description:
        "Intricately embossed flora and filigree motifs with oxidized antique polish inspired by historic South Indian temple architecture.",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Royal Rajasthani Meenakari Bangle Set",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "42.10 g",
      priceNum: 275000,
      price: "₹2,75,000",
      originalPrice: "₹2,99,000",
      rating: 4.9,
      reviews: 112,
      image: bangleImg3,
      badge: "Handcrafted Art",
      description:
        "Traditional Jaipur enamel work (Meenakari) paired with pure 22K gold carvings, offering timeless bridal majesty.",
      isBestseller: false,
    },
    {
      id: 4,
      name: "Imperial Peacock Filigree Kada",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "36.40 g",
      priceNum: 235000,
      price: "₹2,35,000",
      originalPrice: "₹2,55,000",
      rating: 4.8,
      reviews: 84,
      image: bangleImg4,
      badge: "Trending",
      description:
        "Glorious twin peacock head clasp Kada crafted with exquisite wire filigree and high-precision gold carving.",
      isBestseller: true,
    },
    {
      id: 5,
      name: "Shringar Classic Bridal Chooda & Gold Set",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "54.80 g",
      priceNum: 355000,
      price: "₹3,55,000",
      originalPrice: "₹3,90,000",
      rating: 5.0,
      reviews: 210,
      image: bangleImg5,
      badge: "Grand Bridal",
      description:
        "Complete bridal wrist symphony featuring pair of heavy handcrafted gold kadas adorned with fine diamond accents and bridal luster.",
      isBestseller: true,
    },
    {
      id: 6,
      name: "Navratna Gemstone Studded Bangle",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "29.30 g",
      priceNum: 198000,
      price: "₹1,98,000",
      originalPrice: "₹2,15,000",
      rating: 4.8,
      reviews: 73,
      image: bangleImg6,
      badge: "Auspicious",
      description:
        "Sacred nine astrological gemstones embedded in floral 22K gold bezels bringing cosmic harmony, elegance, and divine grace.",
      isBestseller: false,
    },
    {
      id: 7,
      name: "Traditional South Indian Kemp Bangle Pair",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "32.70 g",
      priceNum: 218000,
      price: "₹2,18,000",
      originalPrice: "₹2,40,000",
      rating: 4.9,
      reviews: 135,
      image: bangleImg7,
      badge: "Temple Jewellery",
      description:
        "Authentic temple bangles studded with luminous red kemp stones and emerald accents in antique nagas craftsmanship.",
      isBestseller: true,
    },
    {
      id: 8,
      name: "Modern Geometric 22K Gold Bangle",
      category: "Contemporary Dailywear",
      purity: "22KT Yellow Gold",
      weight: "18.50 g",
      priceNum: 125000,
      price: "₹1,25,000",
      originalPrice: "₹1,38,000",
      rating: 4.7,
      reviews: 64,
      image: bangleImg8,
      badge: "Modern Chic",
      description:
        "Sleek multifaceted geometric facets that reflect golden brilliance from every angle. Ideal for executive and daily wear.",
      isBestseller: false,
    },
    {
      id: 9,
      name: "Padmavati Dual-Tone Royal Kada",
      category: "Bridal & Jadau",
      purity: "22KT Yellow Gold",
      weight: "44.00 g",
      priceNum: 289000,
      price: "₹2,89,000",
      originalPrice: "₹3,15,000",
      rating: 4.9,
      reviews: 92,
      image: bangleImg9,
      badge: "Limited Edition",
      description:
        "Dual-tone gold finish with matte antique highlights and polished edges, designed for grand festive celebrations.",
      isBestseller: false,
    },
    {
      id: 10,
      name: "Artisan Textured Antique Gold Bangle",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "26.40 g",
      priceNum: 178000,
      price: "₹1,78,000",
      originalPrice: "₹1,95,000",
      rating: 4.8,
      reviews: 81,
      image: bangleImg10,
      badge: "Artisan Handcrafted",
      description:
        "Subtle hammer-textured gold surface accented with delicate twisted wire rope borders and rich vintage tone.",
      isBestseller: false,
    },
    {
      id: 11,
      name: "Vintage Floral Carved Gold Kada",
      category: "Antique & Temple",
      purity: "22KT Yellow Gold",
      weight: "35.20 g",
      priceNum: 232000,
      price: "₹2,32,000",
      originalPrice: "₹2,50,000",
      rating: 4.9,
      reviews: 89,
      image: bangleImg11,
      badge: "Vintage Glow",
      description:
        "Deep bas-relief hand-carved floral vines crowned with side screw lock for supreme safety and comfortable fit.",
      isBestseller: false,
    },
    {
      id: 12,
      name: "Crown Elegance Diamond-Edged Bangle",
      category: "Diamond & Polki",
      purity: "18KT Diamond Studded",
      weight: "24.80 g",
      priceNum: 215000,
      price: "₹2,15,000",
      originalPrice: "₹2,40,000",
      rating: 5.0,
      reviews: 108,
      image: bangleImg12,
      badge: "IGI Certified",
      description:
        "Brilliant round cut diamonds set along crowned gold borders in rhodium prongs for blinding festive shimmer.",
      isBestseller: true,
    },
    {
      id: 13,
      name: "Goddess Lakshmi Divine Temple Kada",
      category: "Antique & Temple",
      purity: "24KT Pure Gold",
      weight: "52.60 g",
      priceNum: 368000,
      price: "₹3,68,000",
      originalPrice: "₹4,05,000",
      rating: 5.0,
      reviews: 177,
      image: bangleImg13,
      badge: "24K Temple Pure",
      description:
        "Sacred depiction of Goddess Lakshmi seated on a lotus, hand-sculpted by master hereditary goldsmiths.",
      isBestseller: true,
    },
    {
      id: 14,
      name: "Luxe Aura Signature Polished Gold Bangle",
      category: "Contemporary Dailywear",
      purity: "22KT Yellow Gold",
      weight: "21.50 g",
      priceNum: 142000,
      price: "₹1,42,000",
      originalPrice: "₹1,58,000",
      rating: 4.9,
      reviews: 240,
      image: bangleImg14,
      badge: "Signature Collection",
      description:
        "Our signature mirror-polished 22K yellow gold bangle with smooth ergonomic comfort-fit inner curve.",
      isBestseller: true,
    },
    {
      id: 15,
      name: "Solitaire Blossom Diamond Gold Kada",
      category: "Diamond & Polki",
      purity: "18KT Diamond Studded",
      weight: "28.10 g",
      priceNum: 265000,
      price: "₹2,65,000",
      originalPrice: "₹2,95,000",
      rating: 4.9,
      reviews: 119,
      image: bangleImg15,
      badge: "IGI Certified",
      description:
        "A floral constellation of VVS-clarity natural diamonds blooming across a sleek 18KT rose & yellow gold band.",
      isBestseller: false,
    },
  ];

  const categories = [
    "All",
    "Antique & Temple",
    "Bridal & Jadau",
    "Contemporary Dailywear",
    "Diamond & Polki",
  ];
  const purities = [
    "All",
    "22KT Yellow Gold",
    "24KT Pure Gold",
    "18KT Diamond Studded",
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCartAlert(
      `${product.name} (Size ${selectedSize}) added to your shopping bag!`,
    );
    setTimeout(() => {
      setCartAlert(null);
    }, 4000);
  };

  const filteredBangles = useMemo(() => {
    return banglesList
      .filter((item) => {
        const matchesCategory =
          selectedCategory === "All" || item.category === selectedCategory;
        const matchesPurity =
          selectedPurity === "All" || item.purity === selectedPurity;
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesPurity && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.priceNum - b.priceNum;
        if (sortBy === "price-high") return b.priceNum - a.priceNum;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "popular") return b.reviews - a.reviews;
        return 0; // featured
      });
  }, [banglesList, selectedCategory, selectedPurity, sortBy, searchQuery]);

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
            <Link to="/" className="hover:text-brand-red transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-orange font-semibold">
              Bangles & Kadas Collection
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm">
                <span>👑</span> BIS 916 Hallmarked Pure Gold
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-chicago drop-shadow-sm tracking-tight leading-tight">
                Royal Bangles & <br className="hidden sm:inline" />
                <span className="text-brand-orange">Heritage Kadas</span>
              </h1>
              <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
                Discover the grandeur of fine jewellery craftsmanship. From 22K
                temple nagas kadas and uncut polki bridal sets to sleek
                contemporary bangles for every celebration.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="lg:col-span-4 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-brand-gold/40 shadow-lg space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    100% Certified
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    BIS 916 Hallmark & IGI Diamonds
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">
                  🔄
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Lifetime Exchange
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    Full gold value buyback guarantee
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-lightgold/50 flex items-center justify-center text-brand-orange font-bold text-base">
                  📦
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Insured Safe Delivery
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    Tamper-evident luxury transit box
                  </p>
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
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-sm ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-brand-gold shadow-md scale-105"
                      : "bg-white/80 text-slate-700 hover:bg-white border border-brand-gold/30 hover:text-brand-orange"
                  }`}
                >
                  {cat} {cat === "All" ? `(${banglesList.length})` : ""}
                </button>
              ))}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
                <input
                  type="text"
                  placeholder="Search bangles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/90 border border-brand-gold/40 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
                <svg
                  className="w-4 h-4 text-slate-400 absolute left-3 top-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Purity Filter */}
              <select
                value={selectedPurity}
                onChange={(e) => setSelectedPurity(e.target.value)}
                className="bg-white/90 border border-brand-gold/40 rounded-full px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange cursor-pointer"
              >
                {purities.map((p) => (
                  <option key={p} value={p}>
                    {p === "All" ? "All Purities" : p}
                  </option>
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

      {/* Bangles Products Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago drop-shadow-sm">
              {selectedCategory === "All"
                ? "All Bangles & Kadas"
                : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Showing {filteredBangles.length} handcrafted designs
            </p>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            Prices inclusive of all taxes & making charges
          </div>
        </div>

        {filteredBangles.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 text-center border border-brand-gold/30 my-8 space-y-4">
            <span className="text-5xl">💎</span>
            <h3 className="text-xl font-bold text-slate-800 font-chicago">
              No Bangles Found
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any bangles matching your current filter
              criteria. Try resetting your search or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedPurity("All");
                setSearchQuery("");
              }}
              className="bg-brand-orange hover:bg-brand-red text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-md transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredBangles.map((bangle) => (
              <div
                key={bangle.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/40 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1 relative"
              >
                {/* Badge */}
                {bangle.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-gradient-to-r from-amber-600 to-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {bangle.badge}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(bangle.id)}
                  title="Add to Wishlist"
                  className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-red shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4"
                    fill={wishlist[bangle.id] ? "#E73F1E" : "none"}
                    stroke={wishlist[bangle.id] ? "#E73F1E" : "currentColor"}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Image Container with Hover Zoom & Quick View */}
                <div
                  className="relative aspect-square overflow-hidden bg-amber-50/50 cursor-pointer"
                  onClick={() => setActiveModalProduct(bangle)}
                >
                  <img
                    src={bangle.image}
                    alt={bangle.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProduct(bangle);
                      }}
                      className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-brand-gold transition-colors flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    {/* Metal details */}
                    <div className="flex items-center justify-between text-[11px] text-amber-900 font-semibold mb-1">
                      <span>{bangle.purity}</span>
                      <span className="bg-amber-100/80 px-2 py-0.5 rounded text-slate-800">
                        {bangle.weight}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveModalProduct(bangle)}
                      className="text-base font-semibold text-slate-900 hover:text-brand-orange transition-colors cursor-pointer line-clamp-1"
                    >
                      {bangle.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1.5 mt-1">
                      <div className="flex text-brand-gold text-xs">
                        {"★".repeat(Math.floor(bangle.rating))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">
                        {bangle.rating}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        ({bangle.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-slate-900">
                        {bangle.price}
                      </div>
                      <div className="text-[11px] text-slate-400 line-through">
                        {bangle.originalPrice}
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(bangle)}
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

      {/* Bangle Sizing Guide & Hallmark Assurance */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-y border-brand-gold/30 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Sizing Chart */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                Perfect Fit Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-chicago">
                How to Find Your Bangle Size
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                To measure accurately, bring your thumb and little finger
                together as if putting on a bangle, measure the widest part
                around your hand with a string, and match the chart below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-brand-gold/40 shadow-sm bg-white">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-amber-50 text-slate-800 font-bold border-b border-brand-gold/30">
                    <tr>
                      <th className="px-4 py-2.5">Indian Size</th>
                      <th className="px-4 py-2.5">Inner Diameter (mm)</th>
                      <th className="px-4 py-2.5">Hand Circumference (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="px-4 py-2 font-semibold">2 - 2 (Small)</td>
                      <td className="px-4 py-2">54.0 mm</td>
                      <td className="px-4 py-2">6.7 inches</td>
                    </tr>
                    <tr className="bg-amber-50/30">
                      <td className="px-4 py-2 font-semibold">
                        2 - 4 (Medium)
                      </td>
                      <td className="px-4 py-2">57.2 mm</td>
                      <td className="px-4 py-2">7.1 inches</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold text-brand-orange">
                        2 - 6 (Standard Most Popular)
                      </td>
                      <td className="px-4 py-2 font-semibold">60.3 mm</td>
                      <td className="px-4 py-2">7.5 inches</td>
                    </tr>
                    <tr className="bg-amber-50/30">
                      <td className="px-4 py-2 font-semibold">2 - 8 (Large)</td>
                      <td className="px-4 py-2">63.5 mm</td>
                      <td className="px-4 py-2">7.9 inches</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">
                        2 - 10 (Extra Large)
                      </td>
                      <td className="px-4 py-2">66.7 mm</td>
                      <td className="px-4 py-2">8.3 inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Crafting & Bespoke Consultation */}
            <div className="bg-gradient-to-br from-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white space-y-4 shadow-2xl relative overflow-hidden border border-brand-gold">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl"></div>
              <span className="text-xs uppercase tracking-widest text-brand-lightgold font-semibold">
                Bespoke Bridal Services
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-chicago text-white">
                Custom Weight & Karat Consultation
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Looking for customized gold weight, pair adjustments, temple
                deities, or heirloom replica bangles? Speak directly with our
                master goldsmiths.
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
                className="w-full max-h-80 object-cover rounded-2xl shadow-md border border-brand-gold/30"
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
                  <span className="text-xs text-slate-500">
                    • {activeModalProduct.purity}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-chicago leading-snug">
                  {activeModalProduct.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-1 mt-2 text-xs">
                  <span className="text-brand-gold font-bold">
                    ★ {activeModalProduct.rating}
                  </span>
                  <span className="text-slate-500">
                    ({activeModalProduct.reviews} customer reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {activeModalProduct.description}
                </p>

                {/* Specs Box */}
                <div className="mt-4 grid grid-cols-2 gap-2 bg-amber-50/60 p-3 rounded-xl border border-brand-gold/20 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">
                      Net Gold Weight
                    </span>
                    <span className="font-bold text-slate-800">
                      {activeModalProduct.weight}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">
                      Hallmark Certificate
                    </span>
                    <span className="font-bold text-slate-800">
                      BIS 916 Laser
                    </span>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Select Bangle Size (Indian):
                  </label>
                  <div className="flex gap-2">
                    {["2.2", "2.4", "2.6", "2.8", "2.10"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          selectedSize === size
                            ? "bg-slate-900 text-brand-gold border-slate-900 shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:border-brand-orange"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-2xl font-bold text-slate-900">
                    {activeModalProduct.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    {activeModalProduct.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    Save 10%
                  </span>
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
