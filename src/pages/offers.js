import { useParams } from "react-router-dom";

const Offers = ({ ...pack }) => {
  const { id } = useParams();
  const offer = pack.data.offers.find((offer) => offer._id === id);

  return (
    <section>
      {pack.setSearch(false)}
      <h1>Offers !!</h1>
      <p>{offer.product_name}</p>
      <img src={offer.product_image.url} alt={offer.product_name} />
    </section>
  );
};

export default Offers;
