// components/UI/Common/ReadingProgress.jsx
import React from 'react';

const ReadingProgress = ({ progress }) => (
  <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
    <div className="text-sm font-medium">{Math.round(progress)}%</div>
    <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-green-800 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default ReadingProgress;