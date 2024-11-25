// components/UI/Common/CitationModalContent.jsx
import React from 'react';
import { Download, Copy } from 'lucide-react';

const CitationModalContent = () => {
  const generateCitation = () => {
    const today = new Date().toLocaleDateString();
    return `Chen, S. et al. (2024). Groundbreaking Study Reveals 91% DNA Similarity Between Humans and Baboons. The Primate Review, 23(147). Retrieved ${today}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCitation());
  };

  const handleDownload = () => {
    // Add download functionality
    console.log('Downloading citation...');
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm font-mono break-all">{generateCitation()}</p>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium">Citation Formats</h4>
        <div className="flex gap-4">
          {[
            { label: 'APA', active: true },
            { label: 'MLA', active: false },
            { label: 'Chicago', active: false },
            { label: 'Harvard', active: false }
          ].map((format) => (
            <button
              key={format.label}
              className={`px-3 py-1 rounded text-sm ${
                format.active 
                  ? 'bg-green-800 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {format.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t border-gray-200">
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-800"
        >
          <Download className="w-4 h-4" />
          Download Citation
        </button>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-800"
        >
          <Copy className="w-4 h-4" />
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default CitationModalContent;