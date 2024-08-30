import React, { useState } from 'react';
import DraggableCards from '../components/DraggableCards';
import Toolbar from '../components/Toolbar';
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
      <Toolbar onEditClick={handleEditClick} editMode={editMode} />
    </div>
  );
};

export default Index;
