import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    image: "./images/Feat1.png",
    topContent: "We have helped",
    value: "4,000",
    belowContent: "people.",
  },
  {
    image: "./images/Feat2.png",
    topContent: "You can choose from",
    value: "30+",
    belowContent: "therapists.",
  },
  {
    image: "./images/Feat3.png",
    topContent: "We have conducted over",
    value: "10,000",
    belowContent: "sessions.",
  },
];

const Carousel = () => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      spaceBetween={5}
      pagination={{ clickable: true }}
      className="my-5 bg-white z-3"
      breakpoints={{
        0: {
          slidesPerView: 1,
          autoplay:{
            delay:1000,
          }
        },
        480: {
          slidesPerView: 1.8,
          autoplay: false,

        },
        768: {
          slidesPerView: 2,
          autoplay: false,
        },
        1024: {
          slidesPerView: 2.5,
          autoplay: false,
        },
        1280: {
          slidesPerView: 3,
          autoplay: false,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="pt-[5rem]">
          <div className="flex flex-col justify-center items-center mx-6">
            <img
              src={item.image}
              alt="itemimage"
              className=" object-cover relative w-full"
            />
            <div className="absolute flex flex-col text-center font-medium text-[22px] text-textColor leading-[40px]">
              {item.topContent}
              <span className="text-headingColor text-[30px] py-2">
                {" "}
                {item.value}{" "}
              </span>
              {item.belowContent}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
