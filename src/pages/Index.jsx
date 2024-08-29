import React from 'react';
import DraggableCards from '../components/DraggableCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-5xl font-serif mb-8 text-center text-gray-800">(re)mindset</h1>
        <DraggableCards />
      </div>
    </div>
  );
};

export default Index;
