import { useParams } from "react-router-dom";

const Offers = (props) => {
  const { id } = useParams();
  const offer = props.data.offers.find((offer) => offer._id === id);

  return (
    <section>
      {props.setSearch(false)}
      <h1>Offers !!</h1>
      <p>{offer.product_name}</p>
      <img src={offer.product_image.url} />
    </section>
  );
};

export default Offers;
