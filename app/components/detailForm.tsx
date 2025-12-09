'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  travelDate: string;
}

const DetailForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: 'Enquiry from Rajasthan Tour Package',
    travelDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic like sending to an API
  };

  return (
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
  );
};

export default DetailForm;