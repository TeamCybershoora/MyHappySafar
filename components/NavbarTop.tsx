import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const NavbarTop = () => {
  return (
    <>
      <div className="header-topbar text-center bg-[#1c1c1c] py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-white">
            <p className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 text-white" />
              Call : +91-92511 47383
            </p>
            <p className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-1 text-white" />
              <span className="hidden md:inline">Saraswati Tower, F-30, Sector 2, Central Spine, Vidyadhar Nagar</span>
              <span className="md:hidden">, Jaipur, Rajasthan 302039</span>
            </p>
            <div className="flex items-center">
              <p className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-white" />
                Email : thehappysafar@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header main-header-four">
        {/* Main navigation content will go here */}
      </div>
    </>
  );
};

export default NavbarTop;