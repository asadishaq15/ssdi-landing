// src/components/Navbar.tsx
import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar: React.FC = () => {
  return (
<nav className="bg-white shadow-md h-16 flex items-center">

<div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <img
  src={Logo}
  alt="Citizens Disability Logo"
  className="h-full max-h-[62px] w-auto object-contain"
/>




          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;