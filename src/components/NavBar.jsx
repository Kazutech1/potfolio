import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-red-900/20 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-red-600 text-3xl font-bold uppercase">
          Kaztech
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-red-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-y-4 lg:space-y-0 lg:space-x-6 text-white font-mono lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-red-900/80 lg:bg-transparent p-6 lg:p-0`}
        >
            <div className='flex flex-col justify-center space-y-6'>
          <a href="#home" className="hover:text-red-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-red-500 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-red-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-red-500 transition-colors">
            Contact
          </a>
        </div>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
