import React from 'react';
import img1 from '../../assets/images/img1.webp';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary font-sans scroll-smooth">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] h-[120%] bg-green-100 -rotate-3 transform origin-top-left"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight font-montserrat">
                Smart Irrigation for Sustainable Growth
              </h1>
              <p className="text-xl text-gray-600">
                Transforming agriculture with advanced solar-powered irrigation
                systems. Enabling year-round farming and improving lives.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                  Get Started
                </button> */}
                <a href="#about-us">
                  <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={img1}
                  alt="Solar irrigation system in action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-primary">2+</p>
                    <p className="text-sm text-gray-600">Farmers Served</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">85%</p>
                    <p className="text-sm text-gray-600">Yield Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="about-us" className="py-20 bg-white font-sans">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Why Choose Our Solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our innovative solar-powered irrigation system is designed to
              address the unique challenges faced by farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 3a1 1 0 011 1v1a4 4 0 014 4v2a2 2 0 002 2 1 1 0 011 1v4a1 1 0 01-1 1h-5m-4 0H5a1 1 0 01-1-1v-4a1 1 0 011-1 2 2 0 002-2V8a4 4 0 014-4V4a1 1 0 011-1z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                Innovation and Sustainability
              </h3>
              <p className="text-gray-600 font-sans">
                Developing cutting-edge, eco-friendly, and energy-efficient
                agricultural solutions.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-3.86 0-7 2.686-7 6s3.14 6 7 6 7-2.686 7-6-3.14-6-7-6zm-1 9h2v-2h-2v2zm-1-4h4v-2h-4v2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                Affordability and Empowerment
              </h3>
              <p className="text-gray-600 font-sans">
                Ensuring accessibility to smallholder farmers while enhancing
                their productivity and financial security.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m-7 8h6a2 2 0 002-2v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                Reliability
              </h3>
              <p className="text-gray-600 font-sans">
                Offering consistent, easy-to-use irrigation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
