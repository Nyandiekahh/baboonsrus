import React, { useState, useEffect, useRef } from 'react';

const Header = ({ setShowCitation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <>
      <header 
        className={`fixed w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-200
          transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Header content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
          }`}>
            {/* Top bar content */}
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

          <div className={`text-center transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-8'
          }`}>
            <h1 
              className={`font-serif font-bold tracking-tight hover:text-green-800 transition-all duration-300 cursor-pointer ${
                isScrolled ? 'text-3xl' : 'text-5xl md:text-7xl'
              }`}
            >
              Baboons R Us
            </h1>
            <p className={`text-gray-600 uppercase tracking-widest transition-all duration-300 ${
              isScrolled ? 'text-xs mt-1' : 'text-sm mt-2'
            }`}>
              Science to understand our origins...
            </p>
          </div>

          <nav className={`flex justify-center border-t border-gray-200 transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}>
            <div className="flex gap-8 text-sm font-medium">
              {['RESEARCH', 'CONSERVATION', 'DISCOVERIES'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
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
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div className={`${isScrolled ? 'h-24' : 'h-48'} transition-all duration-300`} />
    </>
  );
};

export default Header;