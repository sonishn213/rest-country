import React, { useState, useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeBody from "../components/HomeBody";
import Loading from "../components/Loading";
const Home = () => {
  const [countries, setContries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //fetch all contries on initial load
  const getContries = async () => {
    setLoading(true);
    let homeData = sessionStorage.getItem("homeData");
    if (homeData) {
      setContries(JSON.parse(homeData));
      setLoading(false);
    } else {
      const url = "https://restcountries.com/v3.1/all";
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(url);
        const data = await res.json();
        console.log(await data);
        setContries(data);
        sessionStorage.setItem("homeData", JSON.stringify(data));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };
  //log the error
  if (error) {
    console.log(error);
  }
  useEffect(() => {
    getContries();
  }, []);
  return (
    <section className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <HomeHeader
        setContries={setContries}
        setLoading={setLoading}
        setError={setError}
      />
      {loading ? (
        <Loading />
      ) : error.length > 0 ? (
        <div className="fluid-container ">
          <h3 className="dark:text-white">{error}</h3>
        </div>
      ) : (
        <HomeBody countries={countries} />
      )}
    </section>
  );
};

export default Home;
