// import React from 'react';
// import heroBg from '../../assets/images/hero3.jpg';

// const SubHome = () => {
//   return (
//     <div>
//       <img src={heroBg} alt="" />
//     </div>
//   );
// };

// export default SubHome;

import PersonImage from '../../assets/images/hero3.jpg';
import React from 'react';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

const SubHome = () => {
  return (
    <section className="bg-purple-50 pt-32 lg:pt-40 pb-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Develop your skills in a new and unique way
          </h1>
          <p className="text-gray-600 mb-6">
            Explore a transformative approach to skill development on our online
            learning platform. Uncover a new realm of learning experiences and
            elevate your expertise in unique ways.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300">
              Enroll Now
            </button>
            <a
              href="#"
              className="flex items-center text-purple-600 hover:underline"
            >
              <FaInfoCircle className="mr-2" /> What's Etech?
            </a>
          </div>
        </div>

        {/* Right Content with Dashed Circle and Image */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Dashed Circle Background */}
          <div className="relative w-80 h-80 rounded-full border-4 border-dashed border-purple-300 flex justify-center items-center">
            <div className="absolute w-64 h-64 rounded-full bg-purple-100"></div>
          </div>

          {/* Person's Image */}
          <img
            src={PersonImage}
            alt="Person"
            className="absolute w-72 h-auto object-cover rounded-full -top-10"
          />

          {/* Floating Cards */}
          <div className="absolute top-0 left-10 bg-white shadow-lg rounded-lg p-4 w-40">
            <p className="text-purple-600 font-semibold">50+ Online Courses</p>
          </div>
          <div className="absolute top-1/2 right-10 bg-white shadow-lg rounded-lg p-4 w-44">
            <p className="text-purple-600 font-semibold">
              10k+ Online Students
            </p>
            <div className="flex mt-2">
              <img
                src="https://via.placeholder.com/30"
                alt="Student 1"
                className="w-8 h-8 rounded-full border-2 border-white -ml-2"
              />
              <img
                src="https://via.placeholder.com/30"
                alt="Student 2"
                className="w-8 h-8 rounded-full border-2 border-white -ml-2"
              />
              <img
                src="https://via.placeholder.com/30"
                alt="Student 3"
                className="w-8 h-8 rounded-full border-2 border-white -ml-2"
              />
            </div>
          </div>
          <div className="absolute bottom-10 left-20 bg-white shadow-lg rounded-lg p-4 w-48">
            <p className="text-purple-600 font-semibold">UI Design Class</p>
            <p className="text-gray-500 text-sm">Today at 9:00 AM</p>
            <button className="mt-2 text-pink-500 text-sm hover:underline">
              Join now <FaArrowRight className="inline ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHome;
