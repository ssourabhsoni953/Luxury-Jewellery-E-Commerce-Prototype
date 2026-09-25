export default function RectangularCategories({ title, items }) {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-slate-900 font-chicago drop-shadow-sm">{title}</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Aspect ratio 2:1 mapping (w-full, h-half of width approximate via aspect-ratio if supported, or padding hack, but we'll use aspect-[2/1]) */}
              <div className="w-full aspect-[2/1] rounded-lg overflow-hidden relative shadow-sm group-hover:shadow-lg transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium text-lg tracking-wide">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
