import React, { useState } from 'react';
import DraggableCards from '../components/DraggableCards';
import Profile from '../components/Profile';

const Index = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-bold">(re)</span><span className="font-normal">mindset</span>
        </h1>
        <Profile />
        <div className="flex-grow overflow-hidden mt-8">
          <DraggableCards onProfileClick={toggleProfile} />
        </div>
      </div>
    </div>
  );
};

export default Index;
