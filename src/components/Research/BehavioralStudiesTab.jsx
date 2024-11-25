// components/Research/BehavioralStudiesTab.jsx
import React from 'react';

export const BehavioralStudiesTab = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-serif text-3xl mb-8 text-center">Behavioral Patterns</h3>
      <div className="grid grid-cols-2 gap-8">
        {[
          { title: "Social Structure", percentage: 85, description: "Hierarchical organization and community dynamics" },
          { title: "Learning Ability", percentage: 78, description: "Problem-solving and adaptive learning capabilities" },
          { title: "Tool Usage", percentage: 72, description: "Object manipulation and tool adaptation skills" },
          { title: "Communication", percentage: 68, description: "Non-verbal signals and social interactions" }
        ].map((item, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all">
            <h4 className="font-medium mb-2">{item.title}</h4>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-green-800 transition-all duration-1000"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-600">{item.description}</p>
              <span className="text-sm font-medium">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehavioralStudiesTab;