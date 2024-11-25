// components/Layout/Footer.jsx
import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-lg mb-4">About The Primate Review</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              The Primate Review is a leading scientific journal dedicated to advancing 
              our understanding of primate evolution, behavior, and conservation.
            </p>
            <div className="flex gap-4 mt-6">
              {[Twitter, Linkedin, Mail].map((Icon, i) => (
                <button 
                  key={i}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;