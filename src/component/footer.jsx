import React from 'react';
import logo from '../assets/images/logo.png';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-4 font-sans text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <img
              src={logo}
              alt="logo"
              className="w-16 h-auto transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
            />
            <span className="text-xl font-bold text-white font-montserrat">
              AfuomBorga Innovation
            </span>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4 font-montserrat">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4 font-montserrat">
              About Us
            </h4>
            <p className="text-gray-400">
              We are dedicated to delivering the best products and services to
              our clients. Our team is passionate and driven to create
              innovative solutions.
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mt-8 mb-4" />

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href=" https://www.facebook.com/profile.php?id=61574065675462"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@afuomborga?lang=en"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Tiktok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://www.instagram.com/afuomborga/"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            © {currentYear} Automated Irrigation Solution. All rights reserved.
          </p>
          <p className="mt-2">
            Made with ❤️{' '}
            <a
              href="https://github.com/RuthNyankum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Ruth
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
