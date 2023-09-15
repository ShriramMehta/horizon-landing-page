import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => {
  return (
    <Swiper
        freeMode = {true}
        grabCursor = {true}
        className='mySwiper mb-20 z-[3] bg-white'
        pagination={{ clickable: true }}
        breakpoints={{
            0:{
                slidesPerView: 1,
                spaceBetween:10,
            },
            480:{
                slidesPerView: 2,
                spaceBetween:20,
            },
            768:{
                slidesPerView: 2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView: 2.5,
                spaceBetween:10,
            },
            1280:{
                slidesPerView: 3,
                spaceBetween:10,
            }
        }}
    >
      <SwiperSlide>
      <div className='px-12 py-16'>
      <div className='rounded-[40px] w-100 h-100 bg-gradient-to-tr from-[#bdbdff] to-blue-20 flex flex-col gap-3 py-8 px-4 justify-center items-center max-w-100'>
        <div className='flex flex-col text-center font-normal text-xl py-1 text-[#171A1FFF] leading-10'>We have helped<span className='text-[#1C048DFF] text-3xl'> 4,000 </span>people.</div>
    </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='px-12 py-16'>
      <div className='rounded-[40px] w-100 h-100  bg-gradient-to-r from-yellow-50 to-yellow-100 flex flex-col gap-3 py-8 px-4 justify-center items-center max-w-100'>
        <div className='flex flex-col text-center font-normal text-xl py-1 text-[#171A1FFF] leading-10'>You can choose from <span className='text-[#1C048DFF] text-3xl'>30+</span>therapists.</div>
    </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='px-12 py-16'>
      <div className='rounded-[40px] w-100 h-100 bg-gradient-to-bl from-purple-50 to-purple-400 flex flex-col gap-3 py-8 px-4 justify-center items-center max-w-100'>
        <div className='flex flex-col text-center font-normal text-xl py-1 text-[#171A1FFF] leading-10'>We have conducted over<span className='text-[#1C048DFF] text-3xl'>10,000</span>sessions.</div>
    </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;