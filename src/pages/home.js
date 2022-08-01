import { Link } from "react-router-dom";

const Home = ({ ...pack }) => {
  return (
    <section className="fullPage">
      <h1>Home !!</h1>
      {pack.setSearch(true)}
      {pack.data.offers.map((offer, index) => {
        return (
          <article className="vignette" key={index}>
            <Link to={`/offers/${offer._id}`}>
              <div>
                <h3>{offer.product_name}</h3>
                <img
                  src={offer.product_image.secure_url}
                  alt={offer.product_name}
                />
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Home;
