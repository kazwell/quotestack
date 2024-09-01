import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";

const initialCards = [];

const DraggableCards = ({ editMode }) => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : initialCards;
  });
  const [newCardId, setNewCardId] = useState(null);
  const newCardRef = useRef(null);

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
      {editMode && (
        <div className="fixed bottom-16 right-4">
          <Button
            onClick={addCard}
            className="rounded-full w-12 h-12 bg-green-500 hover:bg-green-600 text-white text-2xl font-bold"
          >
            +
          </Button>
        </div>
      )}
    </div>
  );
};

export default DraggableCards;