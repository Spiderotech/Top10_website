import React from "react";

const Below_herosection = () => {
  return (
    <div className=" w-ful h-auto flex justify-center items-center flex-col ">
      <div class="container my-12 mx-auto px-4 md:px-12  ">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg  border-2">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-3xl font-bold">Ad Banners</h1>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <p class="ml-2 text-xl">
                  We have spaces for header Ads, Footer Ads. Contact us for the
                  perfect size and dimensions
                </p>
              </footer>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg border-2">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-3xl font-bold">Inside Post Ads</h1>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <p class="ml-2 text-xl">
                  The Inside post Ads will show in between paragraphs of every
                  Post on the Platform.
                </p>
              </footer>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg border-2">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-3xl font-bold">Link Ads</h1>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <p class="ml-2 text-xl">
                  From the image, the Ad will show in between Contents
                </p>
              </footer>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg border-2">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-3xl font-bold">Guest Posts</h1>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <p class="ml-2 text-xl">
                  You can send us good Content in line with our content strategy
                  and structures.
                </p>
              </footer>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg border-2">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-3xl font-bold">Side Bars</h1>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <p class="ml-2 text-xl">
                  We have ads for the sidebar areas, Full width, 360X324,
                  324×600 and so many more.
                </p>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg border-2">
              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-3xl font-bold">Link Insertion</h1>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <p class="ml-2 text-xl">
                  ou can insert links to an already existing page on our
                  website.
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center mb-10">
        <div className="w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
            <div className=" w-full">
              <div className="w-[300px] h-[100px]  items-center pt-5 text-[1rem] flex flex-col justify-center md:border-r-2">
                <b>
                  <b className="text-[32px]">4.44k</b>
                </b>
                <br />
                <span className="text-[16px] font-medium">
                  organic pageviews every month
                </span>
              </div>
            </div>

            <div className="w-full  ">
              <div className="w-[300px] h-[100px]  items-center pt-5 text-[1rem] flex flex-col  justify-center  md:border-r-2 ">
                <b>
                  <b className=" text-[32px]">3.4k</b>
                </b>
                <br />
                <span className="text-[16px] font-medium">
                  {" "}
                  monthly visitors
                </span>
              </div>
            </div>
            <div className="w-full  ">
              <div
                className="w-[300px] h-[100px]  items-center pt-5 text-[1rem] flex flex-col  justify-center  "
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <b>
                  <b className="text-[32px]">100+</b>
                </b>
                <br />
                <span className="text-[16px]font-medium">Pageviews Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Below_herosection;
