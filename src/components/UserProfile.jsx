import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const UserProfile = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Card className="bg-gray-100 shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Avatar className="w-16 h-16 mr-4">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.initials || user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">@{user.username}</p>
              <p className="text-sm text-gray-500">Member since {user.memberSince}</p>
            </div>
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
              <p className="text-sm">{user.quotesPosted} quotes posted</p>
              <Link to={`/user/${user.username}/quotes`} className="text-sm text-blue-500 hover:underline">
                see them
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm">{user.quotesGrabbed} quotes grabbed</p>
              <button className="text-sm text-blue-500 hover:underline">see them</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;