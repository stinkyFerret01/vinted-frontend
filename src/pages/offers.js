import { useParams, useNavigate, useLocation } from "react-router-dom";

const Offers = ({ pack }) => {
  const location = useLocation();
  const { offer } = location.state;
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(pack);
  return (
    <section>
      <article>
        {pack.setSearch(false)}
        <h1>Offers !!</h1>
        <p>{offer.product_name}</p>
        <img src={offer.product_image.url} alt={offer.product_name} />
      </article>
      <button
        onClick={() => {
          navigate("/payment", {
            state: { id: id, title: "Toto", price: offer.product_price },
          });
        }}
      >
        pay
      </button>
      {/* <Link to="/payment">Pay !!</Link> */}
    </section>
  );
};

export default Offers;
