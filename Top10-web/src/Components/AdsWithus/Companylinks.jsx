import React from "react";

const Companylinks = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row  justify-center items-center p-10 ">
      <div className="w-full md:w-[40%] h-auto  flex flex-col p-5">
        <article class="overflow-hidden rounded-lg border-2 mb-4">
          <header class="  leading-tight p-2   ">
            <a href="/" className="flex flex-row items-center justify-between">
            <h1 class="text-xl ">Top Insurance Companies</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            </a>
          </header>
        </article>
        <article class="overflow-hidden rounded-lg border-2 mb-4">
          <header class="  leading-tight p-2   ">
            <a href="/" className="flex flex-row items-center justify-between">
            <h1 class="text-xl ">Top IT Companies</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            </a>
          </header>
        </article>

       
        
      </div>
      {/* <div className="w-full md:w-[50%] h-40  bg-yellow-200"></div> */}
    </div>
  );
};

export default Companylinks;
