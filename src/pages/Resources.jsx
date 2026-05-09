import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FilterBar from '../components/FilterBar';
import ResourceCard from '../components/ResourceCard';
import { resources } from '../data/resources';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredResources, setFilteredResources] = useState(resources);

  useEffect(() => {
    let result = resources;

    if (activeCategory !== 'All') {
      result = result.filter(res => res.category === activeCategory);
    }

    if (searchTerm) {
      result = result.filter(res => 
        res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResources(result);
  }, [searchTerm, activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore <span className="text-purple-glow text-glow-purple">Resources</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find the exact academic material you need. Filter by category or search directly.
          </p>
        </div>

        <FilterBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl text-gray-400 font-medium">No resources found matching your criteria.</h3>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
              className="mt-6 text-neon-cyan hover:text-purple-glow transition-colors underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Resources;
