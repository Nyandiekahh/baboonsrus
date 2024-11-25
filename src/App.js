import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Preloader from './components/Layout/Preloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual data/assets to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show preloader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className={`min-h-screen bg-white ${isLoading ? 'hidden' : ''}`}>
        <HomePage />
      </div>
    </>
  );
};

export default App;