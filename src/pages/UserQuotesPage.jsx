import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import Toolbar from '../components/Toolbar';

const UserQuotesPage = () => {
  const { username } = useParams();

  // Fake data for User1
  const user1Quotes = [
    { id: 1, content: "The only way to do great work is to love what you do.", date: "2023-03-15" },
    { id: 2, content: "Your time is limited, don't waste it living someone else's life.", date: "2023-03-16" },
    { id: 3, content: "Stay hungry, stay foolish.", date: "2023-03-17" },
    { id: 4, content: "Innovation distinguishes between a leader and a follower.", date: "2023-03-18" },
    { id: 5, content: "Have the courage to follow your heart and intuition.", date: "2023-03-19" },
  ];

  const quotes = username === 'User1' ? user1Quotes : [];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">{username}'s</span> <span className="font-bold">Quotes</span>
        </h1>
        <div className="space-y-4 pb-20">
          {quotes.map((quote) => (
            <Card key={quote.id} className="bg-gray-100">
              <CardContent className="p-4">
                <p className="text-lg font-serif mb-2">{quote.content}</p>
                <div className="text-sm text-gray-600">
                  <span>{quote.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Toolbar />
    </div>
  );
};

export default UserQuotesPage;