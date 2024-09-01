import React, { useState } from 'react';
import DraggableCards from '../components/DraggableCards';
import Toolbar from '../components/Toolbar';

const Index = () => {
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
        <div className="flex-grow overflow-hidden pb-20">
          <DraggableCards editMode={editMode} />
        </div>
      </div>
      {editMode ? (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <button
            onClick={handleEditClick}
            className="w-full py-4 bg-blue-500 text-white font-semibold"
          >
            Save Changes
          </button>
        </div>
      ) : null}
      <Toolbar />
    </div>
  );
};

export default Index;