// Update the entire travelling.tsx file with this code
'use client';

import { useEffect, useRef, useState } from 'react';

const travelDeals = [
  { id: 1, icon: '🌆', name: 'Jaipur Pink City', duration: '3D/2N', price: '₹7,999', href: '#jaipur' },
  { id: 2, icon: '🏰', name: 'Udaipur + Mount Abu', duration: '4D/3N', price: '₹11,499', href: '#udaipur-abu' },
  { id: 3, icon: '🏜️', name: 'Jaisalmer Desert Safari', duration: '3D/2N', price: '₹9,999', href: '#jaisalmer' },
  { id: 4, icon: '🏯', name: 'Jodhpur Heritage', duration: '2D/1N', price: '₹5,999', href: '#jodhpur' },
  { id: 5, icon: '🐅', name: 'Ranthambore Tiger Safari', duration: '3D/2N', price: '₹10,999', href: '#ranthambore' },
  { id: 6, icon: '🏞️', name: 'Pushkar Getaway', duration: '2D/1N', price: '₹6,499', href: '#pushkar' },
];

export default function Travelling() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // Double the content for seamless looping
      const width = contentRef.current.scrollWidth / 2;
      setContentWidth(width);
    }
  }, []);

  return (
    <section 
      className="bg-slate-900 text-white py-3 px-4 overflow-hidden cursor-pointer"
      data-bs-toggle="modal" 
      data-bs-target="#popupModal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative w-full overflow-hidden">
        <div 
          ref={containerRef}
          className="whitespace-nowrap"
          style={{ 
            animation: isPaused ? 'none' : `marquee ${contentWidth / 50}s linear infinite` 
          }}
        >
          <div 
            ref={contentRef}
            className="inline-block"
          >
            {[...travelDeals, ...travelDeals].map((deal, index) => (
              <span key={`${deal.id}-${index}`} className="inline-flex items-center mx-6">
                <a 
                  href={deal.href} 
                  className="inline-flex items-center hover:text-yellow-200 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="text-lg mr-2">{deal.icon}</span>
                  <span>
                    {deal.name} {deal.duration} — <strong>from {deal.price}</strong> • Book Now →
                  </span>
                </a>
                <span className="mx-4 text-white/50">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}