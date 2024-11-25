// components/Research/DNAAnalysisTab.jsx
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Alert } from '../UI/Alert';

export const DNAAnalysisTab = ({ dnaData, selectedDnaSegment, setSelectedDnaSegment }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-serif text-3xl mb-8 text-center">Genetic Comparison Analysis</h3>
      <div className="relative">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart 
            data={dnaData}
            onMouseEnter={(data) => setSelectedDnaSegment(data.activeTooltipIndex)}
            onMouseLeave={() => setSelectedDnaSegment(null)}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                      <p className="font-medium">{payload[0].payload.name}</p>
                      <p className="text-sm text-gray-600">
                        Shared: {payload[0].payload.shared}%
                      </p>
                      <p className="text-sm text-gray-600">
                        Unique: {payload[0].payload.unique}%
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="shared" fill="#065f46" stackId="a" />
            <Bar dataKey="unique" fill="#d1d5db" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
        
        {selectedDnaSegment !== null && (
          <Alert>
            <p className="text-sm text-gray-600">
              {dnaData[selectedDnaSegment].details}
            </p>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default DNAAnalysisTab;