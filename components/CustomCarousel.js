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
          <button onClick={prevSlide} className="bg-transparent border-none text-2xl cursor-pointer"> 
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iLTIgLTIgMjggMjgiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Im02Ljg4NiAyMC4yMyAyLjc0OS0uNjJjLS4xNDgtMS40NzktLjY4LTIuODEtMS41NjctNC4wMjEtLjkxNi0xLjIxMi0xLjk1MS0xLjk4MS0zLjEzNC0yLjMzNkgyMy41di0yLjMwNkg0LjkzNGMxLjE4My0uMzU0IDIuMjE4LTEuMTIzIDMuMTM0LTIuMzA2Ljg4Ny0xLjIxMiAxLjQyLTIuNTQyIDEuNTY3LTQuMDVMNi44ODUgNEM2LjY4IDguMTY4IDQuMTk2IDEwLjYyMi41IDEwLjk0N3YyLjMwNmMzLjY5NS4zMjUgNi4xNzkgMi44MDkgNi4zODYgNi45NzciLz48L3N2Zz4=" alt="Previous" className="w-6 h-6" style={{ filter: 'invert(100%) brightness(100%)' }} />
          </button> 
          <span className="mx-2 text-[#DDDDDD]">{currentIndex + 1}/{items.length} items</span> {/* Changed text color to #DDDDDD */}
          <button onClick={nextSlide} className="bg-transparent border-none text-2xl cursor-pointer"> 
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iLTIgLTIgMjggMjgiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Im0xNy4xMTQgMjAuMjMtMi43NDktLjYyYy4xNDgtMS40NzkuNjgtMi44MSAxLjU2Ny00LjAyMS45MTYtMS4yMTIgMS45NTEtMS45ODEgMy4xMzQtMi4zMzZILjV2LTIuMzA2aDE4LjU2NmMtMS4xODMtLjM1NC0yLjIxOC0xLjEyMy0zLjEzNC0yLjMwNi0uODg3LTEuMjEyLTEuNDItMi41NDItMS41NjctNC4wNUwxNy4xMTUgNGMuMjA2IDQuMTY4IDIuNjkgNi42MjIgNi4zODUgNi45NDd2Mi4zMDZjLTMuNjk1LjMyNS02LjE3OSAyLjgwOS02LjM4NiA2Ljk3NyIvPjwvc3ZnPg==" alt="Next" className="w-6 h-6" style={{ filter: 'invert(100%) brightness(100%)' }} />
          </button> 
        </div>
      </div>
      <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
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