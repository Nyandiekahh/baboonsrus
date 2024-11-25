// components/UI/Tabs.jsx
import React, { useState } from 'react';

export const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  const tabs = React.Children.toArray(children).filter(
    child => child.type.name === 'TabsTrigger'
  );
  
  const content = React.Children.toArray(children).filter(
    child => child.type.name === 'TabsContent'
  );

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => 
          React.cloneElement(tab, { 
            isActive: tab.props.value === activeTab,
            onClick: () => setActiveTab(tab.props.value)
          })
        )}
      </div>
      {content.find(content => content.props.value === activeTab)}
    </div>
  );
};

export const TabsTrigger = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-2 rounded-lg transition-colors ${
      isActive ? 'bg-green-800 text-white' : 'hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, value }) => children;
