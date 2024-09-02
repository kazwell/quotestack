import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Profile = ({ onBackClick }) => {
  const user = {
    name: "Adam Kazwell",
    username: "@kaz",
    memberSince: "March 2023",
    followers: 73,
    following: 54,
    quotesGrabbed: 15,
    quotesSnagged: 27,
    isFollowing: false,
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Card className="bg-gray-100 shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Avatar className="w-16 h-16 mr-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.username}</p>
              <p className="text-sm text-gray-500">Member since {user.memberSince}</p>
            </div>
            <Button 
              variant={user.isFollowing ? "outline" : "default"}
              className="ml-2"
            >
              {user.isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="font-bold">{user.followers}</p>
              <p className="text-sm text-gray-600">followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{user.following}</p>
              <p className="text-sm text-gray-600">following</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm">{user.quotesGrabbed} quotes grabbed</p>
              <button className="text-sm text-blue-500 hover:underline">see them</button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm">{user.quotesSnagged} quotes snagged</p>
              <button className="text-sm text-blue-500 hover:underline">see them</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;