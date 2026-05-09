import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoBookOutline, IoSearchCircleOutline } from 'react-icons/io5';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Glowing Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-glow/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-7xl text-neon-cyan drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]"
            >
              <IoBookOutline />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-purple-glow text-glow-cyan">
              Open eResources
            </span>
            <br />
            <span className="text-white">Library</span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light mb-10">
            A limitless universe of free knowledge. Explore millions of books, journals, and research papers floating in the academic space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-neon-cyan/20 border border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan hover:text-deep-space hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <IoSearchCircleOutline className="text-2xl" />
                Explore Resources
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
