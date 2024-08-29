import React from 'react';
import DraggableCards from '../components/DraggableCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container mx-auto py-8 flex-grow flex flex-col">
        <h1 className="text-5xl font-serif mb-8 text-center text-gray-800">(re)mindset</h1>
        <div className="flex-grow overflow-hidden">
          <DraggableCards />
        </div>
      </div>
    </div>
  );
};

export default Index;
