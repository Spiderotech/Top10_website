import React from 'react'
import Listingcard from '../Listingcard'
import { useEffect, useState } from 'react';
import axios from "../../Components/Admin/Utils/axios";

const Listview = () => {
    const [property, setProperty] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); 
    const IT = "IT";
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/getcompanydata?type=' +IT);
          console.log(response.data.data);
          setProperty(response.data.data);
        } catch (error) {
          console.error(error.message);
        }
      };
  
      fetchData();
    }, [IT, currentPage, itemsPerPage]);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


  return (
    <div className="w-full h-auto flex justify-center items-center mt-24">
    <div className="w-[70%] h-auto flex flex-col">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
        Top Insurance Companies
      </h2>
      <p className="mb-4 text-[16px] font-sans leading-relaxed text-[#424242]">
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
      <div className="mt-10 justify-center">
        {property.map((item, index) => (
          <Listingcard key={index} item={item} />
        ))}
      </div>
      <nav aria-label="Page navigation example" className="flex justify-center  mb-5">
        <ul className="list-style-none flex">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(property.length / itemsPerPage)).keys()].map((page) => (
            <li key={page + 1}>
              <button
                onClick={() => handlePageChange(page + 1)}
                className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                  currentPage === page + 1 ? 'bg-neutral-100 dark:bg-neutral-700' : ''
                }`}
              >
                {page + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(property.length / itemsPerPage)}
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}

export default Listview