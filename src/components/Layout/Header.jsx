import React, { useState, useEffect, useRef } from 'react';
import { Star, Share2, Bookmark, Info } from 'lucide-react';

const Header = ({ setShowCitation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-40 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div 
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
          }`}
        >
          <div className="py-3 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-mono">VOL. 23</span>
              <span className="font-mono">ISSUE 147</span>
              <span className="font-mono">EST. 2001</span>
            </div>
            <div className="flex items-center gap-6">
              <button 
                className="text-sm font-serif hover:text-green-800 transition-colors"
                onClick={() => setShowCitation(true)}
              >
                Cite This
              </button>
              <button className="text-sm font-serif hover:text-green-800 transition-colors">
                Subscribe
              </button>
              <button className="text-sm font-serif hover:text-green-800 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`text-center transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-8'
        }`}>
          <h1 
            className={`font-serif font-bold tracking-tight hover:text-green-800 transition-all duration-300 cursor-pointer ${
              isScrolled ? 'text-3xl' : 'text-5xl md:text-7xl'
            }`}
          >
            The Primate Review
          </h1>
          <p className={`text-gray-600 uppercase tracking-widest transition-all duration-300 ${
            isScrolled ? 'text-xs mt-1' : 'text-sm mt-2'
          }`}>
            Advancing Our Understanding of Evolution
          </p>
        </div>

        {/* Navigation */}
        <nav className={`flex justify-center border-t border-gray-200 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}>
          <div className="flex gap-8 text-sm font-medium">
            {['RESEARCH', 'CONSERVATION', 'DISCOVERIES', 'ARCHIVES'].map((item) => (
              <a 
                key={item}
                href="#"
                className="hover:text-green-800 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-800 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;