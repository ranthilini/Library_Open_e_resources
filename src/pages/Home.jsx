import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ResourceCard from '../components/ResourceCard';
import { resources } from '../data/resources';

const Home = () => {
  // Get a few featured resources (e.g., first 3)
  const featuredResources = resources.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection />

      {/* Featured Resources Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-neon-cyan text-glow-cyan">Collections</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover top-rated platforms for academic research, open-access books, and scientific journals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/resources">
              <button className="px-8 py-3 rounded-full bg-transparent border-2 border-purple-glow text-white font-semibold hover:bg-purple-glow/20 hover:shadow-[0_0_20px_rgba(176,38,255,0.5)] transition-all duration-300">
                View All Resources
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative z-10 glassmorphism border-y border-white/10 my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Resources', value: '1M+' },
              { label: 'Journals', value: '50K+' },
              { label: 'E-Books', value: '500K+' },
              { label: 'Users', value: '10K+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-neon-cyan text-glow-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 uppercase tracking-wider text-sm font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
