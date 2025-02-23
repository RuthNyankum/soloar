import React from 'react';

const ProjectSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
      {/* Image Section */}
      <div className="relative w-full max-w-lg mx-auto md:max-w-none">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="/api/placeholder/600/600"
            alt="Solar-powered irrigation system"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative elements - hidden on mobile */}
        <div className="hidden md:block absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-lg -z-10"></div>
        <div className="hidden md:block absolute -top-6 -left-6 w-48 h-48 border-2 border-green-500 rounded-lg -z-10"></div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Transforming Agriculture
          </h2>
          <div className="h-1 w-24 bg-green-500"></div>
        </div>

        <div className="space-y-4 text-gray-600">
          <p className="text-sm md:text-base">
            From the heart of Nkronza South in Ghana's Bono East Region, we're
            revolutionizing agricultural practices through innovative
            solar-powered irrigation solutions. Our mission is to empower
            farmers with reliable water access, enabling sustainable year-round
            farming regardless of rainfall patterns.
          </p>

          <p className="text-sm md:text-base">
            Our system harnesses solar energy to provide consistent water
            supply, directly addressing one of the most critical challenges
            facing local farmers. This technology not only improves crop yields
            but also strengthens community resilience against climate change
            impacts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900">Our Vision</h3>
              <p className="text-sm mt-2">
                To create a future where every farmer has access to reliable,
                sustainable irrigation solutions.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900">Our Impact</h3>
              <p className="text-sm mt-2">
                Enabling year-round farming, improving yields, and ensuring
                stable income for farming communities.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  ></path>
                </svg>
              </div>
              <span className="text-sm">Solar-Powered Technology</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <span className="text-sm">Efficient Water Distribution</span>
            </div>
          </div>
        </div>

        <button className="w-full sm:w-auto mt-8 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
          Learn More About Our Impact
        </button>
      </div>
    </div>
  );
};

const InnovatorSection = () => {
  return (
    <div className="bg-green-50 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
      {/* Background decoration - adjusted for mobile */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100 -skew-x-12 transform origin-top-right"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* Image Column */}
        <div className="md:col-span-1">
          <div className="relative max-w-[200px] md:max-w-none mx-auto">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/api/placeholder/400/400"
                alt="John Doe - Lead Innovator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-0 bg-green-500 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold">
              Lead Innovator
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              John Doe
            </h2>
            <p className="text-green-600 font-semibold text-sm md:text-base">
              Agricultural Innovation Specialist
            </p>
          </div>

          <div className="prose text-gray-600 text-sm md:text-base">
            <p>
              As the founder and lead innovator, John Doe brings over 15 years
              of experience in sustainable agriculture and renewable energy
              solutions. His vision for combining solar technology with
              traditional farming practices has transformed the agricultural
              landscape in Ghana.
            </p>
            <p>
              Having grown up in a farming community, John understands the
              challenges faced by local farmers firsthand. His innovative
              approach to sustainable farming has earned recognition from
              various international organizations.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  Innovation Award
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                Recipient of the 2023 Innovation in Agriculture Award
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  Featured In
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                National Geographic Spotlight on Agricultural Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <ProjectSection />
        <InnovatorSection />
      </div>
    </div>
  );
};

export default About;
