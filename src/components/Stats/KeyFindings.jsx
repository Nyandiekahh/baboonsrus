// components/Stats/KeyFindings.jsx
import React from 'react';
import { Scale, Book, Star, Globe } from 'lucide-react';

const KeyFindings = () => {
  const stats = [
    { number: "91%", desc: "DNA Similarity", icon: <Scale />, detail: "Shared genetic material with humans" },
    { number: "50+", desc: "Years Research", icon: <Book />, detail: "Cumulative field studies" },
    { number: "200+", desc: "Publications", icon: <Star />, detail: "Peer-reviewed articles" },
    { number: "1M+", desc: "Network", icon: <Globe />, detail: "Global research community" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="text-center space-y-2 p-6 border-l border-gray-200 first:border-0 group hover:bg-white transition-all rounded-lg cursor-pointer"
            >
              <div className="text-green-800 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="font-serif text-4xl font-bold group-hover:text-green-800 transition-colors">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 uppercase tracking-wider">{stat.desc}</p>
              <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFindings;