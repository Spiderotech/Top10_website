import React from "react";

const Process = () => {
  return (
    <section class=" bg-white mt-10">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 ">
          <h2 class="mb-4 text-4xl mt-20 text-center tracking-tight font-bold text-gray-900 dark:text-white">
            We simplify every step of your research process
          </h2>
          <p class="mb-4 text-[20px] font-sans text-center leading-relaxed text-[#424242]">
            Browse, Compare, Shortlist, and Hire your ideal business partner
            with ease.
          </p>
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class=" overflow-hidden ">
              <div
                class="px-3 py-10 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="flex flex-row">
                  {/* <img src={web5} alt="Logo" class=" h-5 w-5 mt-1 " /> */}
                  <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                    Select the category
                  </div>
                </div>

                <p class="text-gray-700 text-[18px] text-start leading-relaxed font-sans tracking-wide font-normal">
                  Choose the type of companies you are looking for
                </p>
              </div>
            </div>
            <div class=" overflow-hidden ">
              <div
                class="px-3 py-10 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="flex flex-row">
                  {/* <img src={web5} alt="Logo" class=" h-5 w-5 mt-1 " /> */}
                  <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                    Read About the Company
                  </div>
                </div>

                <p class="text-gray-700 text-[18px] text-start font-sans tracking-wide font-normal">
                  Check out verified B2B reviews & ratings of companies
                </p>
              </div>
            </div>
            <div class=" overflow-hidden ">
              <div
                class="px-3 py-10 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="flex flex-row">
                  {/* <img src={web5} alt="Logo" class=" h-5 w-5 mt-1 " /> */}
                  <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                    Shortlist the best
                  </div>
                </div>

                <p class="text-gray-700 text-[18px] text-start font-sans leading-relaxed tracking-wide font-normal">
                  Pick the company that best fits your requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
