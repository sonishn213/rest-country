import React from "react";

const Card = ({ country }) => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded-md overflow-hidden cursor-pointer">
      <div className="w-full ">
        <img src={country.flags.svg} alt="" className="object-fit" />
      </div>
      <div className="p-6 space-y-">
        <h5 className="text-lg font-semibold mb-3 dark:text-white">
          {country.name.common}
        </h5>
        <CardPoints
          title="Population:"
          value={
            country.population ? country.population.toLocaleString() : "unknown"
          }
        />
        <CardPoints
          title="Region:"
          value={country.region ? country.region : "unknown"}
        />
        <CardPoints
          title="Capital:"
          value={country.capital ? country.capital[0] : "unknown"}
        />
      </div>
    </div>
  );
};
const CardPoints = ({ title, value }) => {
  return (
    <p className="text-sm text-slate-600 dark:text-white">
      <span className="capitalize font-medium text-black dark:text-white">
        {title + " "}
      </span>
      {value}
    </p>
  );
};
export default Card;
