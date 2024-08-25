"use client"; // Mark this component as a Client Component

import React from 'react';
import CustomCarousel from '../components/CustomCarousel'; // Adjust the path if necessary

export default function Home() {
  const items = [
    { title: 'Shirou Ogami Savage Ver. 3D Print kit', description: 'Savage Ver. 3D Print kit', price: '$30+', rating: '5.0 (6)', imageSrc: 'https://public-files.gumroad.com/6ks36p1c91akidmh7m5xsutb31ug' },
    { title: 'Another Product', description: 'Description for another product', price: '$99', rating: '4.5 (27)', imageSrc: 'https://public-files.gumroad.com/s19gyyp4iwne6ud976i5lm7ob32e' },
    { title: 'Third Product', description: 'Description for third product', price: '$50', rating: '5.0 (15)', imageSrc: 'https://public-files.gumroad.com/bfdmqjzunwaxct6rfb8aad2o6oes' },
    { title: 'The Light Way to Color: Mastering Color and Light for Story-Driven Art - 8 Week Course', description: 'Description for fourth product', price: '$249', rating: '5.0 (13)', imageSrc: 'https://public-files.gumroad.com/axq97i3lpse7eq803p27f8bld8go' },
    { title: 'Fifth Product', description: 'Description for fifth product', price: '$30+', rating: '5.0 (6)', imageSrc: 'https://example.com/image5.jpg' },
    { title: 'Sixth Product', description: 'Description for sixth product', price: '$30+', rating: '5.0 (6)', imageSrc: 'https://example.com/image6.jpg' },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-[#242423]">
      <div className="max-w-5xl w-full items-center justify-center font-mabry text-sm lg:flex">
        <CustomCarousel items={items} />
      </div>
    </div>
  );
}