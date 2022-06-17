import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
const HomeBody = ({ countries }) => {
  return (
    <section>
      <div className="fluid-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {countries.map((country) => {
            return (
              <Link to={"/" + country.ccn3}>
                <Card key={country.ccn3} country={country} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBody;
