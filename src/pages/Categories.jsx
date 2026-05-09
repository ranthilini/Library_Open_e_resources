import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ResourceCard from '../components/ResourceCard';
import { resources, categories } from '../data/resources';

const Categories = () => {
  // Exclude 'All' from categories to display
  const displayCategories = categories.filter(cat => cat !== 'All');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Browse by <span className="text-electric-blue text-glow-cyan">Categories</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Dive deep into specific domains of knowledge.
          </p>
        </div>

        <div className="space-y-20">
          {displayCategories.map((category, index) => {
            const categoryResources = resources.filter(res => res.category === category);
            
            if (categoryResources.length === 0) return null;

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                    <span className="w-4 h-4 rounded-full bg-neon-cyan animate-pulse"></span>
                    {category}
                  </h2>
                  <Link to={`/resources?category=${category}`} className="text-neon-cyan hover:text-purple-glow transition-colors text-sm font-medium">
                    View All →
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryResources.slice(0, 3).map((resource, idx) => (
                    <ResourceCard key={resource.id} resource={resource} index={idx} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;
