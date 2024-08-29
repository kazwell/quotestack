import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Edit, RefreshCw, User, Plus, Check } from 'lucide-react';
import { cn } from "@/lib/utils";

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

const DraggableCards = ({ onProfileClick }) => {
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
    const newCard = { id: String(cards.length + 1), content: `New card ${cards.length + 1}` };
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
                              className="flex-grow text-sm sm:text-base"
                            />
                            <Button 
                              onClick={() => removeCard(card.id)} 
                              variant="destructive" 
                              size="icon"
                              className={cn(
                                "ml-2 rounded-full p-1",
                                "bg-red-500 hover:bg-red-600",
                                "focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                              )}
                            >
                              <X className="h-4 w-4 text-white" />
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
      {editMode && (
        <Button onClick={addCard} className="fixed bottom-20 right-4 rounded-full">
          <Plus className="h-6 w-6" />
        </Button>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {editMode ? (
            <button
              onClick={() => setEditMode(false)}
              className="flex flex-col items-center justify-center w-full h-full text-blue-500"
            >
              <Check className="h-6 w-6 mb-1" />
              <span className="text-xs">Done</span>
            </button>
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
                className="flex flex-col items-center justify-center w-1/3 h-full text-gray-500"
              >
                <RefreshCw className="h-6 w-6 mb-1" />
                <span className="text-xs">Review</span>
              </button>
              <button
                onClick={onProfileClick}
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
