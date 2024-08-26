// app/components/CustomCarousel.js
"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Card from './Card'; // Adjust the path if necessary

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 300; // Width of each card
  const totalWidth = items.length * cardWidth; // Total width of all cards

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center mb-4 mt-[10px]">
        <h2 className="text-2xl text-[#DDDDDD]">Recently Viewed</h2>
        <button className="border border-gray-500 text-[#DDDDDD] flex items-center justify-center 
          p-[12px] rounded-[4px] 
          transition-transform duration-150 ease-out 
          hover:shadow-[4px_4px_0px_rgba(221,221,221,1)] 
          hover:transform hover:-translate-x-1 hover:-translate-y-1" 
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: 'full',
            fontSize: '16px',
            lineHeight: '22.4px',
          }}
        >
          View all
        </button>
      </div>
      <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)`, width: `${totalWidth}px` }}>
          {items.map((item, index) => (
            <div className="w-[300px] flex-shrink-0" key={index} style={{ marginRight: index === items.length - 1 ? '0' : '1.5rem' }}>
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;