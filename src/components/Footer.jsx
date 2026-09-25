import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="inline-block">
            <h3 className="text-xl font-bold text-brand-orange mb-4 tracking-tight hover:text-brand-gold transition-colors">
              LUXE AURA
            </h3>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Crafting timeless elegance and illuminating your life with fine jewellery since 1995. Certified 22KT & 24KT Gold and IGI Certified Diamonds.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Shop Collections</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/bridal" className="hover:text-brand-gold transition-colors text-brand-lightgold font-medium">👑 Imperial Bridal Atelier</Link></li>
            <li><Link to="/collections" className="hover:text-brand-gold transition-colors">✨ Curated Signature Suites</Link></li>
            <li><Link to="/gifting" className="hover:text-brand-gold transition-colors">🎁 Luxury Gifting Boutique</Link></li>
            <li><Link to="/bangles" className="hover:text-brand-gold transition-colors">Royal Bangles & Kadas</Link></li>
            <li><Link to="/necklaces" className="hover:text-brand-gold transition-colors">Necklaces & Chokers</Link></li>
            <li><Link to="/rings" className="hover:text-brand-gold transition-colors">Rings & Solitaires</Link></li>
            <li><Link to="/jhumkas" className="hover:text-brand-gold transition-colors">Earrings & Jhumkas</Link></li>
            <li><Link to="/mangalsutra" className="hover:text-brand-gold transition-colors">Sacred Mangalsutras</Link></li>
            <li><Link to="/nosepins" className="hover:text-brand-gold transition-colors">Diamond Nose Pins</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Customer Care & Guides</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/bridal#bridal-consultation" className="hover:text-brand-gold transition-colors">Book Bridal Consultation</Link></li>
            <li><Link to="/gifting#gift-packaging-guide" className="hover:text-brand-gold transition-colors">Luxury Packaging & Gifting</Link></li>
            <li><Link to="/bangles" className="hover:text-brand-gold transition-colors">Bangle Size Guide</Link></li>
            <li><a href="#care" className="hover:text-brand-gold transition-colors">Jewellery Care & Hallmark (BIS 916)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Newsletter</h4>
          <p className="text-sm opacity-80 mb-4">Subscribe to receive updates, exclusive festive previews, and royal offers.</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="bg-slate-800 border-none rounded-l-md px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-white" />
            <button className="bg-brand-orange hover:bg-brand-red text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-real-diamonds border-t border-brand-gold/50 mt-12 py-4 px-4 text-sm text-center text-slate-900 font-semibold tracking-wide">
        &copy; {new Date().getFullYear()} Luxe Aura Fine Jewellery. All rights reserved. 100% BIS 916 Hallmarked & Certified.
      </div>
    </footer>
  );
}
