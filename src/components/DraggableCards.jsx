import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Edit, RefreshCw, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";

const initialCards = [
  { id: '1', content: 'Years of therapy cane sometimes boil down to "You see that thing you do? What if you just didn\'t."' },
  { id: '2', content: 'I have been guilty of trying to optimize feeling good "right now" to avoid any discomfort I\'m currently feeling, but remember the future is much longer than the moment you\'re in right now.' },
  { id: '3', content: 'If you\'re doing something bad, it\'s going to catch up to you. Please, take each moment seriously. The real struggle is right here, right now, in these quiet moments.' },
  { id: '4', content: 'In relationships, instead of measuring "how much am I getting", start asking "how much am I giving?"' },
  { id: '5', content: 'Self esteem comes from keeping promises to yourself. If you have a good reputation with yourself, who cares what other people think about you.' },
];

const DraggableCards = () => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : initialCards;
  });
  const [editMode, setEditMode] = useState(false);
  const [newCardId, setNewCardId] = useState(null);
  const newCardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (newCardId && newCardRef.current) {
      newCardRef.current.scrollIntoView({ behavior: 'smooth' });
      newCardRef.current.focus();
    }
  }, [newCardId]);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

  const addCard = () => {
    const newCard = { id: String(cards.length + 1), content: '' };
    setCards([...cards, newCard]);
    setNewCardId(newCard.id);
    setEditMode(true);
  };

  const removeCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const editCard = (id, newContent) => {
    setCards(cards.map(card => card.id === id ? { ...card, content: newContent } : card));
  };

  return (
    <div className="flex flex-col h-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="flex-grow overflow-y-auto pb-20">
              {cards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-3 sm:mb-4 relative bg-gray-100"
                    >
                      <CardContent className="p-3 sm:p-4">
                        {editMode ? (
                          <div className="flex items-center">
                            <Input
                              value={card.content}
                              onChange={(e) => editCard(card.id, e.target.value)}
                              className="flex-grow text-base sm:text-lg font-serif"
                              ref={card.id === newCardId ? newCardRef : null}
                            />
                            <Button 
                              onClick={() => removeCard(card.id)} 
                              variant="destructive" 
                              size="icon"
                              className={cn(
                                "ml-2 rounded-full p-1 w-6 h-6 flex items-center justify-center",
                                "bg-red-500 hover:bg-red-600",
                                "focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                              )}
                            >
                              <X className="h-3 w-3 text-white" />
                            </Button>
                          </div>
                        ) : (
                          <p className="text-base sm:text-lg leading-relaxed font-serif">{card.content}</p>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-between items-center h-16 px-4">
          {editMode ? (
            <>
              <button
                onClick={() => {
                  setEditMode(false);
                  setNewCardId(null);
                }}
                className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                <span>Save</span>
              </button>
              <button
                onClick={addCard}
                className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md"
              >
                <span>Add</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditMode(true)}
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

export default DraggableCards;
