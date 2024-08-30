import React from 'react';
import Profile from '../components/Profile';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
        </h1>
        <Profile onBackClick={handleBackClick} />
      </div>
    </div>
  );
};

export default ProfilePage;