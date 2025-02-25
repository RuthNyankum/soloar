import React from 'react';
import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/img3.webp';
import img3 from '../../assets/images/img4.webp';
import img4 from '../../assets/images/img2.webp';
import { Link } from 'react-router-dom';
import Contact from '../contact';
import TestimonialSection from './testimonial';

const Product = () => {
  return (
    <div className="bg-white py-16 font-sans scroll-smooth">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Solar-Powered Irrigation Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering farmers with sustainable water access for consistent crop
            production throughout the year
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src={img1}
              alt="Solar panels powering the irrigation system"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src={img2}
              alt="Drip irrigation system in action"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src={img3}
              alt="Flourishing crops using our irrigation system"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Main Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-green-50">
              <img
                src={img4}
                alt="Solar irrigation system in action"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Feature Badges */}
            <div className="absolute -right-4 top-4 space-y-2">
              <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-primary">
                Solar Powered
              </div>
              <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-primary">
                Water Efficient
              </div>
              <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-primary">
                Low Maintenance
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 font-montserrat">
              Advanced Irrigation Technology
            </h3>
            <p className="text-gray-600">
              Our solar-powered irrigation system is designed specifically for
              the needs of farmers in Nkronza South, providing reliable water
              access throughout the year. The system combines sustainable energy
              with efficient water distribution to maximize crop yields and
              minimize resource waste.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    {/* Sun Icon for Solar-Powered */}
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364 6.364l-1.414-1.414M6.343 6.343L4.929 4.929m12.728 0l1.414 1.414M6.343 17.657l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-montserrat">
                    Solar-Powered
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Reduces dependency on erratic electricity and fuel.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    {/* Cog Icon for Automated System */}
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.05 2.927c.3-.453.92-.453 1.22 0l.713 1.082c.2.302.54.493.903.493h1.253c.572 0 1.034.463 1.034 1.034v1.253c0 .364.191.704.493.903l1.082.713c.453.3.453.92 0 1.22l-1.082.713c-.302.2-.493.54-.493.903v1.253c0 .572-.463 1.034-1.034 1.034h-1.253c-.364 0-.704.191-.903.493l-.713 1.082c-.3.453-.92.453-1.22 0l-.713-1.082c-.2-.302-.54-.493-.903-.493h-1.253c-.572 0-1.034-.463-1.034-1.034v-1.253c0-.364-.191-.704-.493-.903l-1.082-.713c-.453-.3-.453-.92 0-1.22l1.082-.713c.302-.2.493-.54.493-.903V6.79c0-.572.463-1.034 1.034-1.034h1.253c.364 0 .704-.191.903-.493l.713-1.082z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-montserrat">
                    Automated System
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Uses sensors to control irrigation, reducing manual labor.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    {/* Dollar Sign Icon for Cost-Effective */}
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V3m0 16v-5"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-montserrat">
                    Cost-Effective
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Affordable for smallholder farmers compared to traditional
                  systems.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    {/* Growth Icon for Scalable */}
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-montserrat">
                    Scalable
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Can be adapted to different farm sizes and crop types.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-green-50 rounded-2xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
            Benefits and Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-gray-900 mb-2 font-montserrat">
                Enhanced Productivity
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Prevents crop failure with consistent irrigation</li>
                <li>
                  Increases yield and profitability for smallholder farmers
                </li>
                <li>Reduces labor intensity and operational costs</li>
              </ul>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-gray-900 mb-2 font-montserrat">
                Smart Automation
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Automated water distribution for precise irrigation</li>
                <li>Minimizes water wastage through smart control systems</li>

                <li>Real-time performance tracking and maintenance alerts</li>
              </ul>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-gray-900 mb-2 font-montserrat">
                Sustainability and Efficiency
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  Eco-friendly and sustainable with solar-powered operation
                </li>
                <li>Maximizes agricultural output efficiently</li>

                <li>Weather-resistant design for long-term durability</li>
                <li>Scalable to different farm sizes and crop types</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing community of farmers benefiting from our
            solar-powered irrigation solution. Get in touch to learn how we can
            help improve your farm's productivity.
          </p>
          <a href="#contact-us">
            <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold">
              Contact Us
            </button>
          </a>

          {/* <Link
            to="/contact-us"
            className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
          >
            Contact Us
          </Link> */}
        </div>
        <TestimonialSection />
      </div>
    </div>
  );
};

export default Product;
