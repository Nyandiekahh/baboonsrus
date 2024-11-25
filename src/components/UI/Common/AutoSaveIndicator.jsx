// components/UI/Common/AutoSaveIndicator.jsx
import React from 'react';

const AutoSaveIndicator = () => (
  <div className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg text-sm text-gray-600">
    <span className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      Progress saved
    </span>
  </div>
);

export default AutoSaveIndicator;