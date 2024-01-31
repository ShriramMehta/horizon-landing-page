import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimonials } from "./data";

const Testimonial = () => {
  return (
    <section className="mx-auto py-20 bg-[#feffea]" data-scroll-section>
      <h1 className="text-[36px] leading-[50px] font-bold font-heading text-headingColor text-center">
        Testimonials
      </h1>
      <Swiper
        freeMode={true}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="px-4 mx-auto flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mx-auto my-10">
                <div className="shadow-yellowShadow rounded-[50px] relative w-[350px] h-[350px] md:w-[800px] md:h-[450px] flex justify-center items-center bg-white z-1">
                  <div className="absolute top-[44px] md:top-[22px] w-[300px] h-[700px] md:w-[700px] md:h-[400px] text-center text-[15px] md:text-[30px] leading-[24px] md:leading-[42px] text-textColor md:px-3">
                    " {testimonial.content} "
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
