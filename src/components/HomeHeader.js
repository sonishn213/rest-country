import React from "react";
import FilterDropDown from "./FilterDropDown";
import Search from "./Search";
const HomeHeader = ({ setContries, setLoading, setError }) => {
  return (
    <section>
      <div className=" fluid-container py-10 md:flex justify-between items-stretch w-full">
        <div className="w-full md:w-2/5 mb-5 md:m-0">
          <Search
            setContries={setContries}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
        <FilterDropDown
          setContries={setContries}
          setLoading={setLoading}
          setError={setError}
        />
      </div>
    </section>
  );
};

export default HomeHeader;
