import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="relative p-6 md:p-16 w-full text-center bg-darkWhite" data-scroll-section>
      <h1 className="text-3xl md:text-5xl font-bold p-3">Testimonial</h1>
      <Swiper
        freeMode={true}
        grabCursor={true}
        centeredSlides={true}
        className=""
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="p-6">
            <div className="text-center myTest">
              <p className="text-xl md:text-3xl mb-4 pb-4">
                My experience with Mynd has been really smooth and helpful. I’m
                happy I decided to reach out to them for their services and
                since the beginning they’ve been really involved and proactive.
                I always wanted to begin therapy but felt confused and
                frustrated on how to go about finding a suitable counsellor.
                Their platform has made the entire process so easy and hassle
                free. After a few sessions I even began recommending them to a
                few of my friends who have started using their services too and
                are very content! Mynd has reaffirmed my faith in the power of
                therapy and I hope to continue having a wonderful journey with
                them
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6">
            <div className="text-center myTest">
              <p className="text-3xl">
                I was going through a really tough time and I was really
                struggling to find the help I needed until I found Mynd. They
                were so amazingly understanding, efficient and responsive, and
                made sure I got the help I needed as quickly as possible. Their
                discounted student rates were also incredibly helpful for me and
                it made it much easier for me to seek help. Although I only had
                a few sessions, they gave me the clarity I needed and I am now
                seeing a psychiatrist thanks to them. I definitely recommend
                seeking help through Mynd, it changed a lot of things for me and
                I’m very grateful for it.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6">
            <div className="text-center myTest">
              <p className="text-3xl">
                Mynd helped me with student-pocket friendly therapy session when
                I was in a rough spot. The team replied immediately and assigned
                a session (with an amazing psychologist/therapist) at my
                convenience and by the earliest. Plus the team is sensitive,
                helpful and punctual and offer assistance and reply ASAP (which
                is amazing).Sessions with Mynd/ my therapist have been extremely
                helpful. Sessions provided me with perspective and made me
                introspect and I’ve seen a positive impact on my life.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6">
            <div className="text-center myTest">
              <p className="text-3xl">
                My experience with mynd was wonderful. In a low point in my life
                and mindset, Ms. Vedika really was a source of self-reflection
                and understanding. Mynd also made the whole customer experience
                really smooth and stress free- important when dealing with
                people’s mental health. Overall, I would recommend this service
                for anyone that wants an understanding and empathetic ear and
                guidance
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6">
            <div className="text-center myTest">
              <p className="text-3xl">
                At first, the thought of online therapy was a little scary. The
                thought of not having an in person meeting with someone who I
                was to share very personal experiences with made me anxious.
                Mynd has completely turned this thought around. Ms. Shubhangi
                has been a blessing during these tough times. Couldn’t be
                happier that I chose to take the plunge and start therapy! Also,
                the fact that it is so convenient, makes me think that
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
