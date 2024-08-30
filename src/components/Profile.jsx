import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = ({ onBackClick }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <Card>
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl font-bold">Adam Kazwell</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-gray-600">@kaz</p>
            <p className="mt-2 text-sm text-gray-500">Member since: August 2024</p>
            <div className="flex justify-center mt-4 space-x-4">
              <p className="text-sm text-gray-600"><span className="font-bold">73</span> followers</p>
              <p className="text-sm text-gray-600"><span className="font-bold">54</span> following</p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <p className="text-sm text-gray-600"><span className="font-bold">15</span> quotes grabbed</p>
              <p className="text-sm text-gray-600"><span className="font-bold">27</span> quotes snagged</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <button
        onClick={onBackClick}
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Back to Cards
      </button>
    </div>
  );
};

export default Profile;
