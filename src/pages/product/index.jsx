// import React from 'react';
// import img1 from '../../assets/images/img1.webp';
// import img2 from '../../assets/images/img3.webp';
// import img3 from '../../assets/images/img4.webp';
// import img4 from '../../assets/images/img2.webp';
// import TestimonialSection from './testimonial';

// const Product = () => {
//   return (
//     <div className="bg-white font-sans scroll-smooth">
//       {/* Hero Section */}
//       <div className="w-full bg-green-100 py-16">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
//             Solar-Powered Irrigation Solutions
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Empowering farmers with sustainable water access for consistent crop
//             production throughout the year
//           </p>
//         </div>

//         {/* Image Gallery */}
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
//             <img
//               src={img1}
//               alt="Solar panels powering the irrigation system"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
//             <img
//               src={img2}
//               alt="Drip irrigation system in action"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
//             <img
//               src={img3}
//               alt="Flourishing crops using our irrigation system"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Main Product Display */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="aspect-video rounded-xl overflow-hidden bg-green-50">
//               <img
//                 src={img4}
//                 alt="Solar irrigation system in action"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Feature Badges */}
//             <div className="absolute -right-4 top-4 space-y-2">
//               <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-primary">
//                 Solar Powered
//               </div>
//               <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-primary">
//                 Water Efficient
//               </div>
//               <div className="bg-white px-4 py-2 rounded-l-full shadow-lg text-sm font-medium text-primary">
//                 Low Maintenance
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-gray-900 font-montserrat">
//               Advanced Irrigation Technology
//             </h3>
//             <p className="text-gray-600">
//               Our solar-powered irrigation system is designed specifically for
//               the needs of farmers in Nkronza South, providing reliable water
//               access throughout the year. The system combines sustainable energy
//               with efficient water distribution to maximize crop yields and
//               minimize resource waste.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <TestimonialSection />
//     </div>
//   );
// };

// export default Product;

import React from 'react';
import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/img3.webp';
import img3 from '../../assets/images/img4.webp';
import img4 from '../../assets/images/img2.webp';
import TestimonialSection from './testimonial';
// import backgroundImg from '../../assets/images/img2.webp';
import backgroundImg from '../../assets/images/bg5.jpg';

const Product = () => {
  return (
    <>
      {/* Fixed Background with Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          zIndex: -2,
        }}
      />
      <div className="fixed inset-0 bg-black/50" style={{ zIndex: -1 }} />

      {/* Scrollable Content */}
      <div className="min-h-screen font-sans scroll-smooth">
        {/* Hero Section */}
        <div className="w-full py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
              Solar-Powered Irrigation Solutions
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Empowering farmers with sustainable water access for consistent
              crop production throughout the year.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[img1, img2, img3].map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img
                  src={image}
                  alt="Irrigation system"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Product Display */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border-4 border-white">
                <img
                  src={img4}
                  alt="Solar irrigation system in action"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Feature Badges */}
              <div className="absolute -right-0 top-4 space-y-2">
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
              <h3 className="text-3xl font-bold text-white font-montserrat">
                Advanced Irrigation Technology
              </h3>
              <p className="text-gray-200">
                Our solar-powered irrigation system is designed specifically for
                the needs of farmers in Nkronza South, providing reliable water
                access throughout the year. The system combines sustainable
                energy with efficient water distribution to maximize crop yields
                and minimize resource waste.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialSection />
      </div>
    </>
  );
};

export default Product;
