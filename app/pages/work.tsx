'use client';

import React from 'react';

const Work = () => {
  const steps = [
    {
      number: '01',
      icon: 'ri-building-line',
      title: 'Choose Package',
      description: 'Select your Rajasthan tour package, pick your travel dates, and add services like transport, accommodation, desert camp, or guided tours.'
    },
    {
      number: '02',
      icon: 'ri-calendar-todo-line',
      title: 'Fill in Your Details',
      description: 'Share your personal information and travel preferences to confirm your Rajasthan tour booking.'
    },
    {
      number: '03',
      icon: 'ri-send-plane-line',
      title: 'Receive Confirmation',
      description: 'Get instant confirmation with your booking details via email or SMS, and get ready for your Rajasthan journey!'
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <div className="section-header">
              <div>
                <p className="text-white mb-2 font-medium flex items-center">
                  <span className="w-8 h-0.5 bg-white mr-2"></span>
                  How it Works
                </p>
                <h2 className="text-white text-3xl font-bold leading-tight">
                  Here's a short overview of how our services work
                </h2>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="group">
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                        <small className="text-[#ffd700]">.</small>
                      </span>
                      <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl group-hover:bg-[#ffd700] group-hover:text-slate-900 transition-all duration-300">
                        <i className={step.icon}></i>
                      </span>
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-white mb-2">{step.title}</h5>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;