import React from 'react';
import logo from '../assets/images/logo.png';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-4 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Name */}
          <div className="flex items-center gap-1">
            <img
              src={logo}
              alt="logo"
              className="w-16 h-auto transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
            />
            <span className="text-xl font-bold text-white font-montserrat">
              Automated Irrigation
            </span>
          </div>

          {/* Quick Links */}
          <div>
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
                  href="#projects"
                  className="hover:text-white transition duration-300"
                >
                  Projects
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
                  href="#contact-us"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
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
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© {currentYear} Solar. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ Ruth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
