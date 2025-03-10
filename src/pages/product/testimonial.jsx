import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/images/client1.jpg';
import img2 from '../../assets/images/client2.jpg';
import img3 from '../../assets/images/client3.jpg';
import img4 from '../../assets/images/client4.jpg';

const testimonials = [
  {
    name: 'Ama Atta',
    feedback:
      'This automated irrigation system has saved me so much time and water! My crops are thriving like never before.',
    image: img1,
  },
  {
    name: 'Kwame Mensah',
    feedback:
      'I no longer worry about overwatering or underwatering my plants. It’s incredibly efficient and easy to use.',
    image: img2,
  },
  {
    name: 'Fatima Ali',
    feedback:
      'Affordable and effective. I recommend this system to all small-scale farmers looking for cost-effective solutions.',
    image: img3,
  },
  {
    name: 'Ama Pokua',
    feedback:
      'The best investment for my farm! It’s user-friendly and helps me optimize water usage.',
    image: img4,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-100">
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
