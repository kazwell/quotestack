import React, { useState } from 'react';
import DraggableCards from '../components/DraggableCards';
import { Edit, RefreshCw, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
        </h1>
        <div className="flex-grow overflow-hidden">
          <DraggableCards editMode={editMode} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-between items-center h-16 px-4">
          {editMode ? (
            <button
              onClick={handleEditClick}
              className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              <span>Save</span>
            </button>
          ) : (
            <>
              <button
                onClick={handleEditClick}
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
                onClick={() => navigate('/profile')}
                className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
              >
                <User className="h-6 w-6 mb-1" />
                <span className="text-xs">Profile</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
