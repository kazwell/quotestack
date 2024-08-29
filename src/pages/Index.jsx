import React from 'react';
import DraggableCards from '../components/DraggableCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Draggable Cards</h1>
        <DraggableCards />
      </div>
    </div>
  );
};

export default Index;
