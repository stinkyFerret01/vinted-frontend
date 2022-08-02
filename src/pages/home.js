import { Link } from "react-router-dom";

const Home = ({ ...pack }) => {
  return (
    <section className="homePage">
      <img className="homepageimg" src="./homepage.jpg" alt="présentation" />
      {pack.setSearch(true)}
      <section className="showImage">
        {pack.data.offers.map((offer, index) => {
          return (
            <article className="vignette" key={index}>
              <Link to={`/offers/${offer._id}`}>
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
