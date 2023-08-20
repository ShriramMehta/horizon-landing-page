import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="w-full text-center" data-scroll-section>
      <h1 className="text-5xl font-semibold">Testimonial</h1>
      <Swiper
        freeMode={true}
        grabCursor={true}
        centeredSlides={true}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="p-20">
          <div className="text-center myTest">
            <p className="text-2xl">
              Mynd helped me with student-pocket friendly therapy session when I
              was in a rough spot. The team replied immediately and assigned a
              session (with an amazing psychologist/therapist) at my convenience
              and by the earliest. Plus the team is sensitive, helpful and
              punctual and offer assistance and reply ASAP (which is
              amazing). Sessions with Mynd/ my therapist have been extremely
              helpful. Sessions provided me with perspective and made me
              introspect and I’ve seen a positive impact on my life.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-20">
          <div className="text-center myTest">
            <p className="text-2xl">
              Mynd helped me with student-pocket friendly therapy session when I
              was in a rough spot. The team replied immediately and assigned a
              session (with an amazing psychologist/therapist) at my convenience
              and by the earliest. Plus the team is sensitive, helpful and
              punctual and offer assistance and reply ASAP (which is
              amazing). Sessions with Mynd/ my therapist have been extremely
              helpful. Sessions provided me with perspective and made me
              introspect and I’ve seen a positive impact on my life.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-20">
          <div className="text-center myTest">
            <p className="text-2xl">
              Mynd helped me with student-pocket friendly therapy session when I
              was in a rough spot. The team replied immediately and assigned a
              session (with an amazing psychologist/therapist) at my convenience
              and by the earliest. Plus the team is sensitive, helpful and
              punctual and offer assistance and reply ASAP (which is
              amazing). Sessions with Mynd/ my therapist have been extremely
              helpful. Sessions provided me with perspective and made me
              introspect and I’ve seen a positive impact on my life.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-20">
          <div className="text-center myTest">
            <p className="text-2xl">
              Mynd helped me with student-pocket friendly therapy session when I
              was in a rough spot. The team replied immediately and assigned a
              session (with an amazing psychologist/therapist) at my convenience
              and by the earliest. Plus the team is sensitive, helpful and
              punctual and offer assistance and reply ASAP (which is
              amazing). Sessions with Mynd/ my therapist have been extremely
              helpful. Sessions provided me with perspective and made me
              introspect and I’ve seen a positive impact on my life.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-20">
          <div className="text-center myTest">
            <p className="text-2xl">
              Mynd helped me with student-pocket friendly therapy session when I
              was in a rough spot. The team replied immediately and assigned a
              session (with an amazing psychologist/therapist) at my convenience
              and by the earliest. Plus the team is sensitive, helpful and
              punctual and offer assistance and reply ASAP (which is
              amazing). Sessions with Mynd/ my therapist have been extremely
              helpful. Sessions provided me with perspective and made me
              introspect and I’ve seen a positive impact on my life.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
