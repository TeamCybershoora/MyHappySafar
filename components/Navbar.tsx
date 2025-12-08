// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    message: 'I am interested in your tour packages. Please provide me with more details.'
  });

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    
    // Update active section based on scroll position
    const sections = ['home', 'about', 'packages', 'destinations', 'services', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend or email service
    // For now, we'll just log it and close the modal
    console.log('Form submitted:', formData);

    // Example of how you might send it to an API
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'navbar',
        }),
      });

      if (response.ok) {
        alert('Enquiry submitted successfully! We will contact you soon.');
        setShowEnquiryModal(false);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          travelDate: '',
          message: 'I am interested in your tour packages. Please provide me with more details.'
        });
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message ?? 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 bg-[#813205] ${
        isScrolled ? 'top-0' : 'top-8'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="text-xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
              }}
            >
              <Image 
                src="/img/TheHappySafar.png" 
                alt="Rajasthan Tourwala" 
                width={160} 
                height={40}
                className="h-10 w-auto invert"
                priority
              />
            </Link>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex justify-center flex-1">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`${
                      activeSection === link.id 
                        ? 'font-semibold' 
                        : 'opacity-90'
                    } px-2 py-1 transition-all text-white`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Enquire Now Button - Right Side */}
            <div className="hidden md:block">
              <button
                onClick={() => setShowEnquiryModal(true)}
                className="bg-white text-[#813205] px-6 py-2 rounded-full font-medium transition-colors hover:bg-opacity-90"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#813205] focus:border-transparent text-sm"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
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
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Image 
              src="/img/TheHappySafar.png" 
              alt="Rajasthan Tourwala" 
              width={160} 
              height={40}
              className="h-10 w-auto"
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700"
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-lg py-3 px-4 rounded ${
                  activeSection === link.id 
                    ? 'bg-[#813205] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                setShowEnquiryModal(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#813205] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#6a2a04] transition-colors duration-300 text-sm mb-3"
            >
              Enquire Now
            </button>
            <a 
              href="tel:+917246933288" 
              className="flex items-center text-lg py-3 px-4 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FaPhoneAlt className="mr-2" />
              +91-7246933288
            </a>
            <a 
              href="https://wa.me/917246933288" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-lg py-3 px-4 text-gray-700 hover:bg-gray-100 rounded"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;