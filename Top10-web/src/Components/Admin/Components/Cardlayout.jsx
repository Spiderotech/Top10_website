import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "../Utils/axios";

const Cardlayout = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [filter, setFilter] = useState("IT"); 
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10); 

  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {
    applyFilterAndPagination();
  }, [filter, currentPage, companies]); 

  const fetchData = () => {
    axios
      .get("/getallcompanydata")
      .then((response) => {
        console.log(response.data.data);
        setCompanies(response.data.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const applyFilterAndPagination = () => {
    
    const filtered = companies.filter(company => company.companyType === filter);

    
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage;

   
    const paginated = filtered.slice(startIndex, endIndex);

    
    setFilteredCompanies(paginated);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1); 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto sm:px-6 sm:py-24 lg:max-w-7xl">
        <div className="w-full h-20 flex justify-between">
          <h2 className="text-sm font-bold tracking-tight text-gray-900 mt-5">
            {filteredCompanies.length} Companies
          </h2>
          <div>
            <select
              className="px-4 py-2 mb-4 mt-5"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="IT">IT Company</option>
              <option value="Insurance">Insurance</option>
            </select>
          </div>
        </div>
        <div className="mt-10 justify-center">
          {filteredCompanies.map((company) => (
            <Card key={company.id} company={company} />
          ))}
        </div>

        <nav aria-label="Page navigation example" className="flex justify-center">
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
            {[...Array(Math.ceil(filteredCompanies.length / perPage)).keys()].map((page) => (
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
                disabled={currentPage === Math.ceil(filteredCompanies.length / perPage)}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Cardlayout;
