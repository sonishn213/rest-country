import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";
import Maps from "./Maps";
import Points from "./Points";
const CountryInfoBody = () => {
  const { countrycode } = useParams();
  const [countries, setContries] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //fetch all contries on initial load
  const getCountry = async () => {
    const url = `https://restcountries.com/v3.1/alpha/${countrycode}`;
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
  //log the error
  if (error) {
    console.log(error);
  }
  useEffect(() => {
    getCountry();
    window.scrollTo(0, 0);
  }, [countrycode]);
  const [NativeNameArray, setNativeName] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setNativeName(Object.entries(countries[0].name.nativeName));
    }
  }, [countries]);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : error ? (
        "Error"
      ) : (
        <div className="fluid-container">
          <div className="lg:flex items-center">
            <div className="w-full lg:w-1/2 lg:pr-16 lg:self-start">
              <img src={countries[0].flags.svg} alt="" />
            </div>
            <div className="w-full pt-10 lg:w-1/2  lg:pl-6  lg:pt-0">
              <h2 className="mb-8 dark:text-white">
                {countries[0].name.common
                  ? countries[0].name.common
                  : "unknown"}
              </h2>
              <div className="lg:flex w-full justify-between mb-20 ">
                <div className="space-y-2 mb-10 lg:mb-0">
                  <Points
                    title="Native Name: "
                    value={NativeNameArray.map((langs, index) => {
                      if (index < 1) {
                        return langs[1].official
                          ? langs[1].official
                          : "unknown";
                      }
                    })}
                  />
                  <Points
                    title="Population: "
                    value={
                      countries[0].population
                        ? countries[0].population.toLocaleString()
                        : "unknown"
                    }
                  />
                  <Points
                    title="Region: "
                    value={
                      countries[0].region ? countries[0].region : "unknown"
                    }
                  />
                  <Points
                    title="Sub Region: "
                    value={
                      countries[0].subregion
                        ? countries[0].subregion
                        : "unknown"
                    }
                  />
                  <Points
                    title="Capital: "
                    value={
                      countries[0].capital[0]
                        ? countries[0].capital[0]
                        : "unknown"
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Points
                    title="Top Level Domain: "
                    value={
                      countries[0].tld[0] ? countries[0].tld[0] : "unknown"
                    }
                  />
                  <Points
                    title="Currencies: "
                    value={
                      countries[0].currencies
                        ? Object.values(countries[0].currencies)[0].name
                        : "unknown"
                    }
                  />
                  <Points
                    title="Car: "
                    value={
                      countries[0].car.side ? countries[0].car.side : "unknown"
                    }
                  />
                </div>
              </div>
              <div className="lg:flex lg:space-x-2 items-start">
                <p className="capitalize font-medium dark:text-white whitespace-nowrap py-1 mb-2 lg:mb-0">
                  Border Countries :
                </p>
                <div className="flex flex-wrap  items-center text-slate-600 dark:text-slate-300">
                  {countries[0].borders ? (
                    countries[0].borders.map((item) => {
                      return <BorderTag value={item} />;
                    })
                  ) : (
                    <span className="py-1">No Border Countries</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {countries[0].capitalInfo.latlng.length > 0 && (
            <>
              <h2 className="my-16 md:my-20 dark:text-white">In the map :</h2>
              <Maps
                lat={countries[0].capitalInfo.latlng[0]}
                lang={countries[0].capitalInfo.latlng[1]}
              />
            </>
          )}
        </div>
      )}
    </section>
  );
};
const BorderTag = ({ value }) => {
  return (
    <div className="bg-white shadow-sm px-6 py-1 mr-2 mb-2  dark:bg-slate-800">
      <Link to={"/rest-country/" + value}>{value}</Link>
    </div>
  );
};
export default CountryInfoBody;
