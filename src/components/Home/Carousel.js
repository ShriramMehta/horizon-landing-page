import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { pagination, Autoplay } from "swiper/modules";
SwiperCore.use([Autoplay]);

const data = [
  {
    image: "/images/Feat1.png",
    topContent: "Our community stands strong at",
    value: "4,800+",
    belowContent: "users.",
  },
  {
    image: "/images/Feat2.png",
    topContent: "A diverse team of",
    value: "35+",
    belowContent: "therapists.",
  },
  {
    image: "/images/Feat3.png",
    topContent: "We have conducted",
    value: "10,000+",
    belowContent: "sessions.",
  },
];

const Carousel = () => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      spaceBetween={5}
      autoplay={true}
      pagination={{ clickable: true }}
      className="my-5 bg-white z-3"
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
      {data.map((item, index) => (
        <SwiperSlide key={index} className="pt-[5rem]">
          <div className="flex flex-col justify-center items-center mx-6">
            <img
              src={item.image}
              alt="itemimage"
              className=" object-cover relative w-full"
            />
            <div className="absolute flex flex-col text-center font-medium text-[20px] text-textColor leading-[40px]">
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
