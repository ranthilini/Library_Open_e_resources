import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const ResourceCard = ({ resource, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="glassmorphism rounded-2xl overflow-hidden h-full flex flex-col group glassmorphism-hover relative">
        {/* Glow behind image on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/0 to-purple-glow/0 group-hover:from-neon-cyan/10 group-hover:to-purple-glow/10 transition-all duration-500 z-0 pointer-events-none" />
        
        <div className="h-48 overflow-hidden relative z-10">
          <img 
            src={resource.imageUrl} 
            alt={resource.name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
          />
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-deep-space/80 border border-neon-cyan/50 text-neon-cyan backdrop-blur-sm">
              {resource.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow z-10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glow-cyan transition-all">
            {resource.name}
          </h3>
          <p className="text-gray-400 text-sm mb-6 flex-grow">
            {resource.description}
          </p>
          
          <a 
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-neon-cyan/20 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300"
          >
            Visit Resource
            <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
