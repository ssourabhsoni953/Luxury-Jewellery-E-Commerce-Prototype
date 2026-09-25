import React from 'react';
const jhumkaImg = "https://res.cloudinary.com/upodegd7/image/upload/Jhumka_polished.jpg";
const mangalsutraImg = "https://res.cloudinary.com/upodegd7/image/upload/mangalsutra_polished.jpg";
const necklaceImg = "https://res.cloudinary.com/upodegd7/image/upload/necklace_polished.jpg";
const ringImg = "https://res.cloudinary.com/upodegd7/image/upload/rings_polished.jpg";
const bangleImg = "https://res.cloudinary.com/upodegd7/image/upload/gold_bangle_polished.jpg";
const nosepinImg = "https://res.cloudinary.com/upodegd7/image/upload/nosepin_polished.jpg";
const braceletImg = "https://res.cloudinary.com/upodegd7/image/upload/bracelet_diamond.jpg";
const platinumBandImg = "https://res.cloudinary.com/upodegd7/image/upload/platinum_band.jpg";

export default function ProductGrid() {
  const products = [
    { id: 1, name: "Two-Tone Gold Wave Ring", price: "₹48,500", rating: 4.9, reviews: 142, image: ringImg },
    { id: 2, name: "Royal Peacock Filigree Necklace", price: "₹2,85,000", rating: 5.0, reviews: 98, image: necklaceImg },
    { id: 3, name: "Temple Bridal Gold Jhumkas", price: "₹74,500", rating: 4.9, reviews: 86, image: jhumkaImg },
    { id: 4, name: "Diamond Chevron Mangalsutra", price: "₹92,000", rating: 4.8, reviews: 230, image: mangalsutraImg },
    { id: 5, name: "Royal Meenakari Gold Bangle", price: "₹1,35,000", rating: 4.9, reviews: 114, image: bangleImg },
    { id: 6, name: "Floral Diamond Gold Nose Pin", price: "₹18,500", rating: 4.9, reviews: 175, image: nosepinImg },
    { id: 7, name: "Rose Gold Diamond Bracelet", price: "₹42,000", rating: 4.7, reviews: 210, image: braceletImg },
    { id: 8, name: "Platinum Wedding Band", price: "₹65,000", rating: 4.8, reviews: 95, image: platinumBandImg },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 font-chicago drop-shadow-sm">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-brand-gold/30 hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col group transform hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full text-gray-400 hover:text-brand-red shadow-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-medium text-slate-800 line-clamp-2 mb-1">{product.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-brand-gold text-sm">★ {product.rating}</span>
                  <span className="text-gray-400 text-xs">({product.reviews})</span>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-900">{product.price}</span>
                  <button className="bg-slate-900 hover:bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
