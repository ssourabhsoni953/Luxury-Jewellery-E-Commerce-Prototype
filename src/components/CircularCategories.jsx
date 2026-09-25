import React from 'react';
import { Link } from 'react-router-dom';

export default function CircularCategories({ title, categories }) {
  return (
    <section className="py-12 bg-transparent relative border-4 border-brand-gold backdrop-blur-[5px] rounded-3xl">
      <div className="static">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {title && <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight italic text-center mb-10 text-slate-900 drop-shadow-sm">{title}</h2>}
          <div className="flex overflow-x-auto pb-6 space-x-6 justify-start md:justify-center hide-scrollbar">
            {categories.map((category, index) => {
              const content = (
                <div className="flex flex-col items-center shrink-0 cursor-pointer group">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-brand-gold/60 shadow-md group-hover:shadow-xl group-hover:border-slate-800 transition-all duration-300 relative bg-white/40">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {category.badge && (
                      <span className="absolute bottom-1 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        {category.badge}
                      </span>
                    )}
                  </div>
                  <span className="mt-4 text-sm sm:text-lg font-extrabold font-sans text-slate-800 group-hover:text-black transition-colors text-center ">
                    {category.name}
                  </span>
                </div>
              );

              if (category.link) {
                return (
                  <Link key={index} to={category.link} className="no-underline">
                    {content}
                  </Link>
                );
              }

              return <div key={index}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
