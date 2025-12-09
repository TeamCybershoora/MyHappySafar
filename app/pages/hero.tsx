// app/pages/hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'NA',
    travelDate: ''
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    { id: 1, image: '/img/slider/3.png', alt: 'Rajasthan Tour 1' },
    { id: 2, image: '/img/slider/4.png', alt: 'Rajasthan Tour 2' },
    { id: 3, image: '/img/slider/5.png', alt: 'Rajasthan Tour 3' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  if (isMobile) {
    return (
      <div className="w-full">
        {/* Carousel Section */}
        <div className="relative w-full h-[30vh] overflow-hidden">
          <div className="relative h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form Section for Mobile */}
        <div className="w-full bg-white p-6 shadow-md">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                YES, I WANT DETAILS
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Get a free quote today and you can customize your package!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
    );
  }

  // Desktop View
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/hotels/slidermain.jpg"
          alt="Rajasthan Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Form Container */}
      <div className="container mx-auto px-4 z-10 flex justify-end">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              YES, I WANT DETAILS
            </h2>
            <p className="text-gray-600 mt-2">
              Get a free quote today and you can customize your package!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="tel"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300 text-sm"
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}