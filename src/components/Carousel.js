import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';
import 'swiper/css';

const Carousel = () => {
  return (
    <Swiper
        freeMode = {true}
        grabCursor = {true}
        className='mySwiper my-5'
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
                spaceBetween:0,
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
      <div className='Car1 w-100 h-100 bg-gradient-to-tr from-[#9E9EFF] to-blue-50 flex flex-col gap-3 py-8 px-4 justify-center items-center max-w-100'>
        {/* <div className='w-40 h-40'>
            <img src="./images/help.jpeg" className='image-hover-effect rounded-full w-full h-full object-cover' alt='choose'/>
          </div> */}
        <div className='flex flex-col text-center font-normal text-xl py-1 text-[#171A1FFF] leading-10'>We have helped<span className='text-[#1C048DFF] text-3xl'> 4,000 </span>people.</div>
    </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='px-12 py-16'>
      <div className='Car1 w-100 h-100  bg-gradient-to-r from-yellow-50 to-yellow-100 flex flex-col gap-3 py-8 px-4 justify-center items-center max-w-100'>
        {/* <div className='w-40 h-40'>
            <img src="./images/help.jpeg" className='image-hover-effect rounded-full w-full h-full object-cover' alt='choose'/>
          </div> */}
        <div className='flex flex-col text-center font-normal text-xl py-1 text-[#171A1FFF] leading-10'>You can choose from <span className='text-[#1C048DFF] text-3xl'>30+</span>therapists.</div>
    </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='px-12 py-16'>
      <div className='Car1 w-100 h-100 bg-gradient-to-r from-violet-400 to-violet-100 flex flex-col gap-3 py-8 px-4 justify-center items-center max-w-100'>
        {/* <div className='w-40 h-40'>
            <img src="./images/help.jpeg" className='image-hover-effect rounded-full w-full h-full object-cover' alt='choose'/>
          </div> */}
        <div className='flex flex-col text-center font-normal text-xl py-1 text-[#171A1FFF] leading-10'>We have conducted over<span className='text-[#1C048DFF] text-3xl'>10,000</span>sessions.</div>
    </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;