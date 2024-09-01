import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Toolbar from '../components/Toolbar';

const FeedPage = () => {
  const feedItems = [
    { id: 1, content: "Sample quote 1", author: "User1", date: "2023-03-15" },
    { id: 2, content: "Sample quote 2", author: "User2", date: "2023-03-16" },
    { id: 3, content: "Sample quote 3", author: "User3", date: "2023-03-17" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
        </h1>
        <div className="space-y-4 pb-20">
          {feedItems.map((item) => (
            <Card key={item.id} className="bg-gray-100">
              <CardContent className="p-4">
                <p className="text-lg font-serif mb-2">{item.content}</p>
                <div className="text-sm text-gray-600">
                  <span>{item.author}</span> • <span>{item.date}</span>
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

export default FeedPage;