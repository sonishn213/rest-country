import React, { useState } from "react";
import { useEffect } from "react";

import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [darkmode, setDark] = useState(false);
  useEffect(() => {
    const darkModeSession = sessionStorage.getItem("darkmode");
    //set dark mode on load if dark mode set by the user
    if (darkModeSession !== undefined) {
      console.log(darkModeSession);
      setDark(darkModeSession === "true");
      const rootElement = document.documentElement;
      if (darkModeSession === "true") {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    }
  }, []);
  //set dark mode on click
  const enableDarkMode = () => {
    setDark((p) => {
      let value = !p;
      sessionStorage.setItem("darkmode", value.toString());
      return value;
    });
    //insert dark class to html
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark");
  };
  return (
    <section className="shadow-md bg-white dark:bg-slate-800 dark:text-white w-full relative z-20">
      <div className="fluid-container">
        <nav className="flex justify-between py-8 ">
          <div>
            <Link to="/rest-country">
              <h4 className="dark:text-white">Where in the world</h4>
            </Link>
          </div>
          <div
            className="flex py-1 px-2 space-x-2 items-center cursor-pointer hover:bg-slate-50 hover:dark:bg-slate-900 select-none hover:shadow-md"
            onClick={enableDarkMode}
          >
            {darkmode ? <FaMoon style={{ color: "white" }} /> : <FaRegMoon />}

            <p className="dark:text-white text-sm">Dark Mode</p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
