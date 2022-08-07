import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./loading";

const Home = ({ pack }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  // const [timeoutId, setTimeoutId] = useState(-1);

  // let delay = 300;
  useEffect(() => {
    // clearTimeout(timeoutId);
    // setTimeoutId(
    //   setTimeout(() => {
    const fetchData = async ({ pack }) => {
      // const price = document.magicObj;
      const response = await axios.get(
        `https://vinted-backend01.herokuapp.com/offer/search?` +
          `pricemin=${pack.filter.priceSort[0]}` +
          `&priceMax=${pack.filter.priceSort[1]}` +
          `&search=${pack.filter.title}` +
          `&page=${1}` +
          `&objByPage=${10}`
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData({ pack });
    //   }, delay)
    // );
  }, [pack]);

  return isLoading ? (
    <Loading />
  ) : (
    <section className="homePage">
      <img className="homepageimg" src="./homepage.jpg" alt="présentation" />
      {/* {pack.setSearch(true)} */}
      <section className="showImage">
        {data.offers.map((offer, index) => {
          return (
            <article className="vignette" key={index}>
              {/* {console.log(pack)} */}
              <Link to={`/offers/${offer._id}`} state={{ offer: offer }}>
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
