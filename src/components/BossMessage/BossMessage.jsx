import React from 'react';

export const BossMessage = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <h2 className="text-2xl font-serif mb-6">Website Development Proposal</h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Development Options:</h3>
              <ul className="space-y-2 pl-6">
                <li>Custom Programming (Recommended)
                  <ul className="pl-4 text-gray-600">
                    <li>- Highly customizable</li>
                    <li>- Better performance</li>
                    <li>- Complete control over features</li>
                  </ul>
                </li>
                <li>Website Builders (Alternative)
                  <ul className="pl-4 text-gray-600">
                    <li>- WordPress/Wix options available</li>
                    <li>- Simpler management</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Technical Details:</h3>
              <ul className="space-y-2 text-gray-600 pl-6">
                <li>• Hosting: Maintaining IONOS with current domain</li>
                <li>• Instagram Integration: Cloud-based deployment</li>
                <li>• Full deployment and maintenance support</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg">Project Timeline</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>Development: 4-6 weeks</div>
                <div>Content Migration: 2 weeks</div>
                <div>Testing: 2 weeks</div>
                <div>Launch: 1 week</div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-gray-700">
                This proposal maintains current functionality while modernizing the platform. 
                The Instagram integration will be billed based on usage, with flexible pricing 
                to accommodate varying needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};