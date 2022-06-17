import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setContries, setLoading, setError }) => {
  const [value, setValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = value.toLowerCase();
    setValue("");
    let url = "";
    if (name.length > 0) {
      url = `https://restcountries.com/v3.1/name/${name}`;
    } else {
      url = "https://restcountries.com/v3.1/all";
    }

    try {
      setError(false);
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(await data);
      if (data.status === 404) {
        setError("No result found for " + name);
      } else {
        setContries(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex w-full py-4 px-6 items-center shadow-md shadow-slate-900/5 bg-white dark:bg-slate-800 dark:text-white rounded-md relative">
      <FaSearch style={{ color: "gray" }} />
      <form
        onSubmit={handleSubmit}
        className="w-full bg-transparent relative ml-3"
      >
        <input
          type="text"
          placeholder="Search for a country"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="bg-transparent border-none outline-none w-full px-3"
        />
      </form>
    </div>
  );
};

export default Search;
