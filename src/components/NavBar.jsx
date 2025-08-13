import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-red-900/20 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
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

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-white font-mono lg:items-center">
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

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="lg:hidden flex flex-col space-y-4 text-white font-mono absolute top-full left-0 w-full bg-red-900/80 p-6">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
