// app/components/CustomCarousel.js
"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Card from './Card'; // Adjust the path if necessary

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-[#DDDDDD]">Recently Viewed</h2> {/* Changed font color to #DDDDDD */}
        <div className="flex items-center">
          <button onClick={prevSlide} className="bg-transparent border-none text-2xl cursor-pointer text-[#DDDDDD]">❮</button> {/* Changed arrow color to #DDDDDD */}
          <span className="mx-2 text-[#DDDDDD]">{currentIndex + 1}/{items.length} items</span> {/* Changed text color to #DDDDDD */}
          <button onClick={nextSlide} className="bg-transparent border-none text-2xl cursor-pointer text-[#DDDDDD]">❯</button> {/* Changed arrow color to #DDDDDD */}
        </div>
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 75}%)` }}>
          {items.map((item, index) => (
            <div className="w-[300px] flex-shrink-0" key={index} style={{ marginRight: '1.5rem' }}> {/* Adjust width for partial visibility and add gap */}
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;