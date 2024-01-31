import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimonials } from "./data";
import SwiperCore from "swiper/core";
import { useState } from "react";

SwiperCore.use([Pagination, Navigation]);

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      const isLastSlide = swiper.isEnd;
      swiper.slideNext();

      // If it's the last slide, manually set active slide to the first one
      if (isLastSlide) {
        swiper.slideTo(0);
      }
    }
  };

  const goPrev = () => {
    if (swiper) {
      const isFirstSlide = swiper.isBeginning;
      swiper.slidePrev();

      // If it's the first slide, manually set active slide to the last one
      if (isFirstSlide) {
        const lastSlideIndex = swiper.slides.length - 1;
        swiper.slideTo(lastSlideIndex);
      }
    }
  };

  const handleCardClick = () => {
    if (swiper) {
      const isLastSlide = swiper.isEnd;
      goNext();

      // If it's the last slide, manually set active slide to the first one
      if (isLastSlide) {
        swiper.slideTo(0);
      }
    }
  };

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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className="px-4 mx-auto flex justify-center items-center"
              onClick={handleCardClick}
            >
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
        <button className="swiper-button-next" onClick={goNext}></button>
        <button className="swiper-button-prev" onClick={goPrev}></button>
      </Swiper>
    </section>
  );
};

export default Testimonial;
