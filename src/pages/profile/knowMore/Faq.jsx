import React from "react";
import { useNavigate } from "react-router";

const Faq = () => {
  const navigate = useNavigate()
  return (
    <div className="mx-auto mb-24 my-6 gap-4 max-w-screen-xl flex flex-col justify-center items-center w-full">
      <div className="px-4 text-[#101828] font-semibold text-3xl">
        We’re here to help
      </div>
      <div className="px-4 text-center text-[#667085] text-xl">
        Please find the most commonly asked questions <br />
        answered below! If you have more questions you can always reach out to
        us!
      </div>
      <div>
        <button onClick={()=> {navigate("/contact")}} className="text-[#7B3CF3] text-lg border border-2 border-[#7B3CF3] rounded-lg font-semibold px-6 py-2 bg-[#FFFFFF]">
          Contact us
        </button>
      </div>
      <div className="mt-4 mx-6 md:mx-12 flex flex-col text-justify justify-center gap-12 items-center">
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-[#000000] font-semibold text-xl">
            How to book a therapy session?{" "}
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            To book a therapy session, simply log in to your account and
            navigate to the "Therapy" section. Browse through your matched
            therapists, choose one that suits your needs, select a convenient
            date and time, and confirm your booking!
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-[#000000] font-semibold text-xl">
            What happens if I am late for the session?{" "}
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            You have a 15 minute window to join the session. If you are late the
            session will not be extended beyond assigned time. After 15 minutes
            it will be considered a no show and we will not be able to initiate
            the refund.
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2 w-full">
          <h1 className="text-[#000000] font-semibold text-xl">
            What if I need to reschedule or cancel my appointment?
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            If you need to reschedule or cancel your appointment, you can do so
            within the app.
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-[#000000] font-semibold text-xl">
            What is your cancellation policy
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            You can cancel session up to 24 hours before the start time of the
            session. No cancellation is possible within 24 hours of the session
            time.
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2 w-full">
          <h1 className="text-[#000000] font-semibold text-xl">
            How long will the refund take to reflect in my account?{" "}
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            Upon cancellation the refund will reflect in your account within
            7-10 business days{" "}
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-[#000000] font-semibold text-xl">
            Who is considered a student?{" "}
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            Anyone between the age of 18-25 pursuing a degree at the time of the
            session and has a valid student ID card is considered a student{" "}
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2 w-full">
          <h1 className="text-[#000000] font-semibold text-xl">
            As someone living outside of India, can I still avail your services?{" "}
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            Yes, you can avail our services anywhere, anytime!{" "}
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-[#000000] font-semibold text-xl">
            Are the activities and audio- video content a replacement for
            therapy?{" "}
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            Activities and audio-video content can support mental well-being and
            personal growth, but they are not a substitute for professional
            therapy. Therapy offers specialised expertise, unbiased support,
            confidentiality, and evidence-based interventions, making it
            essential for addressing mental health challenges effectively.
            Activities and content can be helpful supplements and aid your
            mental health journey{" "}
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-[#000000] font-semibold text-xl">
            Are the activities and audio- video content a replacement for
            therapy?Is my personal information kept confidential?{" "}
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            Yes your personal information is kept secure and no information is
            shared outside to any third party. While the information shared
            during a therapy session is also completely confidential, in case of
            any extremities such as harm to self or others, the therapist may be
            required to disclose certain information.{" "}
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2 w-full">
          <h1 className="text-[#000000] font-semibold text-xl">
            I am in an SOS situation and require immediate support. What do I
            do?
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            We currently do not operate as a helpline. If you are in a crisis
            situation or require immediate support, please reach out to the
            following helpline resources
          </p>
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-[#000000] font-semibold text-xl">
            Can I connect with a therapist without having my video on?
          </h1>
          <p className="text-[#667085] font-medium text-xl">
            Yes you can, however, please note that keeping the video on and
            interacting with the therapist will ensure a better experience and
            allow the therapist to assist you more effectively
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
