import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img from '../../assets/images/img5.webp';

const testimonials = [
  // {
  //   name: 'Amara Johnson',
  //   feedback:
  //     'This automated irrigation system has saved me so much time and water! My crops are thriving like never before.',
  //   image:
  //     'https://images.unsplash.com/photo-1502767089025-6572583495f2?crop=faces&fit=crop&w=80&h=80',
  // },
  {
    name: 'Kwame Mensah',
    feedback:
      'I no longer worry about overwatering or underwatering my plants. It’s incredibly efficient and easy to use.',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=80&h=80',
  },
  {
    name: 'Fatima Ali',
    feedback:
      'Affordable and effective. I recommend this system to all small-scale farmers looking for cost-effective solutions.',
    image: img,
  },
  {
    name: 'Ama Pokua',
    feedback:
      'The best investment for my farm! It’s user-friendly and helps me optimize water usage.',
    image:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?crop=faces&fit=crop&w=80&h=80',
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What Our Farmers Say
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          breakpoints={{
            // 1 slide on small screens
            0: {
              slidesPerView: 1,
            },
            // 2 slides on medium and larger screens
            768: {
              slidesPerView: 2,
            },
          }}
          className="pb-16" // Extra padding to make space for pagination
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mx-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
