// components/Research/ResearchTabs.jsx
import React from 'react';
import { Tabs, TabsTrigger, TabsContent } from '../UI/Tabs';
import { DNAAnalysisTab } from './DNAAnalysisTab';
import { BehavioralStudiesTab } from './BehavioralStudiesTab';
import { EvolutionaryImpactTab } from './EvolutionaryImpactTab';

const ResearchTabs = ({ dnaData, selectedDnaSegment, setSelectedDnaSegment }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Tabs defaultValue="dna" className="w-full">
          <TabsTrigger value="dna">DNA Analysis</TabsTrigger>
          <TabsTrigger value="behavior">Behavioral Studies</TabsTrigger>
          <TabsTrigger value="evolution">Evolutionary Impact</TabsTrigger>

          <TabsContent value="dna">
            <DNAAnalysisTab 
              dnaData={dnaData} 
              selectedDnaSegment={selectedDnaSegment}
              setSelectedDnaSegment={setSelectedDnaSegment}
            />
          </TabsContent>
          <TabsContent value="behavior">
            <BehavioralStudiesTab />
          </TabsContent>
          <TabsContent value="evolution">
            <EvolutionaryImpactTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResearchTabs;