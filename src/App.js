import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Preloader from './components/Layout/Preloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setContentVisible(true), 400);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className={`min-h-screen bg-white transition-opacity duration-800 ease-in-out
        ${contentVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <HomePage />
      </div>
    </>
  );
};

export default App;