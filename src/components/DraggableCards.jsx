import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="p-4">
      <Button onClick={addCard} className="mb-4">Add Card</Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-4"
                    >
                      <CardContent className="p-4">
                        <Input
                          value={card.content}
                          onChange={(e) => editCard(card.id, e.target.value)}
                          className="mb-2"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => removeCard(card.id)} variant="destructive">Remove</Button>
                      </CardFooter>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DraggableCards;