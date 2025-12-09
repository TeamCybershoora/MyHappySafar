'use client';

import React from 'react';
import Image from 'next/image';
import { FaBox, FaHeadphones, FaMapMarkedAlt, FaMoneyBillWave } from 'react-icons/fa';

const Choose = () => {
  const features = [
    {
      icon: <FaBox className="text-white text-xl" />,
      title: "Convenience",
      description: "Plan your entire Rajasthan trip from one platform, saving time and effort. No need to search multiple websites – everything you need is arranged in one place."
    },
    {
      icon: <FaMoneyBillWave className="text-white text-xl" />,
      title: "Best Price Guarantee",
      description: "We partner with trusted hotels, taxi providers, and local operators to offer you the best deals on Rajasthan tour packages, accommodations, and transport services."
    },
    {
      icon: <FaHeadphones className="text-white text-xl" />,
      title: "Customer Support",
      description: "Our dedicated support team is available 24/7 to assist you, ensuring your Rajasthan travel plans run smoothly from booking to journey completion."
    },
    {
      icon: <FaMapMarkedAlt className="text-white text-xl" />,
      title: "Tailored Travel Experiences",
      description: "Whether you're on a family vacation, business trip, honeymoon, or solo adventure, we offer Rajasthan tour options customized to match your interests, comfort, and travel needs."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-slate-900">Us?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden"
            >
              {/* Subtle glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    boxShadow: '0 0 30px 10px rgba(129, 50, 5, 0.3)',
                    zIndex: 0
                }}
                ></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="text-center">
                  <h6 className="text-lg font-semibold mb-2 group-hover:text-slate-900 transition-colors duration-300">
                    {feature.title}
                  </h6>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full opacity-10">
        <div className="relative w-full h-32">
          <Image 
            src="/img/bg/about-bg-stars-bottom.png" 
            alt="Background pattern" 
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 opacity-10">
        <div className="relative w-full h-32">
          <Image 
            src="/img/bg/about-bg-stars-top.png" 
            alt="Background pattern" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;