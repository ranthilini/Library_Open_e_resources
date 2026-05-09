import React from 'react';
import { Link } from 'react-router-dom';
import { IoLibrary } from 'react-icons/io5';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glassmorphism border-t-0 border-white/10 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <IoLibrary className="text-3xl text-neon-cyan group-hover:text-purple-glow transition-colors duration-300" />
              <span className="font-bold text-lg tracking-wider text-white">
                OPEN <span className="text-neon-cyan">eRESOURCES</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              A futuristic hub for free educational resources, research papers, journals, ebooks, and academic databases. Empowering knowledge access for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-glow-cyan">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-neon-cyan transition-colors">Home</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-neon-cyan transition-colors">All Resources</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-neon-cyan transition-colors">Categories</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-neon-cyan transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-glow-purple">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-xl">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Open eResources Library. All rights reserved.
          </p>
          <div className="text-gray-500 text-xs mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-neon-cyan">Privacy Policy</a>
            <a href="#" className="hover:text-neon-cyan">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
