import React from 'react';
import Profile from '../components/Profile';
import { useNavigate } from 'react-router-dom';
import { Edit, RefreshCw, User } from 'lucide-react';

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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-between items-center h-16 px-4">
          <button
            onClick={() => navigate('/')}
            className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
          >
            <Edit className="h-6 w-6 mb-1" />
            <span className="text-xs">Edit</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
          >
            <RefreshCw className="h-6 w-6 mb-1" />
            <span className="text-xs">Review</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
          >
            <User className="h-6 w-6 mb-1" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
