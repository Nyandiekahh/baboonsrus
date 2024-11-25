// components/Research/EvolutionaryImpactTab.jsx
import React from 'react';

export const EvolutionaryImpactTab = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-serif text-3xl mb-8 text-center">Evolutionary Timeline</h3>
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-green-200" />
        <div className="relative flex justify-between">
          {[2020, 2021, 2022, 2023, 2024].map((year, index) => (
            <div key={year} className="relative group">
              <div className="w-4 h-4 bg-green-800 rounded-full relative z-10 
                          group-hover:w-6 group-hover:h-6 group-hover:-translate-x-1 
                          group-hover:-translate-y-1 transition-all cursor-pointer" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="text-sm font-medium">{year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvolutionaryImpactTab;