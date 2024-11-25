import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Preloader from './components/Layout/Preloader';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.8s ease-in-out;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Start with preloader
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      // After preloader fades out, fade in the content
      setTimeout(() => {
        setContentVisible(true);
      }, 400); // This delay should be half of the preloader's fade-out duration
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageContainer isVisible={contentVisible}>
        <HomePage />
      </PageContainer>
    </>
  );
};

export default App;