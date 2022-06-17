import React from "react";
import HeaderBack from "../components/HeaderBack";

import CountryInfoBody from "../components/CountryInfoBody";

const CountryInfo = () => {
  return (
    <article className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <HeaderBack />
      <CountryInfoBody />
    </article>
  );
};

export default CountryInfo;
