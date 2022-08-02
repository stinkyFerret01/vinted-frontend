import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../functions/fetchData";
import Cookies from "js-cookie";
import Loading from "./loading";

const Home = ({ ...pack }) => {
  // const [timeoutId, setTimeoutId] = useState(-1);
  // const [isLoading, setIsLoading] = useState(true);
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

  // let delay = 300;
  useEffect(() => {
    // clearTimeout(timeoutId);
    // setTimeoutId(
    //   setTimeout(() => {
    fetchData({ ...pack });
    //   }, delay)
    // );
  }, [priceInput, token, filter]);

  return pack.isLoading ? (
    <Loading />
  ) : (
    <section className="homePage">
      <img className="homepageimg" src="./homepage.jpg" alt="présentation" />
      {pack.setSearch(true)}
      <section className="showImage">
        {pack.data.offers.map((offer, index) => {
          return (
            <article className="vignette" key={index}>
              <Link to={`/offers/${offer._id}`} data={pack.data}>
                <div>
                  <div className="ownerDetails">
                    {/* {offer.owner.account.avatar.secure_url && (
                      <img
                        className="userPhoto"
                        src={offer.owner.account.avatar.secure_url}
                      />
                    )} */}
                    <p>{offer.owner.account.username}</p>
                  </div>
                  <img
                    className="productPhoto"
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <div className="productDetails">
                    <h3>{offer.product_price} €</h3>
                    <p>{offer.product_details[0].SI}</p>
                    <p>{offer.product_details[0].MARQUE}</p>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Home;
