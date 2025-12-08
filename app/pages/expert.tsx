'use client';

import React from 'react';
import Image from 'next/image';

const Expert = () => {
  const services = [
    {
      title: "Trusted Rajasthan Travel Services",
      description: "We offer safe, reliable, and well-organized Rajasthan tours with years of experience.",
      icon: "ri-map-pin-line",
      color: "bg-orange-500"
    },
    {
      title: "Comfortable Accommodation",
      description: "Stay in clean, cozy hotels, heritage havelis, and desert camps for a memorable experience.",
      icon: "ri-hotel-line",
      color: "bg-indigo-500"
    },
    {
      title: "Expert Tour Guidance",
      description: "Our local guides make your journey meaningful by sharing history, culture, and hidden gems of Rajasthan.",
      icon: "ri-guide-line",
      color: "bg-cyan-500"
    },
    {
      title: "Customized Tour Packages",
      description: "From Jaipur, Jodhpur, Udaipur, Jaisalmer to Mount Abu, we provide flexible packages tailored to your needs.",
      icon: "ri-customer-service-line",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="section advantages-sec bg-gray-100 relative py-16" id="about_us">
      {/* Background elements remain the same */}

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 mb-8">
                We are a trusted Rajasthan tour service provider offering well-planned trips, reliable transport, 
                comfortable stays, and expert guidance. Our packages ensure a safe, cultural, and memorable journey 
                across the royal cities and heritage destinations of Rajasthan.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex items-start">
                        <div className={`w-14 h-14 rounded-full ${service.color} bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-100 transition-all duration-300`}>
                          <i className={`${service.icon} text-2xl ${service.color} group-hover:text-white transition-colors`}></i>
                        </div>
                        <div className="ml-4">
                          <h6 className="font-semibold text-lg mb-1 group-hover:text-[#813205] transition-colors">
                            {service.title}
                          </h6>
                          <p className="text-gray-500 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#813205] bg-opacity-5 group-hover:bg-opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
                  </div>
                ))}
              </div>
              
              <button className="relative overflow-hidden group bg-[#813205] hover:bg-[#6a2a04] text-white px-8 py-3 rounded-full flex items-center transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  Book Now
                </span>
                <span className="absolute right-0 w-10 h-10 -mr-1 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                  <i className="ri-arrow-right-line text-white"></i>
                </span>
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="overflow-hidden">
                <Image
                  src="/img/chardham-banner.jpg"
                  alt="Rajasthan Tour"
                  width={600}
                  height={700}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Explore Rajasthan</h3>
                  <p className="text-white text-opacity-80">Discover the land of kings with our expert guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;