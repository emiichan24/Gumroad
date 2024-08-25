// components/Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// This is the Card component
const Card = () => {
  return (
    <div className="w-[320px] h-[507px] bg-black border border-[#DDDDDD] border-opacity-35 rounded-[4px] relative transition-all duration-150 ease-out hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] font-mabry">
      {/* Image Section */}
      <div className="product-image relative">
        <img 
          src="https://public-files.gumroad.com/6ks36p1c91akidmh7m5xsutb31ug" // New image source
          alt="Product"
          className="w-full h-[300px] object-cover rounded-t-[4px]" // Keeping the size and fit
        />
        <div className="absolute bottom-0 w-full h-[1px] bg-white"></div>
      </div>
    
      {/* Content Section */}
      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-[#DDDDDD] text-xl font-normal mb-6 tracking-wider">Shirou Ogami Savage Ver. 3D Print kit</h2>
        
        {/* Creator Info */}
        <div className="flex items-center mb-4">
          <img 
            src="https://public-files.gumroad.com/jl59qzeuw2jexicbsueff28sxd83" // New profile image
            alt="Profile"
            className="w-6 h-6 rounded-full mr-2" // Profile image
          />
          <p className="text-[#DDDDDD] text-sm font-light underline">Manuel De Jorge</p>
        </div>
        
        {/* Horizontal Separator Line */}
        <div className="border-t border-[#DDDDDD] border-opacity-35 -mx-4"></div> {/* Negative margins for full width */}

        {/* Bottom Section */}
        <div className="flex items-center">
          {/* Rating Section */}
          <div className="flex-1 pr-1 pt-4 pb-4"> {/* Left Column for Rating with added padding */}
            <span className="text-[#DDDDDD] text-sm inline-flex items-center">
              <FontAwesomeIcon icon={faStar} size="1x" style={{ width: '14px', height: '14px', marginRight: '4px' }} />
              5.0 (6)
            </span>
          </div>
          <div className="border-l border-[#DDDDDD] border-opacity-35 h-16 mx-5"></div> {/* Vertical Separator with 1px width */}
          {/* Price Section */}
          <div className="flex-0 pr-1"> {/* Left Column for Price */}
            <div className="price-tag relative inline-block text-black text-sm p-2 flex items-center" style={{ backgroundColor: '#ff90e8', clipPath: 'polygon(100% 0, 0 0, 0 0, 0 100%, 100% 100%, 78% 50%)', width: '65px', height: '30px' }}>
              $30+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;