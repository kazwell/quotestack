import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";

const DraggableCards = ({ editMode }) => {
  const [cards, setCards] = useState([
    { id: '1', content: 'Years of therapy can sometimes boil down to "You see that thing you do? What if you just didn\'t"' },
    { id: '2', content: 'I\'ve been guilty of trying to optimize the "right now" to avoid discomfort in the moment...but I need to remember that the future is much longer than the moment I\'m in right now.' },
    { id: '3', content: 'If you\'re doing something bad, it WILL catch up to you. Please, I\'m begging - take each moment seriously. The real struggle is here, now, in these quiet moments.' },
    { id: '4', content: 'Every time you make a choice, it changes a little part of you—the part that makes decisions. Over time, all the choices you make shape who you become.' },
    { id: '5', content: 'Your life is a journey where you gradually turn yourself into either a good person or a bad person...if you keep making bad choices, you become more angry, hateful, and disconnected.' },
    { id: '6', content: 'Separate the urge from the behavior. Learn to delay your response, because the urge will subside.' },
    { id: '7', content: 'In relationships, instead of measuring "how much am I getting", start asking "how much am I giving?"' },
    { id: '8', content: 'Strengthening my self-esteem is an essential first step in improving my relationships.' },
    { id: '9', content: 'Self esteem comes from keeping promises to yourself. If you have a good reputation with yourself, who cares what other people think about you.' },
    { id: '10', content: 'For me to make progress in my life, it\'s essential that I act in a way that doesn\'t cause shame. Don\'t dwell on the past, just think about how I can act better in the moment.' },
    { id: '11', content: 'All the world\'s a stage baby. To become the person you want, mimic your idea of that person. How would Zack, Clayton, or Daniel act?' },
    { id: '12', content: 'Temptation can destroy our values, health, relationships, and careers. We foolishly choose to engage with temptation instead of avoiding it, and then we\'re shocked and distressed when we fail. You don\'t have to test yourself.' },
    { id: '13', content: 'If you find yourself falling into temptations, reflect on what you\'re trying to accomplish. Get clear on that and watch the focus emerge.' },
    { id: '14', content: 'It used to seem so innocent to escape "just this once" but I understand how dangerous the temptation is. Besides, you only build your focus muscle when you resist the urge to escape.' },
    { id: '15', content: 'A bad thing I am capable of - totally imagining a catastrophe. This is what makes Bella\'s silence so devastating. When she doesn\'t say what she\'s thinking or we spend time apart, I can invent a totally false narrative in my head, and it\'s never a positive one.' },
    { id: '16', content: 'A good thing I am capable of - is creating! Other people get stuck not releasing a v1, but I can move past that! I\'m comfortable releasing something to get signal' },
    { id: '17', content: 'Fuck just waiting around to find another PM gig, find a way to make money through weird projects…writing a kids book, making random music, AI games, etc…' },
    { id: '18', content: 'Growth is rarely accompanied by joy and celebration. Discomfort from trying to do hard things that may be out of reach is often a sign that you\'re on the right path.' },
    { id: '19', content: 'There will always be an excuse, there will always be a distraction. It\'s not an option to ignore overcoming them.' },
    { id: '20', content: 'Be mindful of ADHD tendencies to avoid the issues that come with that...forgetfulness, easily distracted, etc...' },
    { id: '21', content: 'If you want the trajectory of your life to change, your amount of responsibility has to change.' },
    { id: '22', content: 'Remember to reach out to people. Even if I crave isolation, it\'s good to connect.' },
    { id: '23', content: 'You are defined by what you do when no one is watching.' },
    { id: '24', content: 'Be aware of how your actions will make you feel. Will they create pride or shame? Then act accordingly. It\'s as simple, and as hard, as that.' },
    { id: '25', content: 'I want to proudly show off my work to my boys.' },
    { id: '26', content: 'Pay attention to what makes you angry. Get clarity on what specifically is making you mad, then ride the "I\'ll show them" anger to take action.' },
    { id: '27', content: 'Feeling bad about doing shitty things doesn\'t make doing them ok.' },
    { id: '28', content: 'Hard work feels shitty, beating yourself up feels shitty. Beating yourself up isn\'t hard work.' },
    { id: '29', content: 'No more hiding, there\'s no point in it. You\'re not fooling anyone and you can\'t receive help while hiding.' },
    { id: '30', content: 'what\'s the thing i\'m thinking but least want to say right now to this person?...they say it. "This is the thing I least want to say, but in the interest of transparency and building trust I owe it to you tell you what I really think"' },
    { id: '31', content: 'Don\'t believe everything you think. Just because a thought pops into your head doesn\'t make it true, or useful. Interrogate your thoughts. Find the ones that serve you, and ditch the rest.' },
    { id: '32', content: 'People by and large become what they think of themselves. Prioritize reflection to take control of this.' },
    { id: '33', content: 'Overthinkers get luckier in life once they notice they didn\'t lack intelligence, but the courage to act. I know deep down that I have good ideas that are wroth putting into action.' },
    { id: '34', content: 'How do you want to feel at the end of today? What do you need to do now, so you can feel this way?' },
    { id: '35', content: 'What is the most impactful thing I can accomplish today? And how can I have the most fun possible while doing it?' },
    { id: '36', content: 'Set expectations, follow through, repeat.' },
  ]);
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