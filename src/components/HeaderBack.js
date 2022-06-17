import React from "react";
import { useNavigate } from "react-router-dom";

import { CgArrowLeft } from "react-icons/cg";
const HeaderBack = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className=" fluid-container py-10 ">
        <div
          onClick={() => navigate(-1)}
          className="inline-flex items-center bg-white dark:bg-slate-800 dark:text-white py-2 px-7 rounded-md shadow-md select-none cursor-pointer"
        >
          <i className="text-2xl mr-2 ">
            <CgArrowLeft />
          </i>
          <span>Back</span>
        </div>
      </div>
    </section>
  );
};

export default HeaderBack;
