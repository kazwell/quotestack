import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Toolbar from '../components/Toolbar';

const UpdatesPage = () => {
  const updates = [
    { id: 1, type: 'like', user: 'User1', quote: 'Sample quote 1', date: '2023-03-15' },
    { id: 2, type: 'clone', user: 'User2', quote: 'Sample quote 2', date: '2023-03-16' },
    { id: 3, type: 'like', user: 'User3', quote: 'Sample quote 3', date: '2023-03-17' },
  ];

  const getUpdateMessage = (update) => {
    switch (update.type) {
      case 'like':
        return `${update.user} liked your quote: "${update.quote}"`;
      case 'clone':
        return `${update.user} cloned your quote: "${update.quote}"`;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
        </h1>
        <div className="space-y-4 pb-20">
          {updates.map((update) => (
            <Card key={update.id} className="bg-gray-100">
              <CardContent className="p-4">
                <p className="text-sm">{getUpdateMessage(update)}</p>
                <p className="text-xs text-gray-600 mt-1">{update.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Toolbar />
    </div>
  );
};

export default UpdatesPage;