import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, React } from "react";
import Cookies from "js-cookie";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Offers from "./pages/offers";
import Loading from "./pages/loading";
import Header from "./components/header";
import Footer from "./components/footer";
import CheckoutForm from "./components/checkoutForm";
import PublishOffer from "./pages/publishOffer";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState(true);
  const [filter, setFilter] = useState({
    priceSort: [20, 50],
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
    filter: filter,
    setFilter: setFilter,
    token: token,
    setToken: setToken,
    search: search,
    setSearch: setSearch,
  };

  //Refresh, request delayer

  ////za commenze izi !!
  return (
    <main className="App">
      <Router>
        <Header pack={pack} />
        <Routes>
          <Route path="/" element={<Home pack={pack} />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/offers/:id" element={<Offers pack={pack} />} />
          <Route path="/publish" element={<PublishOffer token={token} />} />
          <Route path="/signup" element={<Signup setSearch={setSearch} />} />
          <Route path="/login" element={<Login pack={pack} />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
