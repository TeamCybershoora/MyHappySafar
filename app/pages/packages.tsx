'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaCalendarAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaTimes } from 'react-icons/fa';

// Tilt component for hover effect
export const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      className="transition-transform duration-300 ease-out will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {children}
    </div>
  );
};

interface TourPackage {
  id: number;
  image: string;
  duration: string;
  title: string;
  places: string;
}

const Packages = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'NA',
    travelDate: '',
  });

  const tourPackages: TourPackage[] = [
    {
      id: 1,
      image: '/img/tours/rajasthantourpackage.png',
      duration: '7N/8D',
      title: 'Rajasthan Tour Package',
      places: 'Jaipur → Amber Fort, City Palace → Jodhpur → Mehrangarh Fort → Jaisalmer → Gadisar Lake, Sam Sand Dunes → Udaipur → Lake Pichola, Jag Mandir'
    },
    {
      id: 2,
      image: '/img/tours/jaipurtourpackage.png',
      duration: '2N/3D',
      title: 'Jaipur Tour Package',
      places: 'Jaipur → Amber Fort → Nahargarh Fort → City Palace → Hawa Mahal → Jantar Mantar → Albert Hall Museum'
    },
    {
      id: 3,
      image: '/img/tours/goldentrangletoupackage.png',
      duration: '5N/6D',
      title: 'Golden Triangle Tour Package',
      places: 'Delhi → Red Fort, India Gate, Qutub Minar → Agra → Taj Mahal, Agra Fort → Jaipur → Amber Fort, City Palace, Hawa Mahal'
    },
    {
      id: 4,
      image: '/img/tours/complete-rajasthan-tour-package.png',
      duration: '10N/11D',
      title: 'Complete Rajasthan Tour Package',
      places: 'Jaipur → Amber Fort, Hawa Mahal → Bikaner → Junagarh Fort → Jaisalmer → Jaisalmer Fort, Sam Sand Dunes → Jodhpur → Mehrangarh Fort → Mount Abu → Nakki Lake, Dilwara Temple → Udaipur → City Palace, Lake Pichola'
    },
    {
      id: 5,
      image: '/img/tours/jaipur-jodhpur-jaisalmer-tour.png',
      duration: '5N/6D',
      title: 'Jaipur Jodhpur Jaisalmer Tour Package',
      places: 'Jaipur → City Palace, Hawa Mahal, Amber Fort → Jodhpur → Mehrangarh Fort, Jaswant Thada → Jaisalmer → Patwon ki Haveli, Gadisar Lake, Sam Sand Dunes'
    },
    {
      id: 6,
      image: '/img/tours/jaipur-udaipur-tour-package.png',
      duration: '4N/5D',
      title: 'Jaipur Udaipur Tour Package',
      places: 'Jaipur → Amber Fort, City Palace, Hawa Mahal → Udaipur → Fateh Sagar Lake, Saheliyon ki Bari, Lake Pichola'
    },
    {
      id: 7,
      image: '/img/tours/bikaner-jaisalmer-tour-package.png',
      duration: '4N/5D',
      title: 'Bikaner Jaisalmer Tour Package',
      places: 'Bikaner → Junagarh Fort, Karni Mata Temple → Jaisalmer → Patwon ki Haveli, Gadisar Lake, Sam Sand Dunes'
    },
    {
      id: 8,
      image: '/img/tours/jaipur-ranthambore-tour-package.png',
      duration: '2N/3D',
      title: 'Jaipur Ranthambore Tour Package',
      places: 'Jaipur → City Palace, Amber Fort, Hawa Mahal → Ranthambore → Jungle Safari, Ranthambore Fort'
    },
    {
      id: 9,
      image: '/img/tours/golden-triangle-with-udaipur-tour-package.png',
      duration: '6N/7D',
      title: 'Golden Triangle with Udaipur Tour Package',
      places: 'Delhi → Red Fort, Qutub Minar, India Gate → Agra → Taj Mahal, Agra Fort → Jaipur → Amber Fort, Hawa Mahal → Udaipur → City Palace, Lake Pichola'
    },
    {
      id: 10,
      image: '/img/tours/jodhpur- jaisalmer-tour-package.png',
      duration: '4N/5D',
      title: 'Jodhpur – Jaisalmer Tour Package',
      places: 'Jodhpur → Mehrangarh Fort, Jaswant Thada, Mandore Gardens → Jaisalmer → Jaisalmer Fort, Gadisar Lake, Sam Sand Dunes'
    },
    {
      id: 11,
      image: '/img/tours/jaipur –ajmer –pushkar-tour-package.png',
      duration: '3N/4D',
      title: 'Jaipur – Ajmer – Pushkar Tour Package',
      places: 'Jaipur → Amber Fort, Nahargarh, City Palace → Ajmer → Ajmer Sharif Dargah → Pushkar → Brahma Temple, Pushkar Lake'
    },
    {
      id: 12,
      image: '/img/tours/udaipur-mount-abu-tour-package.png',
      duration: '3N/4D',
      title: 'Udaipur Mount Abu Tour Package',
      places: 'Udaipur → City Palace, Jag Mandir, Lake Pichola → Mount Abu → Nakki Lake, Dilwara Temple, Sunset Point'
    },
    {
      id: 13,
      image: '/img/tours/jp-jodh-udai.png',
      duration: '5N/6D',
      title: 'Jaipur Udaipur Jodhpur 05N/06 Days',
      places: 'Udaipur → City Palace, Lake Pichola, Jagdish Temple, Saheliyon ki Bari → Jodhpur → Mehrangarh Fort, Jaswant Thada, Clock Tower Market → Jaisalmer → Patwon ki Haveli, Gadisar Lake, Jaisalmer Fort, Sam Sand Dunes'
    },
    {
      id: 14,
      image: '/img/tours/jaipur-ranthambore-tour.jpg',
      duration: '5N/6D',
      title: 'Jaipur Ranthambore Chittorgarh Udaipur 05N/06 Days',
      places: 'Jaipur → City Palace, Hawa Mahal, Amber Fort, Jantar Mantar → Ranthambore → Jungle Safari, Ranthambore Fort → Chittorgarh → Chittorgarh Fort, Vijay Stambh, Kirti Stambh → Udaipur → City Palace, Lake Pichola, Jagdish Temple, Saheliyon ki Bari'
    },
    {
      id: 15,
      image: '/img/tours/jd-jaisalmer.png',
      duration: '3N/4D',
      title: 'Jodhpur, Jaisalmer 03N/04 Days',
      places: 'Jodhpur → Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace → Jaisalmer → Jaisalmer Fort, Patwon ki Haveli, Gadisar Lake, Sam Sand Dunes'
    }
  ];

  return (
    <>
      <section className="py-16 bg-gray-50" id="tour_list">
        <div className="container mx-auto px-4">
          <div className="section-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-12">
            <div>
              <p className="mb-2 fw-medium d-flex items-center">
                <span className="w-8 h-0.5 bg-slate-900 mr-2"></span>
                Trending Tours
              </p>
              <h2 className="text-3xl font-bold">Our Tour Packages<span className="text-slate-900">.</span></h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tourPackages.map((pkg) => (
              <TiltCard key={pkg.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative h-48">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-slate-900 text-white text-sm px-2 py-1 rounded">
                      {pkg.duration}
                    </span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex items-start">
                      <FaMapMarkerAlt className="mt-1 mr-2 text-slate-900 flex-shrink-0" />
                      <span>{pkg.places}</span>
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-slate-900 font-medium">Price on request</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 px-3 rounded text-sm flex items-center justify-center transition-colors"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            message: `Package enquiry: ${pkg.title}`,
                          }));
                          setShowEnquiryModal(true);
                        }}
                      >
                        <FaCalendarAlt className="mr-2" />
                        Enquire Now
                      </button>
                      <a 
                        href="https://wa.me/917246933288?text=Hello%2C%20I%20am%20interested%20in%20tour%20packages%20from%20RajasthanTourWala.com%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center justify-center transition-colors hover:scale-110"
                      >
                        <FaWhatsapp size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
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
                    const response = await fetch('/api/enquiry', {
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

export default Packages;