'use client';

import React, { useState } from 'react';
import { FaRoute, FaFileAlt, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa';

const ExpertAgain = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const faqs = [
    {
      question: 'What is the Rajasthan Tour?',
      answer: 'The Rajasthan Tour is a cultural journey across royal cities, desert landscapes, forts, palaces, and lakes, offering travelers heritage, traditions, vibrant festivals, and unforgettable experiences in India\'s majestic desert state.'
    },
    {
      question: 'When does the Rajasthan Tour season begin and end?',
      answer: 'The best Rajasthan tour season begins in October and lasts till March, when the weather is pleasant for sightseeing, desert safaris, and exploring heritage cities.'
    },
    {
      question: 'How can I travel for the Rajasthan Tour?',
      answer: 'You can travel across Rajasthan by taxi, car rentals, trains, or flights. Guided tour packages with transport, accommodation, and sightseeing make the journey hassle-free and comfortable.'
    },
    {
      question: 'Is medical fitness required for the Rajasthan Tour?',
      answer: 'No special medical fitness is required for the Rajasthan Tour, but travelers should be healthy enough for sightseeing, walking, and enjoying desert safaris or cultural activities comfortably.'
    },
    {
      question: 'What is the best time to visit Rajasthan?',
      answer: 'The best time to visit Rajasthan is from October to March, when the weather is pleasant for exploring forts, palaces, lakes, deserts, and vibrant cultural festivals.'
    },
    {
      question: 'How many days are enough to explore Rajasthan?',
      answer: 'A complete Rajasthan tour usually takes 7–10 days, covering Jaipur, Udaipur, Jodhpur, and Jaisalmer. Short trips of 3–5 days cover selected cities or desert experiences.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="faq_s">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Features */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-8">
                Trusted Solution for Your <span className="text-slate-900">Rajasthan Tour</span> Package
              </h2>
              
              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaRoute className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1">GPS Tracked Vehicles</h5>
                      <p className="text-gray-600">Travel safely in vehicles that are always monitored with real-time GPS tracking.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <FaFileAlt className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Professional Drivers</h5>
                      <p className="text-gray-600">Experienced and licensed drivers ensure a safe and comfortable journey.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-teal-600 text-xl" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Route-Friendly Drivers</h5>
                      <p className="text-gray-600">Our drivers are well-versed with every route and local road detail, ensuring a hassle-free journey.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <FaHeadset className="text-teal-600 text-xl" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1">24 Hours Call Support</h5>
                      <p className="text-gray-600">Round-the-clock assistance to resolve all your travel queries anytime.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <div className="mb-8">
                <span className="bg-[#f1e8ff] text-slate-900 text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular FAQ's
                </span>
                <h2 className="text-3xl font-bold mt-2">FAQs for Rajasthan Tour Packages</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className={`w-full px-5 py-4 text-left flex justify-between items-center ${
                        activeAccordion === index ? 'bg-gray-50' : 'bg-white'
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeAccordion === index ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`px-5 pb-4 pt-0 transition-all duration-300 ${
                        activeAccordion === index ? 'block' : 'hidden'
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAgain;