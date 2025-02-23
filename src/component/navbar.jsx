import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about-us' },
    { name: 'Product', target: 'products' },
    { name: 'Contact', target: 'contact-us' },
  ];

  // Function to handle scroll to section
  const handleScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'smooth',
      });
      setActiveSection(target);
      setIsOpen(false);
    }
  };

  // Function to track scroll position and update active link
  const handleScrollPosition = () => {
    navLinks.forEach((link) => {
      const section = document.getElementById(link.target);
      if (section) {
        const sectionTop = section.offsetTop - 65;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(link.target);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPosition);
    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-white shadow-md z-10 font-montserrat font-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            Automated Irrigation
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.target)}
                  className={`cursor-pointer hover:text-primary pb-1 ${
                    activeSection === link.target
                      ? 'text-primary border-b-2 border-pritext-primary'
                      : ''
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <AiOutlineClose className="w-6 h-6 text-gray-800" />
              ) : (
                <AiOutlineMenu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.target)}
                  className={`block w-full text-left hover:text-primary pb-1 ${
                    activeSection === link.target
                      ? 'text-primary border-b-2 border-pritext-primary'
                      : ''
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
