import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8 text-center text-gray-800">
        <span className="font-normal">(re)</span><span className="font-bold">mindset</span>
      </h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Welcome to your personalized mindset app. Start your journey to a better you.
      </p>
      <Link to="/review">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;