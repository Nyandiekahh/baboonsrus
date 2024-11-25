import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutProject from '../components/About/AboutProject';
import KeyFindings from '../components/Stats/KeyFindings';
import ResearchTabs from '../components/Research/ResearchTabs';
import LatestDiscoveries from '../components/Discoveries/LatestDiscoveries';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Layout/Footer';
import { Modal, VideoModalContent, CitationModalContent, ReadingProgress, ShareButtons, AutoSaveIndicator } from '../components/UI/Common';
import { useScrollProgress } from '../hooks/useScrollProgress';

// Add this data import
import { dnaData, researchHighlights } from '../data/research-data';

const HomePage = () => {
  // State definitions
  const [showVideo, setShowVideo] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [selectedDnaSegment, setSelectedDnaSegment] = useState(null);
  const [showCitation, setShowCitation] = useState(false);
  const [activeInfoPoint, setActiveInfoPoint] = useState(null);
  const readingProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-green-800 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      <Header setShowCitation={setShowCitation} />
      
      <HeroSection 
        setShowVideo={setShowVideo}
        setShowCitation={setShowCitation}
        activeInfoPoint={activeInfoPoint}
        setActiveInfoPoint={setActiveInfoPoint}
      />

      <AboutProject />

      <KeyFindings />
      
      <ResearchTabs 
        dnaData={dnaData}
        selectedDnaSegment={selectedDnaSegment}
        setSelectedDnaSegment={setSelectedDnaSegment}
      />
      
      <LatestDiscoveries 
        researchHighlights={researchHighlights}
        activeStory={activeStory}
        setActiveStory={setActiveStory}
      />
      
      <Newsletter />
      
      <Footer />

      {/* Modals */}
      <Modal 
        isOpen={showVideo} 
        onClose={() => setShowVideo(false)}
        title="Research Overview"
      >
        <VideoModalContent />
      </Modal>

      <Modal
        isOpen={showCitation}
        onClose={() => setShowCitation(false)}
        title="Citation Information"
      >
        <CitationModalContent />
      </Modal>

      <ReadingProgress progress={readingProgress} />
      
      <ShareButtons />
      
      {readingProgress > 0 && <AutoSaveIndicator />}
    </div>
  );
};

export default HomePage;