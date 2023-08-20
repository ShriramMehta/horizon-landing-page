import { Swiper, SwiperSlide, FreeMode } from 'swiper/react';
import './Carousel.css';
import 'swiper/css';

const Carousel = () => {
  return (
    <Swiper
        freeMode = {true}
        grabCursor = {true}
        className='mySwiper my-20'
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
                slidesPerView: 2.5,
                spaceBetween:10,
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
      <div className='px-10 py-15'>
      <div className='Car1 flex flex-col gap-3 py-8 px-2 justify-center items-center max-w-100'>
        <div className='w-40 h-40'>
            <img src="./images/help.jpeg" className='image-hover-effect rounded-full w-full h-full object-cover' alt='choose'/>
          </div>
        <div className='text-center font-bold text-2xl py-1 text-lightBlack'>
        <h3>We have helped <br/>4,000 people.</h3>
        </div>
    </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='px-10 py-15'>
      <div className='Car2 flex flex-col gap-3 py-8 px-2 justify-center items-center max-w-100'>
        <div className='w-40 h-40'>
            <img src="./images/choose.jpeg" className='image-hover-effect rounded-full w-full h-full object-cover' alt='choose'/>
          </div>
        <div className='text-center font-bold text-2xl py-1 text-lightBlack'>
          <h3>You can choose<br/> from 30+ therapists.</h3>
        </div>
    </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='px-10 py-15'>
      <div className='Car3 flex flex-col gap-3 py-8 px-2 justify-center items-center max-w-100'>
        <div className='w-40 h-40'>
            <img src="./images/session.jpeg" className='image-hover-effect rounded-full w-full h-full object-cover' alt='choose'/>
          </div>
        <div className='text-center font-bold text-2xl py-1 text-lightBlack'>
        <h3>Over 10,000 <br/>sessions conducted.</h3>
        </div>
    </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;