import React, { useState } from 'react';
import Profile from '../components/Profile';
import Toolbar from '../components/Toolbar';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("quotes");

  const quotes = [
    { id: 1, content: "Sample quote 1", date: "2023-03-15" },
    { id: 2, content: "Sample quote 2", date: "2023-03-16" },
    { id: 3, content: "Sample quote 3", date: "2023-03-17" },
  ];

  const followers = [
    { id: 1, name: "User1", username: "@user1" },
    { id: 2, name: "User2", username: "@user2" },
    { id: 3, name: "User3", username: "@user3" },
  ];

  const following = [
    { id: 1, name: "User4", username: "@user4" },
    { id: 2, name: "User5", username: "@user5" },
    { id: 3, name: "User6", username: "@user6" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
          <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
        </h1>
        <Profile />
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="followers">Followers</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
          <TabsContent value="quotes" className="mt-4">
            <div className="space-y-4">
              {quotes.map((quote) => (
                <Card key={quote.id} className="bg-gray-100">
                  <CardContent className="p-4">
                    <p className="text-lg font-serif mb-2">{quote.content}</p>
                    <p className="text-sm text-gray-600">{quote.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="followers" className="mt-4">
            <div className="space-y-4">
              {followers.map((follower) => (
                <Card key={follower.id} className="bg-gray-100">
                  <CardContent className="p-4 flex items-center">
                    <Avatar className="w-10 h-10 mr-4">
                      <AvatarFallback>{follower.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{follower.name}</p>
                      <p className="text-sm text-gray-600">{follower.username}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="following" className="mt-4">
            <div className="space-y-4">
              {following.map((follow) => (
                <Card key={follow.id} className="bg-gray-100">
                  <CardContent className="p-4 flex items-center">
                    <Avatar className="w-10 h-10 mr-4">
                      <AvatarFallback>{follow.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{follow.name}</p>
                      <p className="text-sm text-gray-600">{follow.username}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Toolbar />
    </div>
  );
};

export default ProfilePage;