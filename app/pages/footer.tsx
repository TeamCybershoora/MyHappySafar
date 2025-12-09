'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeadset, FaEnvelope, FaWhatsapp, FaPhone, FaTimes } from 'react-icons/fa';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    setShowModal(false);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="mb-6">
                <div className="w-40 h-16 relative mb-4">
                  <Image 
                    src="/img/theHappySafar.png" 
                    alt="Rajasthan Tour Wala" 
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  We provide the best rajasthan tour packages, accommodation, transportation, safety and reliable support.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-[#813205] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about_us')}
                    className="text-gray-400 hover:text-[#813205] transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('tour_list')}
                    className="text-gray-400 hover:text-[#813205] transition-colors"
                  >
                    Tour List
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('taxi_service')}
                    className="text-gray-400 hover:text-[#813205] transition-colors"
                  >
                    Taxi Service
                  </button>
                </li>
              </ul>
            </div>

            {/* Destinations */}
            <div className="col-span-1">
              <h5 className="text-lg font-semibold mb-4">Destinations</h5>
              <ul className="space-y-2">
                {[
                  'Golden Triangle Tour Package',
                  'Complete Rajasthan Tour Package',
                  'Jaipur Jodhpur Jaisalmer Tour Package',
                  'Udaipur Mount Abu Tour Package',
                  'Golden Triangle with Udaipur tour Package'
                ].map((destination, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setShowModal(true)}
                      className="text-gray-400 hover:text-[#813205] transition-colors text-left"
                    >
                      {destination}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <FaHeadset className="text-[#813205] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Customer Support</p>
                    <a href="tel:+917246933288" className="text-white hover:text-[#813205] transition-colors">
                      +91-7246933288
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <FaEnvelope className="text-[#813205] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Drop Us an Email</p>
                    <a 
                      href="mailto:thehappysafar@gmail.com" 
                      className="text-white hover:text-[#813205] transition-colors"
                    >
                      thehappysafar@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} Rajasthan Tour Wala. All rights reserved.</p>
          </div>
        </div>

        {/* Floating Buttons */}
        <a 
          href="https://wa.me/917246933288?text=Hello%2C%20I%20am%20interested%20in%20tour%20packages%20from%20RajasthanTourWala.com%20and%20would%20like%20to%20know%20more%20about%20your%20services." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition-colors z-50"
        >
          <FaWhatsapp />
        </a>
        <a 
          href="tel:+917246933288"
          className="fixed bottom-24 right-6 bg-[#813205] text-white w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-[#6a2a04] transition-colors z-50"
        >
          <FaPhone />
        </a>
      </footer>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Enquiry Now</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#813205] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#813205] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#813205] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Write a Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#813205] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#813205] hover:bg-[#6a2a04] text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;