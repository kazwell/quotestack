import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';

const DraggableCards = () => {
  const [cards, setCards] = useState([
    { id: '1', content: 'Card 1' },
    { id: '2', content: 'Card 2' },
    { id: '3', content: 'Card 3' },
    { id: '4', content: 'Card 4' },
    { id: '5', content: 'Card 5' },
    { id: '6', content: 'Card 6' },
    { id: '7', content: 'Card 7' },
    { id: '8', content: 'Card 8' },
    { id: '9', content: 'Card 9' },
    { id: '10', content: 'Card 10' },
  ]);
  const [editMode, setEditMode] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

  const addCard = () => {
    const newCard = { id: String(cards.length + 1), content: `Card ${cards.length + 1}` };
    setCards([...cards, newCard]);
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
                              className="flex-grow mr-2 text-sm sm:text-base"
                            />
                            <Button 
                              onClick={() => removeCard(card.id)} 
                              variant="ghost" 
                              size="icon"
                              className="absolute top-1 right-1 sm:top-2 sm:right-2"
                            >
                              <X className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base">{card.content}</p>
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
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between">
        <Button onClick={addCard} className="text-sm sm:text-base">Add Card</Button>
        <Button onClick={() => setEditMode(!editMode)} className="text-sm sm:text-base">
          {editMode ? 'Done' : 'Edit'}
        </Button>
      </div>
    </div>
  );
};

export default DraggableCards;
