import React from "react";

const Features = () => {
  return (
    <section id="features" className="w-full mx-auto p-6" data-scroll-section>
      <h1 className="text-center text-5xl font-bold">FEATURES</h1>
      <div className="flex flex-wrap justify-center items-center gap-6 py-6">
      <div class="group h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img
              class="h-3/4 w-full rounded-xl object-cover "
              src="./images/Feat1.jpeg"
              alt=""
            />
            <h1 className="text-3xl text-center">Therapy</h1>
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <h1 class="text-3xl font-bold">
                Connect with compassionate therapists for personalized support.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="group h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img
              class="h-3/4 w-full rounded-xl object-cover "
              src="./images/Feat2.jpeg"
              alt=""
            />
            <h1 className="text-3xl text-center">Guided Meditations</h1>
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <h1 class="text-3xl font-bold">
              Get access to calming mindfulness audio and videos.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="group h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img
              class="h-3/4 w-full rounded-xl object-cover "
              src="./images/Feat3.jpeg"
              alt=""
            />
            <h1 className="text-3xl text-center">Personalized Flows</h1>
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <h1 class="text-3xl font-bold">
              Tailored well-being journeys designed just for you.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="group h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img
              class="h-3/4 w-full rounded-xl object-cover "
              src="./images/Feat4.jpeg"
              alt=""
            />
            <h1 className="text-3xl text-center">Progress Tracking</h1>
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <h1 class="text-3xl font-bold">
              Stay motivated by monitoring your growth and achievements.
              </h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
