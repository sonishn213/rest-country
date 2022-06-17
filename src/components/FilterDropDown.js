import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

const FilterDropDown = ({ setContries, setLoading, setError }) => {
  const [showfilter, setShowFilter] = useState(false); //to display dropdown
  const [filter, setFilter] = useState(""); //to recieve value from dropdown
  const handleSelect = async (e) => {
    let region = e.target.dataset.value;

    setFilter(region);
    let region2 = region.toLowerCase();
    let url = "";
    if (region.length > 0) {
      url = `https://restcountries.com/v3.1/region/${region2}`;
    } else {
      url = "https://restcountries.com/v3.1/all";
    }

    try {
      setLoading(true);
      setError(false);
      const res = await fetch(url);
      const data = await res.json();
      console.log(await data);
      setContries(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-2/3 md:w-auto bg-white px-6 py-4 md:py-0 dark:bg-slate-800 shadow-md shadow-slate-900/5 dark:text-white rounded-md md:flex items-center relative select-none cursor-pointer">
      <div
        onClick={() => {
          setShowFilter((p) => !p);
        }}
        className="w-full space-x-2 inline-flex md:flex justify-between items-center dark:text-white"
      >
        <p className="text-sm md:text-base md:w-36 dark:text-white">
          {filter ? filter : "Filter by Region"}
        </p>
        <FaChevronDown />
      </div>
      {/* dropdown */}
      <div
        style={{ display: showfilter ? "block" : "none" }}
        className="block absolute m-0  pb-4 w-full bg-white dark:text-white top-[110%] right-0  rounded-md  dark:bg-slate-800 shadow-md shadow-slate-900/5"
      >
        <p
          data-value=""
          className="px-6 pt-3 dark:text-white"
          onClick={handleSelect}
        >
          All
        </p>
        <p
          data-value="Asia"
          className="px-6 pt-3 dark:text-white"
          onClick={handleSelect}
        >
          Asia
        </p>
        <p
          data-value="America"
          className="px-6 pt-3 dark:text-white"
          onClick={handleSelect}
        >
          America
        </p>
        <p
          data-value="Europe"
          className="px-6 pt-3 dark:text-white"
          onClick={handleSelect}
        >
          Europe
        </p>
        <p
          data-value="Oceania"
          className="px-6 pt-3 dark:text-white"
          onClick={handleSelect}
        >
          Oceania
        </p>
        <p
          data-value="Africa"
          className="px-6 pt-3 dark:text-white"
          onClick={handleSelect}
        >
          Africa
        </p>
      </div>
    </div>
  );
};

export default FilterDropDown;
