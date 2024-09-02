import React, { useState, useEffect } from 'react';
import DraggableCards from '../components/DraggableCards';
import Toolbar from '../components/Toolbar';

const Index = ({ editMode: initialEditMode = false }) => {
  const [editMode, setEditMode] = useState(initialEditMode);
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : [
      { id: '1', content: 'Sample card 1' },
      { id: '2', content: 'Sample card 2' },
      { id: '3', content: 'Sample card 3' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleAddCard = () => {
    const newCard = { id: String(Date.now()), content: '' };
    setCards([...cards, newCard]);
  };

  const handleEditCard = (id, newContent) => {
    setCards(cards.map(card => card.id === id ? { ...card, content: newContent } : card));
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
        </h1>
        <div className="flex-grow overflow-hidden pb-20">
          <DraggableCards 
            cards={cards} 
            editMode={editMode} 
            onEditCard={handleEditCard}
            onDeleteCard={handleDeleteCard}
          />
        </div>
      </div>
      {editMode && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <button
            onClick={handleAddCard}
            className="w-full py-4 bg-green-500 text-white font-semibold"
          >
            Add New Card
          </button>
        </div>
      )}
      <Toolbar />
    </div>
  );
};

export default Index;