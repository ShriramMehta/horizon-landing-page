import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonial = [
    {
      content:
        "My experience with Mynd has been really smooth and helpful. I’m happy I decided to reach out to them for their services and since the beginning they’ve been really involved and proactive. I always wanted to begin therapy but felt confused and frustrated on how to go about finding a suitable counsellor. Their platform has made the entire process so easy and hassle free.",
    },
    {
      content:
        "I was going through a really tough time and I was really struggling to find the help I needed until I found Mynd. They were so amazingly understanding, efficient and responsive, and made sure I got the help I needed as quickly as possible. Their discounted student rates were also incredibly helpful for me and it made it much easier for me to seek help.",
    },
    {
      content:
        "Mynd helped me with student-pocket friendly therapy session when I was in a rough spot. The team replied immediately and assigned a session (with an amazing psychologist/therapist) at my convenience and by the earliest. Plus the team is sensitive, helpful and punctual and offer assistance and reply ASAP (which is amazing).",
    },
    {
      content:
        "My experience with mynd was wonderful. In a low point in my life and mindset, Ms. Vedika really was a source of self-reflection and understanding. Mynd also made the whole customer experience really smooth and stress free- important when dealing with people’s mental health. Overall, I would recommend this service for anyone that wants an understanding and empathetic ear and guidance",
    },
    {
      content:
        "At first, the thought of online therapy was a little scary. The thought of not having an in person meeting with someone who I was to share very personal experiences with made me anxious. Mynd has completely turned this thought around. Ms. Shubhangi has been a blessing during these tough times. Couldn’t be happier that I chose to take the plunge and start therapy!",
    },
  ];

  return (
    <section
      className="relative p-6 md:p-16 w-full text-center bg-Backgroundwhite"
      data-scroll-section
    >
      <h1 className="text-3xl md:text-5xl font-bold p-3 font-heading text-indigo-400">
        Testimonials
      </h1>
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
        {testimonial.map((testimonial, index) => 
          <SwiperSlide key={index}>
          <img
            src="./images/Test_mobile.png"
            alt="bg"
            className="md:hidden flex relative w-full object-cover "
          />
          <img
            src="./images/Testimonial-background.svg"
            alt="bg"
            className="hidden md:flex relative w-full px-12 object-cover"
          />
          <div className="p-6 flex justify-center items-center">
            <div className="flex items-center justify-center absolute max-w-[500px] lg:max-w-[700px] top-6  lg:top-10 xl:top-20 text-center myTest">
              <p className="text-lg md:text-base lg:text-2xl xl:text-3xl p-4 font-medium text-lightBlack">
                {testimonial.content}
              </p>
            </div>
          </div>
        </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default Testimonial;
