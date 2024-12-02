import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutProject from '../components/About/AboutProject';
import KeyFindings from '../components/Stats/KeyFindings';
import { BossMessage } from '../components/BossMessage';
import LatestDiscoveries from '../components/Discoveries/LatestDiscoveries';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Layout/Footer';
import { Modal, VideoModalContent, CitationModalContent, ReadingProgress, AutoSaveIndicator } from '../components/UI/Common';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { researchHighlights } from '../data/research-data';

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [showCitation, setShowCitation] = useState(false);
  const [activeInfoPoint, setActiveInfoPoint] = useState(null);
  const readingProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-white">
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
      
      <BossMessage />

      <KeyFindings />
      
      <LatestDiscoveries 
        researchHighlights={researchHighlights}
        activeStory={activeStory}
        setActiveStory={setActiveStory}
      />
      
      <Newsletter />
      
      <Footer />

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
      
      {readingProgress > 0 && <AutoSaveIndicator />}
    </div>
  );
};

export default HomePage;