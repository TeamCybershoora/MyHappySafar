'use client';

import React from 'react';
import Image from 'next/image';
import { TiltCard } from './packages';

interface Destination {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Traveller = () => {
  const destinations: Destination[] = [
    {
      id: 1,
      image: '/img/chardham.jpg',
      title: 'Jaipur (Pink City) – 2N/3D',
      description: 'Discover Jaipur’s majestic forts, royal palaces, colorful bazaars, and vibrant culture'
    },
    {
      id: 2,
      image: '/img/kedar-badrinath.jpg',
      title: 'Udaipur (City of Lakes) – 2N/3D',
      description: 'Experience serene lakes, romantic palaces, and stunning heritage in Udaipur city.'
    },
    {
      id: 3,
      image: '/img/Kedarnath-single.png',
      title: 'Jodhpur (Blue City) – 1N/2D',
      description: 'Explore Mehrangarh Fort, blue houses, and desert charm of Jodhpur.'
    },
    {
      id: 4,
      image: '/img/3-dham.jpg',
      title: 'Jaisalmer (Golden City) – 2N/3D',
      description: 'Witness golden forts, desert dunes, and rich heritage in Jaisalmer'
    },
    {
      id: 5,
      image: '/img/badrinath-1.webp',
      title: 'Pushkar (Holy City) – 1N/2D',
      description: 'Visit sacred Pushkar Lake, holy temples, and vibrant annual camel fair.'
    }
  ];
  return (
    <section className="py-16 bg-gray-50" id="traveller">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <p className="mb-2 font-medium flex items-left justify-left">
            <span className="w-8 h-0.5 bg-slate-900 mr-2"></span>
            Popular Destinations
          </p>
          <h2 className="text-3xl font-bold">Travelers & Preferences<span className="text-slate-900">.</span></h2>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {destinations.map((destination) => (
                <div 
                    key={destination.id} 
                    className={`
                    ${destinations.length % 3 === 2 && 'md:last:col-start-2'}
                    flex justify-center
                    `}
                >
                    <TiltCard>
                   <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden group">
                            <Image
                            src={destination.image}
                            alt={destination.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="mb-3">
                            <h3 className="font-bold text-lg mb-1 text-gray-900">{destination.title}</h3>
                            <p className="text-gray-600 text-sm">{destination.description}</p>
                            </div>
                            <div className="mt-auto">
                            </div>
                        </div>
                    </div>
                    {/* ... rest of the card content remains the same ... */}
                    </TiltCard>
                </div>
                ))}
            </div>
            </div>            
      </div>
    </section>
  );
};

export default Traveller;