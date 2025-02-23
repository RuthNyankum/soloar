import React from 'react';

const Product = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
              src="/api/placeholder/400/300"
              alt="Solar panels powering the irrigation system"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/400/300"
              alt="Drip irrigation system in action"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/400/300"
              alt="Flourishing crops using our irrigation system"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Rest of the component remains exactly the same */}
        {/* Main Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-green-50">
              <img
                src="/api/placeholder/600/400"
                alt="Solar irrigation system in action"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Feature Badges */}
            <div className="absolute -right-4 top-4 space-y-2">
              <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-green-600">
                Solar Powered
              </div>
              <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-green-600">
                Water Efficient
              </div>
              <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-green-600">
                Low Maintenance
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
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
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Year-Round Farming
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Consistent water supply enables farming regardless of seasonal
                  rainfall patterns
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
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
                  <h4 className="font-semibold text-gray-900">
                    Improved Yields
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Optimized water distribution leads to better crop growth and
                  higher yields
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Income Stability
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Consistent production leads to stable income throughout the
                  year
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Climate Resilient
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Reduces vulnerability to climate change and weather variations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-green-50 rounded-2xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            System Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Solar Components
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>High-efficiency solar panels</li>
                <li>Battery storage system</li>
                <li>Smart charge controller</li>
                <li>Weather-resistant housing</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Irrigation System
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Water-efficient drip lines</li>
                <li>Smart distribution control</li>
                <li>Pressure regulation</li>
                <li>Filtration system</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Soil moisture sensors</li>
                <li>Water flow meters</li>
                <li>System performance tracking</li>
                <li>Maintenance alerts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing community of farmers benefiting from our
            solar-powered irrigation solution. Get in touch to learn how we can
            help improve your farm's productivity.
          </p>
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
