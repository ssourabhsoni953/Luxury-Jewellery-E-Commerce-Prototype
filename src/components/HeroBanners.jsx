import React from "react";
import { Link } from "react-router-dom";
const heroBg =
  "https://res.cloudinary.com/upodegd7/image/upload/v1790346721/gold-diamond-jewellery-bg.jpg";
const bridalBannerImg =
  "https://res.cloudinary.com/upodegd7/image/upload/bridal_banner.jpg";
const giftingBannerImg =
  "https://res.cloudinary.com/upodegd7/image/upload/gifting_banner.jpg";

export default function HeroBanners() {
  return (
    <section className="py-8 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grand Hero Banner with AI Generated Gold & Diamond Jewellery Background */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-95 sm:min-h-120 flex items-center border border-brand-gold/40">
          <img
            src={heroBg}
            alt="Gold & Diamond Jewellery Collection"
            className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
          />
          {/* Elegant gradient overlay for perfect readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"></div>

          <div className="relative z-10 max-w-xl p-8 sm:p-12 lg:p-16 text-white space-y-4">
            <span className="inline-block uppercase tracking-widest text-xs sm:text-sm font-semibold bg-brand-orange/90 text-white px-3.5 py-1 rounded-full shadow-md">
              Royal Heritage 2026
            </span>
            <h2 className="text-3xl sm:text-5xl   text-white drop-shadow-lg leading-tight font-chicago">
              Timeless Gold & <br className="hidden sm:inline" />
              <span className="text-brand-lightgold">Sparkling Diamonds</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed drop-shadow">
              Immerse yourself in authentic 24k gold artistry and certified
              brilliant-cut diamonds, hand-crafted to celebrate every milestone.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/collections"
                className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-red hover:to-orange-700 text-white px-7 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-block text-center"
              >
                Explore Collection
              </Link>
              <Link
                to="/bridal#bridal-consultation"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-6 py-3 rounded-full text-base font-medium transition-colors inline-block text-center"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Horizontal Picture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <Link
            to="/bridal"
            className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-brand-gold/20 block"
          >
            <img
              src={bridalBannerImg}
              alt="Bridal Masterpieces"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-brand-lightgold font-semibold">
                Exquisite Bridal
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 shadow-sm font-chicago">
                Bridal Masterpieces
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm mb-4 opacity-90">
                Discover the perfect match for your big day.
              </p>
              <span className="bg-brand-gold hover:bg-brand-orange text-slate-900 group-hover:text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow inline-block">
                Shop Bridal →
              </span>
            </div>
          </Link>

          <Link
            to="/gifting"
            className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-brand-gold/20 block"
          >
            <img
              src={giftingBannerImg}
              alt="Luxury Gifting & Keepsakes"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-brand-lightgold font-semibold">
                Luxury Keepsakes
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 shadow-sm font-chicago">
                Gifting Boutique
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm mb-4 opacity-90">
                Thoughtful fine gold and diamond treasures for your loved ones.
              </p>
              <span className="bg-brand-red hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow inline-block">
                Explore Gifts →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
