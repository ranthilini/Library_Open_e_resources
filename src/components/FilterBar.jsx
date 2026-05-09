import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { categories } from '../data/resources';

const FilterBar = ({ searchTerm, setSearchTerm, activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 space-y-6">
      {/* Search Input */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <IoSearch className="text-gray-400 text-xl group-focus-within:text-neon-cyan transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search for resources, journals, books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan glassmorphism transition-all duration-300"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-neon-cyan text-deep-space shadow-[0_0_15px_rgba(0,243,255,0.6)]'
                : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/30'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
