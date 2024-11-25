import React from 'react';

const Header = ({ setShowCitation }) => {
  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
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

        {/* Main Header */}
        <div className="py-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight hover:text-green-800 transition-colors cursor-pointer">
            The Primate Review
          </h1>
          <p className="text-sm mt-2 text-gray-600 uppercase tracking-widest">
            Advancing Our Understanding of Evolution
          </p>
        </div>

        {/* Navigation */}
        <nav className="py-4 flex justify-center border-t border-gray-200">
          <div className="flex gap-8 text-sm font-medium">
            {['RESEARCH', 'CONSERVATION', 'DISCOVERIES', 'ARCHIVES'].map((item) => (
              <button 
                key={item}
                className="hover:text-green-800 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-800 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;