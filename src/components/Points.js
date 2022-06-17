import React from "react";

const Points = ({ title, value }) => {
  return (
    <p className=" text-slate-600 dark:text-slate-300">
      <span className="capitalize font-medium text-slate-800 dark:text-white">
        {title}
      </span>
      {value}
    </p>
  );
};

export default Points;
