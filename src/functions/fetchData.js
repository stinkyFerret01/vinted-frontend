import axios from "axios";
let m = 0;
const fetchData = async ({ ...pack }) => {
  // const price = document.magicObj;
  const response = await axios.get(
    `https://lereacteur-vinted-api.herokuapp.com/offers?` +
      `priceMin=${pack.state.min}` +
      `&priceMax=${pack.state.max}` +
      `&title=${pack.filter.title}` +
      `&page=${pack.filter.skip}` +
      `&sort=${pack.filter.sort}` +
      `&limit=${pack.filter.limit}`
    // `priceMin=${price.state.min}` +
    // `&priceMax=${price.state.max}` +
  );
  m++;
  pack.setCounter(pack.counter + 1);
  console.warn(pack.counter);
  console.warn(m);

  pack.setData(response.data);
  pack.setIsLoading(false);
};

export default fetchData;
