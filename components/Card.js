// components/Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// This is the Card component
const Card = ({ title, description, price, rating, imageSrc }) => {
  return (
    <div className="w-full h-[507px] bg-black border border-[#DDDDDD] border-opacity-35 rounded-[4px] relative transition-all duration-150 ease-out hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] font-mabry mb-2.5">
      {/* Image Section */}
      <div className="product-image relative">
        <img 
          src={imageSrc} // Use the imageSrc prop
          alt="Product"
          className="w-full h-[300px] object-cover rounded-t-[4px]"
        />
        <div className="absolute bottom-0 w-full h-[1px] bg-white"></div>
      </div>
    
      {/* Content Section */}
      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-[#DDDDDD] text-xl font-normal mb-2 tracking-wider line-clamp-2"> {/* Added line-clamp for truncation */}
          {title}
        </h2>
        
        {/* Creator Info */}
        <div className="flex items-center mb-4 justify-between"> {/* Spread out title and creator info */}
          <img 
            src="https://public-files.gumroad.com/jl59qzeuw2jexicbsueff28sxd83" // New profile image
            alt="Profile"
            className="w-6 h-6 rounded-full mr-2" // Profile image
          />
          <p className="text-[#DDDDDD] text-sm font-light underline">Manuel De Jorge</p>
        </div>
        
        {/* Horizontal Separator Line */}
        <div className="border-t border-[#DDDDDD] border-opacity-35 -mx-4"></div>
        
        {/* Bottom Section */}
        <div className="flex items-center">
          {/* Rating Section */}
          <div className="flex-1 pr-1 pt-4 pb-4">
            <span className="text-[#DDDDDD] text-sm inline-flex items-center">
              <FontAwesomeIcon icon={faStar} size="1x" style={{ width: '14px', height: '14px', marginRight: '4px' }} />
              {rating}
            </span>
          </div>
          <div className="border-l border-[#DDDDDD] border-opacity-35 h-16 mx-5"></div>
          {/* Price Section */}
          <div className="flex-0 pr-1">
            <div className="price-tag relative inline-block text-black text-sm p-2 flex items-center" style={{ backgroundColor: '#ff90e8', clipPath: 'polygon(100% 0, 0 0, 0 0, 0 100%, 100% 100%, 78% 50%)', width: '65px', height: '30px' }}>
              {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;