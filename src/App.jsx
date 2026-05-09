import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

// Pages
import Home from './pages/Home';
import Resources from './pages/Resources';
import Categories from './pages/Categories';
import About from './pages/About';

// Create a wrapper component to use useLocation hook for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-white bg-deep-space selection:bg-neon-cyan selection:text-deep-space">
        <ParticleBackground />
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
