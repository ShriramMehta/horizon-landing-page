import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../pages/Team.css";

const Testimonial = () => {
  const testimonial = [
    {
      content:
        "My experience with Adapt has been really smooth and helpful. I’m happy I decided to reach out to them for their services and since the beginning they’ve been really involved and proactive. I always wanted to begin therapy but felt confused and frustrated on how to go about finding a suitable counsellor. Their platform has made the entire process so easy and hassle free.",
    },
    {
      content:
        "I was going through a really tough time and I was really struggling to find the help I needed until I found Adapt. They were so amazingly understanding, efficient and responsive, and made sure I got the help I needed as quickly as possible. Their discounted student rates were also incredibly helpful for me and it made it much easier for me to seek help.",
    },
    {
      content:
        "Adapt helped me with student-pocket friendly therapy session when I was in a rough spot. The team replied immediately and assigned a session (with an amazing psychologist/therapist) at my convenience and by the earliest. Plus the team is sensitive, helpful and punctual and offer assistance and reply ASAP (which is amazing).",
    },
    {
      content:
        "My experience with Adapt was wonderful. In a low point in my life and mindset, Ms. Vedika really was a source of self-reflection and understanding. Adapt also made the whole customer experience really smooth and stress free- important when dealing with people’s mental health. Overall, I would recommend this service for anyone that wants an understanding and empathetic ear and guidance",
    },
    {
      content:
        "At first, the thought of online therapy was a little scary. The thought of not having an in person meeting with someone who I was to share very personal experiences with made me anxious. Adapt has completely turned this thought around. Ms. Shubhangi has been a blessing during these tough times. Couldn’t be happier that I chose to take the plunge and start therapy!",
    },
  ];

  return (
    <section className="py-10 " data-scroll-section>
      <h1 className="py-6 text-2xl text-center md:text-4xl font-medium p-3 font-heading text-[#1C048DFF]">
        Testimonials
      </h1>
      <Swiper
        freeMode={true}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          0:{
              slidesPerView: 1,
              spaceBetween:10,
          },
          480:{
              slidesPerView: 1,
              spaceBetween:20,
          },
          768:{
              slidesPerView: 1,
              spaceBetween:0,
          },
          1024:{
              slidesPerView: 1.5,
              spaceBetween:10,
          },
          1280:{
              slidesPerView: 1.8,
              spaceBetween:10,
          }
      }}
      >
        {testimonial.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="my-2 px-4 mx-auto flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mx-auto py-4 my-10">
                <div className="glowing-background relative w-[350px] h-[350px] md:w-[550px] md:h-[300px] ModalContainer flex justify-center items-center bg-white">
                  <div className="absolute w-[300px] md:w-[500px] text-center text-base md:text-xl text-[#171A1FFF] md:px-3">
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
