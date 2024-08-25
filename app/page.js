import React from 'react';
import Card from '../components/Card'; // Adjust the path if necessary
import './globals.css'; // Adjust the path as necessary

// This is the main function component for the Home page
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#242423]">
      {/* This is the main content area */}
      <div className="max-w-5xl w-full items-center justify-center font-mabry text-sm lg:flex">
        {/* This is the card component */}
        <Card />
      </div>
    </div>
  );
}