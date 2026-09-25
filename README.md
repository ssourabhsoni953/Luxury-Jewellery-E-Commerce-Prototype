<div align="center">
  <img src="https://res.cloudinary.com/upodegd7/image/upload/gold_bangle_polished.jpg" alt="Jewellery Banner" width="100%" style="border-radius:15px; max-height:300px; object-fit:cover; margin-bottom: 20px;">
  
  <h1> Luxury Jewellery E-Commerce Prototype </h1>
  <p><strong>A premium, high-performance web shopping experience built for modern luxury brands.</strong></p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)](https://cloudinary.com/)

</div>

<br/>

##  Overview

This project is a modern, responsive **E-Commerce Web Application Prototype** designed specifically for a premium jewellery brand. Developed using **React (Vite)** and **Tailwind CSS**, it delivers a seamless, high-performance shopping experience with a focus on luxury aesthetics and fluid navigation.

The platform relies on **Cloudinary** for scalable, blazingly fast delivery of high-resolution product photography, ensuring the site remains highly performant regardless of network conditions.

---

##  Key Features

-  **Extensive Product Catalog:** Dedicated and dynamically routed pages for collections including Bangles, Rings, Necklaces, Jhumkas, Mangalsutras, Nosepins, Bridal pieces, and Gifting.
-  **Premium User Interface:** Features a sleek, modern aesthetic with a sticky luxury header, smooth scrolling, and beautifully interactive product grids.
-  **Lightning Fast Media Delivery:** All product imagery is securely hosted, optimized, and auto-scaled via the **Cloudinary CDN** to reduce bandwidth and maximize visual quality.
-  **Advanced Filtering & Sorting:** Instantly refine product lists by category, gold purity, and dynamic price sorting.
-  **Interactive Shopping Elements:** Wishlist state management, detailed product quick-view modals (with descriptions, sizing, and pricing), and dynamic "Added to Cart" alerts.
-  **Fully Responsive:** Layouts automatically adapt from large desktop monitors down to mobile devices without losing the luxury feel.

---

##  Tech Stack

### **Frontend Framework**
- **[React 18](https://react.dev/)**: The core UI library for building component-driven interfaces.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling providing lightning-fast Hot Module Replacement (HMR) and optimized production builds.

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework enabling rapid UI development directly in the markup.
- **Lucide React / Heroicons**: Beautiful, scalable SVG icons used throughout the interface.

### **Routing & State Management**
- **[React Router DOM v6](https://reactrouter.com/)**: Handles seamless, client-side navigation between different jewelry collections without reloading the page.
- **React Hooks**: Leverages `useState`, `useEffect`, and `useMemo` for local state and component logic.

### **Asset Management**
- **[Cloudinary](https://cloudinary.com/)**: Handles all media storage, on-the-fly transformations, format optimization, and global CDN delivery.

---

##  Project Structure

```text
src/
├── assets/         # Local static assets (fonts, icons)
├── components/     # Reusable UI components (Header, Footer, Modals, Cards)
├── pages/          # Individual route pages (BanglesPage, RingsPage, BridalPage, etc.)
├── utils/          # Helper functions and configurations
├── App.jsx         # Main application router and layout wrapper
└── main.jsx        # React DOM entry point
```

---

## 💻 Running Locally

To run this prototype on your local machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/jewellery-prototype.git
cd jewellery-prototype
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The application will be running at `http://localhost:5173`.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

---

##  Design Philosophy

This prototype was built to demonstrate best practices in modern e-commerce UI design for high-end retail:
* **Micro-interactions:** Subtle hover states, smooth transitions, and modal animations make the application feel alive and responsive.
* **Typographic Hierarchy:** Carefully selected fonts and spacing communicate a high-end brand identity.
* **Component-Driven Architecture:** Code is heavily componentized to ensure easy scalability when adding new product types or promotional sections in the future.

---
<div align="center">
  <p><i>Designed & Developed as a Premium Web Experience</i></p>
</div>
