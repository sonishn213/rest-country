import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import CountryInfo from "./Pages/CountryInfo";
const Router = () => {
  return (
    <Routes>
      <Route path="/rest-country" element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path=":countrycode" element={<CountryInfo />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
