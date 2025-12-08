// app/pages/about.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaCalendarAlt, FaWhatsapp, FaTimes } from 'react-icons/fa';

import { motion, useAnimation, useInView } from 'framer-motion';

const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'NA',
    travelDate: ''
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const tourPackages = [
    {
      id: 1,
      image: '/img/tours/rajasthantourpackage.png',
      duration: '7N/8D',
      title: 'Rajasthan Tour Package',
      places: 'Jaipur → Amber Fort, City Palace → Jodhpur → Mehrangarh Fort → Jaisalmer → Gadisar Lake, Sam Sand Dunes → Udaipur → Lake Pichola, Jag Mandir'
    },
    // ... add other tour packages
  ];

  return (
    <>
      {/* About Section */}
      <section id="about_us" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Images Grid */}
            <motion.div 
              className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-8"
              initial="hidden"
              animate={controls}
              variants={container}
            >
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                animate={controls}
                variants={container}
              >
                <div className="space-y-4">
                  <motion.div 
                    className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { 
                        scale: 1, 
                        opacity: 1,
                        transition: { duration: 0.5 }
                      }
                    }}
                  >
                    <Image 
                      src="/img/Yamunotri.jpg" 
                      alt="Yamunotri" 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ transform: 'scale(1.1)' }}
                    />
                  </motion.div>
                  <motion.div 
                    className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { 
                        scale: 1, 
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.1 }
                      }
                    }}
                  >
                    <Image 
                      src="/img/Gangotri.jpg" 
                      alt="Gangotri" 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ transform: 'scale(1.1)' }}
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 mt-8">
                  <motion.div 
                    className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { 
                        scale: 1, 
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.2 }
                      }
                    }}
                  >
                    <Image 
                      src="/img/kedarnath.jpg" 
                      alt="Kedarnath" 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ transform: 'scale(1.1)' }}
                    />
                  </motion.div>
                  <motion.div 
                    className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { 
                        scale: 1, 
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.3 }
                      }
                    }}
                  >
                    <Image 
                      src="/img/badrinath.jpg" 
                      alt="Badrinath" 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ transform: 'scale(1.1)' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div 
              className="w-full lg:w-1/2 lg:pl-8"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={container}
            >
              <motion.div className="mb-6" variants={itemVariant}>
                <motion.span 
                  className="text-sm font-medium text-orange-500 flex items-center mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="w-4 h-0.5 bg-orange-500 mr-2"></span>
                  Get to know about Us
                </motion.span>
                <motion.h2 
                  className="text-3xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  About Us
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  We are a passionate travel company specializing in Rajasthan tours, offering unforgettable experiences 
                  across heritage cities, deserts, palaces, and wildlife. With expert guides and curated itineraries, 
                  we ensure every journey reflects Rajasthan's royal charm, culture, and timeless traditions.
                </motion.p>
              </motion.div>

              <motion.div 
                className="space-y-4 border-b border-gray-200 pb-6"
                variants={container}
              >
                {[
                  {
                    icon: '✅',
                    title: 'Authentic Experiences',
                    description: 'Discover true Rajasthan through heritage stays, folk music, desert safaris, and cultural interactions.'
                  },
                  {
                    icon: '🌍',
                    title: 'Expert Guidance',
                    description: 'Our professional guides share deep insights, history, and local knowledge for enriching travel.'
                  },
                  {
                    icon: '✈️',
                    title: 'Personalized Itineraries',
                    description: 'Tailor-made packages designed to match your preferences, budget, and unique travel dreams.'
                  },
                  {
                    icon: '📞',
                    title: '24/7 Support',
                    description: 'Round-the-clock assistance ensures a smooth, safe, and stress-free journey throughout Rajasthan.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    variants={itemVariant}
                  >
                    <span className="text-xl mr-3 mt-1">{item.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-4 mt-6">
                <a 
                  href="tel:+917246933288" 
                  className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaPhoneAlt className="mr-2" />
                  Call Now
                </a>
                <button 
                  className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  onClick={() => setShowEnquiryModal(true)}
                >
                  <FaCalendarAlt className="mr-2" />
                  Enquire Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, travelDate: e.target.value }))}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#813205] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#6a2a04] transition-colors duration-300 text-sm"
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

export default AboutSection;