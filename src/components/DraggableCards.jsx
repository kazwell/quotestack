import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";

const initialCards = [
  { id: '1', content: 'Years of therapy can sometimes boil down to "You see that thing you do? What if you just didn\'t"' },
  { id: '2', content: 'I\'ve been guilty of trying to optimize the "right now" to avoid discomfort in the moment...but I need to remember that the future is much longer than the moment I\'m in right now.' },
  { id: '3', content: 'If you\'re doing something bad, it WILL catch up to you. Please, I\'m begging - take each moment seriously. The real struggle is here, now, in these quiet moments.' },
  { id: '4', content: 'The stories we tell ourselves shape our reality.' },
  { id: '5', content: 'Every setback is an opportunity for growth.' },
  { id: '6', content: 'Embrace discomfort; it\'s where true progress happens.' },
  { id: '7', content: 'Your thoughts are not facts; question them.' },
  { id: '8', content: 'Small consistent actions lead to big changes.' },
  { id: '9', content: 'Gratitude turns what we have into enough.' },
  { id: '10', content: 'You are not your thoughts; you are the observer of your thoughts.' },
  { id: '11', content: 'Failure is not the opposite of success; it\'s part of success.' },
  { id: '12', content: 'Your comfort zone is a beautiful place, but nothing ever grows there.' },
  { id: '13', content: 'What you focus on expands.' },
  { id: '14', content: 'You can\'t control everything, but you can control your response.' },
  { id: '15', content: 'Progress, not perfection.' },
  { id: '16', content: 'Your life is a reflection of your habits.' },
  { id: '17', content: 'Comparison is the thief of joy.' },
  { id: '18', content: 'You are capable of more than you know.' },
  { id: '19', content: 'Your mindset is your superpower.' },
  { id: '20', content: 'Challenges are opportunities in disguise.' },
  { id: '21', content: 'You are not defined by your past.' },
  { id: '22', content: 'Self-awareness is the first step to growth.' },
  { id: '23', content: 'Your potential is limitless.' },
  { id: '24', content: 'Embrace uncertainty; it\'s where possibilities live.' },
  { id: '25', content: 'You are the author of your own story.' },
  { id: '26', content: 'Your attitude determines your direction.' },
  { id: '27', content: 'Every day is a new beginning.' },
  { id: '28', content: 'Your beliefs create your reality.' },
  { id: '29', content: 'Patience is a form of action.' },
  { id: '30', content: 'You are stronger than you think.' },
  { id: '31', content: 'Your perspective is your reality.' },
  { id: '32', content: 'Growth happens outside your comfort zone.' },
  { id: '33', content: 'You are not your emotions; you experience them.' },
  { id: '34', content: 'Your words have power; choose them wisely.' },
  { id: '35', content: 'Consistency is key to transformation.' },
  { id: '36', content: 'You are a work in progress, and that\'s okay.' },
  { id: '37', content: 'Your mindset is the lens through which you see the world.' },
];

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
    const newCard = { id: String(Date.now()), content: '' };
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