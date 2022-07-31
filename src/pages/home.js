import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <section>
      <h1>Home !!</h1>
      {props.setSearch(true)}
      {props.data.offers.map((offer, index) => {
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
