import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';

const initialCards = [
  { id: '1', content: 'Years of therapy can sometimes boil down to "u see that thing u do? what if u just didn\'t"' },
  { id: '2', content: 'I have been guilty of trying to optimize the "right now" to stop the discomfort I\'m experiencing....but remember the future is muuuch longer than the moment you\'re in now.' },
  { id: '3', content: 'If you\'re doing something bad, it\'s going to catch you. Please, I\'m begging - take each moment seriously. The real struggle is here, now, in these quiet moments. Now it is being decided whether, in your supreme day, you shall fail miserably or gloriously conquer.' },
  { id: '4', content: 'Every time you make a choice, it changes a little part of you—the part that makes decisions. Over time, all the choices you make shape who you become. Your life is like a journey where you gradually turn yourself into either a good person or a bad person....if you keep making bad choices, you become more angry, hateful, and disconnected. This is like becoming a "hellish creature," full of madness, horror, and loneliness.' },
  { id: '5', content: 'Separate the urge from the behavior. Learn to delay your response.' },
  { id: '6', content: 'To become the person you want, mimic your idea of that person. All the world\'s a stage baby, how would Zack and Clayton act?' },
  { id: '7', content: 'In relationships, instead of measuring "how much am I getting", start measuring "how much am I giving?"' },
  { id: '8', content: 'I\'m focused on improving my relationships. Strengthening my self-esteem is an essential first step for that.' },
  { id: '9', content: 'Self esteem comes from keeping promises to yourself. If you have a good reputation with yourself, who cares what other people think about you.' },
  { id: '10', content: 'If you find yourself falling into temptations, reflect on what you\'re trying to accomplish. Get clear on that and watch the focus emerge.' },
];

const DraggableCards = () => {
  const [cards, setCards] = useState(initialCards);
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
                          <p className="text-sm sm:text-base leading-relaxed">{card.content}</p>
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
