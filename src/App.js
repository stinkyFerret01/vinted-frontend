import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import * as React from "react";
// import React from "react";
import fetchData from "./functions/fetchData";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Offers from "./pages/offers";
import Loading from "./pages/loading";
import Header from "./pages/header";
import Footer from "./pages/footer";

//les Fonctions

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [timeoutId, setTimeoutId] = useState(-1);
  const [token, setToken] = useState(null);
  const [counter, setCounter] = useState(0);
  const [priceInput, setPriceInput] = useState({ min: 20, max: 50 });
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState({
    price: { Min: 20, Max: 50 },
    title: "",
    sort: "price-asc",
    skip: 0,
    limit: 5,
  });

  //////BLACK-MAGIC///////see <Ranger />
  // const magicObj = {
  //   state: priceInput,
  //   setState: setPriceInput,
  //   textFilter: filter.title,
  // };
  // document.magicObj = magicObj;
  //////BLACK-MAGIC///////see <Ranger />

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
    counter: counter,
    setCounter: setCounter,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  //Refresh

  ///////TRAVAUX DELAY REQUETE////////
  //
  // let timeoutId;
  // let delay = 500// en millisecond;
  // const onInputChange = ()=>{
  //      clearTimeout(timeoutId);  // efface la prise en charge d'un timeout déjà créé
  //
  //      timeoutId = setTimeout( ()=>{
  //            //fais la requete ici
  //       },delay);
  // }
  let delay = 300;
  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        fetchData({ ...pack });
      }, delay)
    );
  }, [priceInput, token, filter]);
  ///////////////////////////////////////

  ////za commenze izi !!
  return isLoading ? (
    <Loading />
  ) : (
    <body className="App">
      <Router>
        <Header {...pack} />
        <Routes>
          <Route
            path="/"
            element={<Home setSearch={setSearch} data={data} />}
          />
          <Route path="/loading" element={<Loading />} />
          <Route
            path="/offers/:id"
            element={<Offers data={data} setSearch={setSearch} />}
          />
          <Route path="/signup" element={<Signup setSearch={setSearch} />} />
          <Route
            path="/login"
            element={
              <Login setToken={setToken} token={token} setSearch={setSearch} />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
