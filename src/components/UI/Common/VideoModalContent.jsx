// components/UI/Common/VideoModalContent.jsx
import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoModalContent = () => (
  <>
    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <PlayCircle className="w-16 h-16 text-green-800 mx-auto mb-4" />
        <p className="text-gray-600">Video content would be loaded here</p>
      </div>
    </div>
    <div className="mt-4 space-y-4">
      <h4 className="font-medium">Video Highlights</h4>
      <ul className="space-y-2">
        {[
          "DNA Analysis Methodology",
          "Key Research Findings",
          "Implications for Evolution",
          "Future Research Directions"
        ].map((highlight, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1 h-1 bg-green-800 rounded-full" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default VideoModalContent;