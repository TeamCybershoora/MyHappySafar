'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const FAQ = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: formData.message || 'NA',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      alert('Enquiry submitted successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    }
  };

  return (
    <section className="py-16 bg-white" id="contact_us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-7/12">
            <div className="mb-8 lg:mb-0">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4">Connect with Our Dedicated Support Team</h2>
                <div className="mb-6">
                  <h6 className="text-lg font-semibold mb-3">Our Team is Ready to Help – Your Satisfaction is Our Priority</h6>
                  <p className="text-gray-600">
                    Have a question, need travel advice, or planning your Rajasthan trip? Our expert team is here to assist you at every step. We're just a call or message away!
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaEnvelope className="text-slate-900 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email Address</p>
                      <a href="mailto:thehappysafar@gmail.com" className="text-gray-800 hover:text-slate-900 transition-colors">
                        thehappysafar@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pb-6 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaPhoneAlt className="text-slate-900 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                      <a href="tel:+919251147383" className="text-gray-800 hover:text-slate-900 transition-colors">
                        +91-9251147383
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pb-2">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaMapMarkerAlt className="text-slate-900 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Our Location</p>
                      <p className="text-gray-800">
                        Saraswati Tower, F-30, Sector 2, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-5/12">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-gray-600">How we can help you? Please write down your query</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    required
                  />
                  <input type="hidden" name="message" value="NA" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;