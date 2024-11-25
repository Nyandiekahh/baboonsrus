import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  ComposedChart,
  Area,
  AreaChart
} from 'recharts';
import { Alert } from '../UI/Alert'; // Using your existing Alert component
import { Dna, Info, ZoomIn } from 'lucide-react';

export const DNAAnalysisTab = ({ dnaData, selectedDnaSegment, setSelectedDnaSegment }) => {
  const [activeView, setActiveView] = useState('bars'); // 'bars', 'area', 'composed'
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const chartTypes = [
    { id: 'bars', label: 'Bar View', description: 'Compare DNA segments side by side' },
    { id: 'area', label: 'Distribution', description: 'View genetic distribution patterns' },
    { id: 'composed', label: 'Detailed', description: 'See combined metrics and trends' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Dna className="w-4 h-4 text-green-800" />
            <h4 className="font-medium text-green-800">{data.name}</h4>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between gap-4">
              <span className="text-sm text-gray-600">Shared DNA:</span>
              <span className="font-medium">{data.shared}%</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-sm text-gray-600">Unique Markers:</span>
              <span className="font-medium">{data.unique}%</span>
            </div>
            {data.divergence && (
              <div className="flex justify-between gap-4">
                <span className="text-sm text-gray-600">Divergence Time:</span>
                <span className="font-medium">{data.divergence} MYA</span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (activeView) {
      case 'area':
        return (
          <AreaChart data={dnaData}>
            <defs>
              <linearGradient id="sharedColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#065f46" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#065f46" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip content={CustomTooltip} />
            <Area 
              type="monotone" 
              dataKey="shared" 
              fill="url(#sharedColor)" 
              stroke="#065f46"
            />
            <Area 
              type="monotone" 
              dataKey="unique" 
              fill="#d1d5db" 
              stroke="#9ca3af"
            />
          </AreaChart>
        );
      
      case 'composed':
        return (
          <ComposedChart data={dnaData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip content={CustomTooltip} />
            <Bar dataKey="shared" fill="#065f46" />
            <Bar dataKey="unique" fill="#d1d5db" />
            <Line 
              type="monotone" 
              dataKey="divergence" 
              stroke="#b45309" 
              strokeWidth={2}
              dot={{ fill: '#b45309' }}
            />
          </ComposedChart>
        );
      
      default:
        return (
          <BarChart 
            data={dnaData}
            onMouseEnter={(data) => {
              setSelectedDnaSegment(data.activeTooltipIndex);
              setHoveredSegment(data.activeTooltipIndex);
            }}
            onMouseLeave={() => {
              setSelectedDnaSegment(null);
              setHoveredSegment(null);
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip content={CustomTooltip} />
            <Legend />
            <Bar 
              dataKey="shared" 
              fill="#065f46" 
              stackId="a"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="unique" 
              fill="#d1d5db" 
              stackId="a"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h3 className="font-serif text-3xl mb-2">Genetic Comparison Analysis</h3>
        <p className="text-gray-600">Exploring DNA sequence similarities across primate species</p>
      </div>

      {/* Chart Type Selector */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {chartTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveView(type.id)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                activeView === type.id 
                  ? 'bg-green-800 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <ZoomIn className="w-4 h-4" />
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <ResponsiveContainer width="100%" height={500}>
          {renderChart()}
        </ResponsiveContainer>
      </div>

      {/* Details Panel */}
      {(selectedDnaSegment !== null || hoveredSegment !== null) && (
        <Alert>
          <div className="flex items-center gap-2 font-medium">
            <Info className="w-4 h-4" />
            Segment Details
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {dnaData[selectedDnaSegment || hoveredSegment].details}
          </p>
        </Alert>
      )}

      {/* Legend Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gray-50">
          <h4 className="font-medium mb-2">Shared DNA</h4>
          <p className="text-sm text-gray-600">
            Percentage of genetic sequences that are identical between species
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50">
          <h4 className="font-medium mb-2">Unique Markers</h4>
          <p className="text-sm text-gray-600">
            Genetic sequences specific to each species
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50">
          <h4 className="font-medium mb-2">Divergence Time</h4>
          <p className="text-sm text-gray-600">
            Estimated time since species diverged (Million Years Ago)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DNAAnalysisTab;