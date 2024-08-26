"use client"; // Mark this component as a Client Component

import React from 'react';
import CustomCarousel from '../components/CustomCarousel'; // Adjust the path if necessary

export default function Home() {
  const items = [
    { 
      title: 'Master Gorgeous UI Design Course',  
      price: '$99', 
      rating: '4.5 (27)', 
      imageSrc: 'https://public-files.gumroad.com/s19gyyp4iwne6ud976i5lm7ob32e',
      creatorName: 'Pablo Stanley and Team',
      profileImage: 'https://public-files.gumroad.com/cmroxpsyej1so50rf6wk5bzuhxzw'
    },
    { 
      title: 'AI Mockups & Brand Imagery Workshop | The Logo Lassie', 
      price: '$50', 
      rating: '5.0 (15)', 
      imageSrc: 'https://public-files.gumroad.com/bfdmqjzunwaxct6rfb8aad2o6oes',
      creatorName: 'Morgan Hastie',
      profileImage: 'https://public-files.gumroad.com/5agfboarf6aiw9iqq47234hyehw4'
    },
    { 
      title: 'The Light Way to Color: Mastering Color and Light for Story-Driven Art - 8 Week Course', 
      price: '$249', 
      rating: '5.0 (13)', 
      imageSrc: 'https://public-files.gumroad.com/axq97i3lpse7eq803p27f8bld8go',
      creatorName: 'Misha Oplev',
      profileImage: 'https://public-files.gumroad.com/cfliu1b97ymkzqktnoo1m4oyoyib'
    },
    { 
      title: 'The Gouache MaxPack v2 - Brushes for Procreate', 
      price: '$20', 
      rating: '4.9 (371)', 
      imageSrc: 'https://public-files.gumroad.com/ois3pakzo4aywhxycysjql1xye6s',
      creatorName: 'MaxPacks - Brushes for Procreate',
      profileImage: 'https://public-files.gumroad.com/886adm11115xtazz43gujzrst1jw'
    },
    { 
      title: 'Toy Faces 3D Avatar Library by Amrit Pal Singh', 
      price: '$70', 
      rating: '5.0 (125)', 
      imageSrc: 'https://public-files.gumroad.com/2q337orckvasimnpelz8akhuwn38',
      creatorName: 'Amrit Pal Singh',
      profileImage: 'https://public-files.gumroad.com/xorttvwuneulqbwku9a5jww9315s'
    },
    { 
      title: 'Shirou Ogami Savage Ver. 3D Print kit', 
      price: '$30+', 
      rating: '5.0 (6)', 
      imageSrc: 'https://public-files.gumroad.com/6ks36p1c91akidmh7m5xsutb31ug',
      creatorName: 'Manuel De Jorge',
      profileImage: 'https://public-files.gumroad.com/jl59qzeuw2jexicbsueff28sxd83'
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-[#242423]">
      <div className="max-w-5xl w-full items-center justify-center font-mabry text-sm lg:flex">
        <CustomCarousel items={items} />
      </div>
    </div>
  );
}