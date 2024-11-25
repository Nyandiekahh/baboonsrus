// components/UI/Common/ShareButtons.jsx
import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const ShareButtons = () => (
  <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-4">
    {[
      { Icon: Twitter, label: 'Share on Twitter' },
      { Icon: Linkedin, label: 'Share on LinkedIn' },
      { Icon: Mail, label: 'Share via Email' }
    ].map(({ Icon, label }) => (
      <button
        key={label}
        className="group relative p-2 bg-white rounded-full shadow-lg hover:bg-green-50 transition-colors"
        aria-label={label}
      >
        <Icon className="w-5 h-5" />
        <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded 
                     opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </span>
      </button>
    ))}
  </div>
);

export default ShareButtons;