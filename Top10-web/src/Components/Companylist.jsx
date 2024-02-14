import React from "react";
import Listingcard from "./Listingcard";

const Companylist = () => {
  return (
    <div className="w-full h-auto  flex justify-center items-center mt-24">
      <div className=" w-[70%] h-auto flex flex-col ">
        <h2 class="mb-4 text-4xl   tracking-tight font-bold text-gray-900 dark:text-white">
          Top IT Companies
        </h2>
        <p class="mb-4 text-[16px] font-sans leading-relaxed text-[#424242]">
          Software developers are crucial hires for businesses trying to stay
          competitive in today’s market. Whether you want to build a product or
          improve your enterprise software experience, hiring the right software
          development company can be a landmark shift in your business journey.
          This is why we’ve compiled a vetted list of top software development
          service providers that deliver industry-defining results by staying
          up-to-date with the latest technologies, programming languages, and
          industry best practices. Our partners listed below are some of the
          world’s top custom software development companies providing
          expert-level software solutions without compromising quality. Leverage
          our extensive filters and read real user reviews to hire the top
        </p>
        <Listingcard/>
        <Listingcard/>
      </div>
    </div>
  );
};

export default Companylist;
