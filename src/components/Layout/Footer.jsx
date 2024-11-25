import React from 'react';
import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg mb-4">About Baboons R Us</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This Review is a leading scientific journal dedicated to advancing 
              our understanding of primate evolution, behavior, and conservation.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Website supported by African Conservation Centre/Nairobi and African Conservation Fund/U.S.
            </p>
          </div>

          {/* Attribution Section */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-lg mb-4">Attributions</h4>
            <div className="text-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                All artwork donated by{' '}
                <a 
                  href="http://DeborahRossArt.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-800 hover:underline"
                >
                  Deborah Ross
                </a>
                , all rights reserved.
              </p>
              <p>
                Unless otherwise noted, photographs are by Shirley S. Strum, Jennifer Douthwaite, 
                Roseann Hanson, and UNBP, ACC and ACF archives - all rights reserved.
              </p>
              <p className="text-xs">
                No art may be downloaded or linked to. Please contact us if you would like to acquire 
                art for non-profit, scientific, conservation or education purposes.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="md:col-span-4 mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-4">
                {[Twitter, Linkedin, Mail].map((Icon, i) => (
                  <button 
                    key={i}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Powered by</span>
                <a 
                  href="https://github.com/Nyandiekahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-800 hover:underline"
                >
                  Nyandieka
                  <Github className="w-4 h-4" />
                </a>
              </div>
              
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Baboons R Us. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;