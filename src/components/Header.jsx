import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-real-diamonds shadow-md sticky top-0 z-50 border-4 rounded-4xl border-brand-lightgold">
      <div className="backdrop-blur-[2px] rounded-4xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="shrink-0 flex items-center group">
              <h1 className="text-2xl font-bold text-brand-orange drop-shadow-sm tracking-tight group- transition-colors">
                LUXE AURA
              </h1>
            </Link>

            <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              <Link
                to="/"
                className={`px-3 pb-1 text-2xl border-b-2 rounded-4xl lg:text-3xl font-medium transition-colors font-chicago drop-shadow-sm ${isActive('/') ? 'text-[#0f172b] bg-[#efdaae]' : ' border-[#0f172b] text-[#0f172b] hover:bg-[#efdaae]'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/bangles"
                className={`px-3 pb-1 text-2xl border-b-2 rounded-4xl lg:text-3xl font-medium transition-colors font-chicago drop-shadow-sm ${isActive('/bangles') ? 'text-[#0f172b] bg-[#efdaae]' : ' border-[#0f172b] text-[#0f172b] hover:bg-[#efdaae]'
                  }`}
              >
                Bangle
              </Link>
              <Link
                to="/collections"
                className={`px-3 pb-1 text-2xl border-b-2 rounded-4xl lg:text-3xl font-medium transition-colors font-chicago drop-shadow-sm ${isActive('/collections') ? 'text-[#0f172b] bg-[#efdaae]' : ' border-[#0f172b] text-[#0f172b] hover:bg-[#efdaae]'
                  }`}
              >
                Collections
              </Link>
              <Link
                to="/bridal"
                className={`px-3 pb-1 text-2xl border-b-2 rounded-4xl lg:text-3xl font-medium transition-colors font-chicago drop-shadow-sm ${isActive('/bridal') ? 'text-[#0f172b] bg-[#efdaae]' : ' border-[#0f172b] text-[#0f172b] hover:bg-[#efdaae]'
                  }`}
              >
                Bridal
              </Link>
              <Link
                to="/gifting"
                className={`px-3 pb-1 text-2xl border-b-2 rounded-4xl lg:text-3xl font-medium transition-colors font-chicago drop-shadow-sm ${isActive('/gifting') ? 'text-[#0f172b] bg-[#efdaae]' : ' border-[#0f172b] text-[#0f172b] hover:bg-[#efdaae]'
                  }`}
              >
                Gifting
              </Link>
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                title="Search"
                className="text-slate-800  transition-colors p-1.5 rounded-full hover:bg-white/40"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              <button
                title="Account"
                className="text-slate-800  transition-colors p-1.5 rounded-full hover:bg-white/40"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </button>
              <Link
                to="/bangles"
                title="Shopping Bag"
                className="text-slate-800  transition-colors p-1.5 rounded-full hover:bg-white/40 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
