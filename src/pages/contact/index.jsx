import React from 'react';

const Contact = () => {
  return (
    <div>
      {' '}
      {/* Contact Info */}
      <div className="text-sm text-gray-400 mb-6 md:mb-0">
        <p className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <span>123 Main St, City, Country</span>
        </p>
        <p className="flex items-center space-x-2 mt-2">
          <FaPhone />
          <span>+123 456 7890</span>
        </p>
        <p className="flex items-center space-x-2 mt-2">
          <FaEnvelope />
          <span>info@example.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
