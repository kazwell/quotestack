import React from 'react';
import DraggableCards from '../components/DraggableCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">(re)mindset</h1>
        <div className="flex-grow overflow-hidden">
          <DraggableCards />
        </div>
      </div>
    </div>
  );
};

export default Index;
