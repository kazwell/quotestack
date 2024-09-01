import React from 'react';
import Profile from '../components/Profile';
import Toolbar from '../components/Toolbar';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
        </h1>
        <Profile />
      </div>
      <Toolbar />
    </div>
  );
};

export default ProfilePage;