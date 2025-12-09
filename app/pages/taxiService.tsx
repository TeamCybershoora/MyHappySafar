'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaTimes } from 'react-icons/fa';

const TaxiService = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'NA',
    travelDate: '',
  });

  const cars = [
    {
      id: 1,
      name: 'Wagon-R/Santro',
      image: '/img/cars/maruti-wagon-r.jpg',
      price: '09',
      seats: '04',
      type: 'Per KM'
    },
    {
      id: 2,
      name: 'Dzire / Etios / Xcent',
      image: '/img/cars/dzire.jpg',
      price: '10',
      seats: '04',
      type: 'Per KM'
    },
    {
      id: 3,
      name: 'Maruti Ertiga',
      image: '/img/cars/new-ertiga.jpg',
      price: '14',
      seats: '06',
      type: 'Per KM'
    },
    {
      id: 4,
      name: 'Toyota Innova',
      image: '/img/cars/Toyota-Innova.jpg',
      price: '16',
      seats: '06',
      type: 'Per KM'
    },
    {
      id: 5,
      name: 'Innova Crysta',
      image: '/img/cars/toyotainnova.jpg',
      price: '18',
      seats: '7+1',
      type: 'Per KM'
    },
    {
      id: 6,
      name: 'Tempo Traveller',
      image: '/img/cars/tempo.png',
      price: '22',
      seats: '22-30',
      type: 'Per KM'
    }
  ];

  return (
    <>
      <section className="py-16 bg-gray-50 relative" id="taxi_service">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/img/bg/hotel-bg-03.svg"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="section-header flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div>
              <p className="mb-2 font-medium flex items-center">
                <span className="w-8 h-0.5 bg-slate-900 mr-2"></span>
                Book Taxi
              </p>
              <h2 className="text-3xl font-bold">
                Book Taxi for Rajasthan Tour 2025
                <span className="text-slate-900">.</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div 
                key={car.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{
                    boxShadow: '0 0 20px 5px rgba(129, 50, 5, 0.2)',
                    pointerEvents: 'none'
                  }}
                ></div>

                <div className="relative h-72 overflow-hidden group">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {car.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Image
                          src="/img/cars/rupees-icon.png"
                          alt="Price"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="font-medium">{car.price} {car.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Image
                          src="/img/cars/seat-icon.png"
                          alt="Seats"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Seats</p>
                        <p className="font-medium">{car.seats}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=9192511 47383"
                      className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm py-2 px-1 sm:px-2 rounded-full flex items-center justify-center transition-colors whitespace-nowrap"
                    >
                      
                      <span >WhatsApp</span>
                    </a>
                    <button 
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm py-2 px-1 sm:px-2 rounded-full flex items-center justify-center transition-colors whitespace-nowrap"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          message: `Taxi enquiry: ${car.name}`,
                        }));
                        setShowEnquiryModal(true);
                      }}
                    >
                      <span >Enquiry</span>
                    </button>
                    <a 
                      href="tel:+9192511 47383"
                      className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm py-2 px-1 sm:px-2 rounded-full flex items-center justify-center transition-colors whitespace-nowrap"
                    >
                      <span >Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showEnquiryModal && (
        <div className="fixed inset-0 flex items-start justify-center z-50 pt-20">
          <div className="w-full max-w-md relative">
            <div className="w-full bg-white p-6 shadow-lg rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  YES, I WANT DETAILS
                </h2>
                <button 
                  onClick={() => setShowEnquiryModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Get a free quote today and you can customize your package!
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  try {
                    const response = await fetch('/enquiry', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(formData),
                    });

                    if (!response.ok) {
                      throw new Error('Failed to submit enquiry');
                    }

                    alert('Enquiry submitted successfully! We will contact you soon.');
                    setShowEnquiryModal(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      message: 'NA',
                      travelDate: '',
                    });
                  } catch (error) {
                    console.error('Error submitting enquiry:', error);
                    alert('There was an error submitting your enquiry. Please try again.');
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                  <input type="hidden" name="message" value={formData.message} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, travelDate: e.target.value }))}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300 text-sm"
                >
                  Enquire Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaxiService;