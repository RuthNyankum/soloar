// import React, { useEffect, useRef } from 'react';
// import img1 from '../../assets/images/img1.webp';

// const Home = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-drop');
//           } else {
//             entry.target.classList.remove('animate-drop');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative bg-primary font-sans scroll-smooth">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] h-[120%] bg-green-100 -rotate-3 transform origin-top-left"></div>
//         </div>

//         <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl font-bold text-gray-900 leading-tight font-montserrat">
//                 Smart Irrigation for Sustainable Growth
//               </h1>
//               <p className="text-xl text-gray-600">
//                 Transforming agriculture with advanced solar-powered irrigation
//                 systems. Enabling year-round farming and improving lives.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <a href="#about-us">
//                   <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
//                     Learn More
//                   </button>
//                 </a>
//               </div>

//               {/* <div className="flex flex-wrap gap-4">
//                 <a href="#about-us">
//                   <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold fade-animation">
//                     Learn More
//                   </button>
//                 </a>
//               </div> */}
//             </div>

//             <div className="relative">
//               <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
//                 <img
//                   src={img1}
//                   alt="Solar irrigation system in action"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-3xl font-bold text-primary">2+</p>
//                     <p className="text-sm text-gray-600">Farmers Served</p>
//                   </div>
//                   <div>
//                     <p className="text-3xl font-bold text-primary">85%</p>
//                     <p className="text-sm text-gray-600">Yield Increase</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div id="about-us" className="py-20 bg-white font-sans">
//         <div className="w-full max-w-screen-2xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
//               Why Choose Our Solution?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our innovative solar-powered irrigation system is designed to
//               address the unique challenges faced by farmers.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[...Array(3)].map((_, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 className="bg-green-50 p-6 rounded-xl opacity-0 transform translate-y-4 transition-all duration-700"
//                 style={{ animationDelay: `${index * 0.3}s` }}
//               >
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-primary"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M11 3a1 1 0 011 1v1a4 4 0 014 4v2a2 2 0 002 2 1 1 0 011 1v4a1 1 0 01-1 1h-5m-4 0H5a1 1 0 01-1-1v-4a1 1 0 011-1 2 2 0 002-2V8a4 4 0 014-4V4a1 1 0 011-1z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
//                   {index === 0
//                     ? 'Innovation and Sustainability'
//                     : index === 1
//                     ? 'Affordability and Empowerment'
//                     : 'Reliability'}
//                 </h3>
//                 <p className="text-gray-600 font-sans">
//                   {index === 0
//                     ? 'Developing cutting-edge, eco-friendly, and energy-efficient agricultural solutions.'
//                     : index === 1
//                     ? 'Ensuring accessibility to smallholder farmers while enhancing their productivity and financial security.'
//                     : 'Offering consistent, easy-to-use irrigation solutions.'}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from 'react';
import img1 from '../../assets/images/img1.webp';

const Home = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-drop');
          } else {
            entry.target.classList.remove('animate-drop');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section - Added overflow-hidden to prevent background element from causing scroll */}
      <div className="relative bg-primary font-sans scroll-smooth overflow-hidden">
        {/* Modified container to properly contain the rotated element */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[110%] h-[120%] bg-green-100 -rotate-3 transform origin-top-left"></div>
        </div>

        {/* Added overflow-x-hidden to main container */}
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-20 overflow-x-hidden">
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
                <a href="#about-us">
                  <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                    Learn More
                  </button>
                </a>
              </div>

              {/* <div className="flex flex-wrap gap-4">
                <a href="#about-us">
                  <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold fade-animation">
                    Learn More
                  </button>
                </a>
              </div> */}
            </div>

            {/* Fixed the relative container to properly contain absolute children */}
            <div className="relative py-6 pl-6">
              {' '}
              {/* Added padding instead of negative positioning */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={img1}
                  alt="Solar irrigation system in action"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Changed from negative positioning to positive positioning with transform */}
              <div className="absolute bottom-0 left-0 bg-white p-6 rounded-lg shadow-lg transform translate-y-6 -translate-x-6">
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
      <div id="about-us" className="py-20 bg-white font-sans overflow-hidden">
        <div className="w-full max-w-screen-2xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Why Choose Our Solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our innovative solar-powered irrigation system is designed to
              address the unique challenges faced by farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-green-50 p-6 rounded-xl opacity-0 transform translate-y-4 transition-all duration-700"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
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
                  {index === 0
                    ? 'Innovation and Sustainability'
                    : index === 1
                    ? 'Affordability and Empowerment'
                    : 'Reliability'}
                </h3>
                <p className="text-gray-600 font-sans">
                  {index === 0
                    ? 'Developing cutting-edge, eco-friendly, and energy-efficient agricultural solutions.'
                    : index === 1
                    ? 'Ensuring accessibility to smallholder farmers while enhancing their productivity and financial security.'
                    : 'Offering consistent, easy-to-use irrigation solutions.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
