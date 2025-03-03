import React, { useEffect, useRef } from 'react';
import img from '../../assets/images/img2.webp';
import img1 from '../../assets/images/img5.webp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectSection = () => {
  // Using framer-motion's useInView hook for triggering animations
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const controls = useAnimation();

  // Effect to trigger animation when section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 font-sans w-full mx-auto">
      {/* Image Section with animation */}
      {/* Fixed: Added position-relative to properly contain absolute elements */}
      <div className="relative">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src={img}
            alt="Solar-powered irrigation system"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Fixed: Changed negative positioning to positive with transform */}
        <div className="hidden md:block absolute bottom-0 right-0 w-48 h-48 bg-green-100 rounded-lg -z-10 transform translate-y-6 translate-x-6"></div>
        <div className="hidden md:block absolute top-0 left-0 w-48 h-48 border-2 border-green-500 rounded-lg -z-10 transform -translate-y-6 -translate-x-6"></div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-montserrat">
            Transforming Agriculture
          </h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>

        <div className="space-y-4 text-gray-600">
          <p className="text-sm md:text-base">
            An automated solar-powered irrigation system designed to provide
            smallholder farmers with a reliable and cost-effective water supply
            solution. The system regulates water usage based on soil moisture
            levels, reducing water wastage and optimizing crop hydration.
          </p>

          <p className="text-sm md:text-base">
            To provide smallholder farmers with affordable, reliable and
            sustainable automated solar powered irrigation system that can boost
            their yeild, prevent crop failure and boost income
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-gray-900 font-montserrat">
                Our Vision
              </h3>
              <p className="text-sm mt-2">
                To revolutionize smallholder farming in Ghana by ensuring
                year-round access to reliable and affordable irrigation
                solutions, increasing agricultural productivity and
                sustainability.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-bold text-gray-900 font-montserrat">
                Our Mission
              </h3>
              <p className="text-sm mt-2">
                To empower smallholder farmers with a cost-effective,
                solar-powered automated irrigation system that enhances yield,
                prevents crop failure, and boosts income while promoting
                environmental sustainability.
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
      </div>
    </div>
  );
};

const InnovatorSection = () => {
  // Track whether the element is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // This allows the animation to trigger multiple times
    threshold: 0.2, // Triggers when 20% of the element is visible
    rootMargin: '-50px', // Slight offset to make animation feel more natural
  });

  const controls = useAnimation();

  // Effect to trigger animation when section is in view
  useEffect(() => {
    if (inView) {
      // Start the animation when in view
      controls.start('visible');
    } else {
      // Reset to hidden when out of view
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation variants for sliding
  const slideVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    // Fixed: Added overflow-hidden to ensure skewed element doesn't cause horizontal scroll
    <div className="bg-green-50 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden font-sans w-full">
      {/* Fixed: Adjusted the skewed background to stay within container */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100 -skew-x-6 transform origin-top-right"></div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* Image Column with animation - Note the ref is here */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideVariants}
          className="md:col-span-1"
        >
          <div className="relative max-w-[200px] md:max-w-none mx-auto">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={img1}
                alt="Richard Ankrah Amponsah - Lead Innovator"
                className="w-full h-full object-cover"
              />
            </div>
            {/* "Lead Innovator" label remains unchanged since it's not causing overflow */}
            <div className="absolute -bottom-4 right-0 bg-primary text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold">
              Lead Innovator
            </div>
          </div>
        </motion.div>

        {/* Content Column (remaining code unchanged) */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-montserrat">
              Richard Ankrah Amponsah
            </h2>
            <p className="text-primary font-semibold text-sm md:text-base">
              Agricultural Innovation Specialist
            </p>
          </div>

          <div className="prose text-gray-600 text-sm md:text-base">
            <p>
              As the founder and lead innovator, Richard Ankrah Amponsah over 5
              years of experience in sustainable agriculture and renewable
              energy solutions. His vision for combining solar technology with
              traditional farming practices has transformed the agricultural
              landscape in Ghana.
            </p>
            <p>
              Having grown up in a farming community, Richard understands the
              challenges faced by local farmers firsthand. His innovative
              approach to sustainable farming has earned recognition from
              various regions in Ghana.
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
                  Community Impact
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                Making a difference by supporting local farmers with innovative
                solutions.
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
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  Future Goals
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600">
                Committed to expanding sustainable agriculture practices
                nationwide.
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
    // Fixed: Added overflow-x-hidden to the main container
    <div className="bg-white py-8 md:py-16 overflow-x-hidden">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-montserrat font-bold text-3xl mb-2">About Us</h1>
        <ProjectSection />
        <InnovatorSection />
      </div>
    </div>
  );
};

export default About;
