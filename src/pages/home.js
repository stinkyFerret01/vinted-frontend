import { Link } from "react-router-dom";

const Home = ({ ...pack }) => {
  return (
    <section className="fullPage">
      <h1>Home !!</h1>
      {pack.setSearch(true)}
      {pack.data.offers.map((offer, index) => {
        return (
          <article key={index}>
            <Link to={`/offers/${offer._id}`}>{offer.product_name}</Link>
          </article>
        );
      })}
    </section>
  );
};

export default Home;
