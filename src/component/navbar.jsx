import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about-us' },
    { name: 'Product', target: 'products' },
    { name: 'Contact', target: 'contact-us' },
  ];

  const handleScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Adjusting for navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-800">LOGO</div>
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.target)}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
