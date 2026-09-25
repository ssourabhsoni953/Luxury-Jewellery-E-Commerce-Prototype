import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BulletinStrip from './components/BulletinStrip';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import BanglesPage from './pages/BanglesPage';
import RingsPage from './pages/RingsPage';
import NecklacePage from './pages/NecklacePage';
import JhumkasPage from './pages/JhumkasPage';
import MangalsutraPage from './pages/MangalsutraPage';
import NosepinsPage from './pages/NosepinsPage';
/* import { fetchMetalRates } from './sevices/GoldSilverAPI' */

import BridalPage from './pages/BridalPage';
import CollectionPage from './pages/CollectionPage';
import GiftingPage from './pages/GiftingPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-transparent">
        {/* Section 1: Live Bulletin Strip */}
        <BulletinStrip />

        {/* Section 2: Sticky Luxury Header */}
        <Header />

        {/* Dynamic Multi-Page Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bangles" element={<BanglesPage />} />
          <Route path="/rings" element={<RingsPage />} />
          <Route path="/necklaces" element={<NecklacePage />} />
          <Route path="/necklace" element={<NecklacePage />} />
          <Route path="/jhumkas" element={<JhumkasPage />} />
          <Route path="/jhumka" element={<JhumkasPage />} />
          <Route path="/mangalsutra" element={<MangalsutraPage />} />
          <Route path="/mangalsutras" element={<MangalsutraPage />} />
          <Route path="/nosepin" element={<NosepinsPage />} />
          <Route path="/nosepins" element={<NosepinsPage />} />
          <Route path="/nose-pin" element={<NosepinsPage />} />
          <Route path="/bridal" element={<BridalPage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/gifting" element={<GiftingPage />} />
          <Route path="/gifts" element={<GiftingPage />} />
          <Route path="/gift" element={<GiftingPage />} />
        </Routes>

        {/* Section 8: Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
