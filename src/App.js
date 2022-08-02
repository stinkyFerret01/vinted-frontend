import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./App.css";
// import * as React from "react";
import React from "react";
import fetchData from "./functions/fetchData";
// import {loadStripe} from
// import {Elements} from

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Offers from "./pages/offers";
import Loading from "./pages/loading";
import Header from "./components/header";
import Footer from "./components/footer";
// import CheckoutForm from "./components/";
import PublishOffer from "./pages/publishOffer";

//////LES FONCTIONS//////

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [timeoutId, setTimeoutId] = useState(-1);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [priceInput, setPriceInput] = useState({ min: 20, max: 50 });
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState({
    price: { Min: 20, Max: 50 },
    title: "",
    sort: "price-asc",
    skip: 0,
    limit: 30,
  });

  //////BLACK-MAGIC///////see <Ranger />
  // const magicObj = {
  //   state: priceInput,
  //   setState: setPriceInput,
  //   textFilter: filter.title,
  // };
  // document.magicObj = magicObj;
  //////BLACK-MAGIC///////see <Ranger />

  //////LE PROPS.PACK//////

  const pack = {
    state: priceInput,
    setState: setPriceInput,
    filter: filter,
    setFilter: setFilter,
    search: search,
    setSearch: setSearch,
    token: token,
    setToken: setToken,
    data: data,
    setData: setData,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  //Refresh, request delayer

  let delay = 300;
  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        fetchData({ ...pack });
      }, delay)
    );
  }, [priceInput, token, filter]);

  ////za commenze izi !!
  return isLoading ? (
    <Loading />
  ) : (
    <main className="App">
      <Router>
        <Header {...pack} />
        <Routes>
          <Route path="/" element={<Home {...pack} />} />
          <Route path="/loading" element={<Loading />} />
          <Route
            path="/offers/:id"
            element={<Offers data={data} setSearch={setSearch} />}
          />
          <Route path="/publish" element={<PublishOffer {...pack} />} />
          <Route path="/signup" element={<Signup setSearch={setSearch} />} />
          <Route path="/login" element={<Login {...pack} />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
