import React from 'react';
import CircularCategories from '../components/CircularCategories';
import HeroBanners from '../components/HeroBanners';
import RectangularCategories from '../components/RectangularCategories';
import ProductGrid from '../components/ProductGrid';

const jhumkaImg = "https://res.cloudinary.com/upodegd7/image/upload/Jhumka_polished.jpg";
const mangalsutraImg = "https://res.cloudinary.com/upodegd7/image/upload/mangalsutra_polished.jpg";
const necklaceImg = "https://res.cloudinary.com/upodegd7/image/upload/necklace_polished.jpg";
const ringImg = "https://res.cloudinary.com/upodegd7/image/upload/rings_polished.jpg";
const bangleImg = "https://res.cloudinary.com/upodegd7/image/upload/gold_bangle_polished.jpg";
const nosepinImg = "https://res.cloudinary.com/upodegd7/image/upload/nosepin_polished.jpg";

const bridalThumb = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const collectionThumb = "https://res.cloudinary.com/upodegd7/image/upload/images.jpg";
const giftThumb = "https://res.cloudinary.com/upodegd7/image/upload/Social_Sharing_Image_1200x628_28.4.webp";
const silverImg = "https://res.cloudinary.com/upodegd7/image/upload/silver_collection.jpg";
const mensImg = "https://res.cloudinary.com/upodegd7/image/upload/mens_jewellery.jpg";
const gemstonesImg = "https://res.cloudinary.com/upodegd7/image/upload/gemstones.jpg";

const studEarringsImg = "https://res.cloudinary.com/upodegd7/image/upload/stud_earrings.jpg";
const hoopEarringsImg = "https://res.cloudinary.com/upodegd7/image/upload/hoop_earrings.jpg";
const dropEarringsImg = "https://res.cloudinary.com/upodegd7/image/upload/drop_earrings.jpg";
const chandelierEarringsImg = "https://res.cloudinary.com/upodegd7/image/upload/chandelier_earrings.jpg";

export default function HomePage() {
  const categoriesTop = [
    { name: "Antique Gold Bangles", image: bangleImg, link: "/bangles", badge: "Trending" },
    { name: "Peacock Necklace", image: necklaceImg, link: "/necklaces", badge: "Popular" },
    { name: "Gold Wave Rings", image: ringImg, link: "/rings", badge: "Bestseller" },
    { name: "Royal Jhumkas", image: jhumkaImg, link: "/jhumkas", badge: "Royal" },
    { name: "Diamond Mangalsutra", image: mangalsutraImg, link: "/mangalsutra", badge: "Sacred" },
    { name: "Diamond Nose Pin", image: nosepinImg, link: "/nosepins", badge: "Graceful" },
  ];

  const categoriesBottom = [
    { name: "Grand Bridal Atelier", image: bridalThumb, link: "/bridal", badge: "Royal Bridal" },
    { name: "Signature Collections", image: collectionThumb, link: "/collections", badge: "Exclusive" },
    { name: "Luxury Gifting", image: giftThumb, link: "/gifting", badge: "Gifts" },
    { name: "Silver Collection", image: silverImg },
    { name: "Mens Jewellery", image: mensImg },
    { name: "Gemstones", image: gemstonesImg },
  ];

  const earringsCategories = [
    { name: "Stud Earrings", image: studEarringsImg },
    { name: "Hoop Earrings", image: hoopEarringsImg },
    { name: "Drop Earrings", image: dropEarringsImg },
    { name: "Chandelier", image: chandelierEarringsImg },
  ];

  return (
    <main className="grow">
      {/* Section 3: Circular Categories (First set) with Bangles linked to /bangles */}
      <CircularCategories title="Shop by Category" categories={categoriesTop} />

      {/* Section 4: Horizontal Banners */}
      <HeroBanners />

      {/* Section 5: Circular Categories (Second set) */}
      <CircularCategories title="Explore More Collections" categories={categoriesBottom} />

      {/* Section 6: Rectangular Earrings Categories */}
      <RectangularCategories title="Elegant Earrings" items={earringsCategories} />

      {/* Section 7: Amazon Style Product Listing */}
      <ProductGrid />
    </main>
  );
}
