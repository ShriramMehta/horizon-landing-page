import { Swiper, SwiperSlide } from "swiper/react";
import "./Components.css";

const Carousel = () => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      spaceBetween={5}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1.8,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide className="my-20">
        <div className="flex flex-col justify-center items-center mx-6">
          <img
            src="./images/Feat1.png"
            alt="blue"
            className=" object-cover relative w-full"
          />
          <div className="absolute flex flex-col text-center font-medium text-[22px] text-[#171A1FFF] leading-[40px]">
            We have helped
            <span className="text-[#1C048DFF] text-[30px] py-2"> 4,000 </span>
            people.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-20">
        <div className="flex flex-col justify-center items-center mx-6">
          <img
            src="./images/Feat2.png"
            alt="yellow"
            className=" object-cover relative w-full"
          />
          <div className="absolute flex flex-col text-center font-medium text-[22px] text-[#171A1FFF] leading-[40px]">
            You can choose from{" "}
            <span className="text-[#1C048DFF] text-[30px] py-2"> 30+ </span>
            therapists.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-20">
        <div className="flex flex-col justify-center items-center mx-6">
          <img
            src="./images/Feat3.png"
            alt="purple"
            className=" object-cover relative w-full"
          />
          <div className="absolute flex flex-col text-center font-medium text-[22px] text-[#171A1FFF] leading-[40px]">
            We have conducted over
            <span className="text-[#1C048DFF] text-[30px] py-2"> 10,000 </span>
            sessions.
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
