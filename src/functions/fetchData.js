import axios from "axios";

let requestNumberChecker = 0;
const fetchData = async ({ ...pack }) => {
  // const price = document.magicObj;
  const response = await axios.get(
    `https://lereacteur-vinted-api.herokuapp.com/offers?` +
      `priceMin=${pack.state.min}` +
      `&priceMax=${pack.state.max}` +
      // `priceMin=${price.state.min}` +
      // `&priceMax=${price.state.max}` +
      `&title=${pack.filter.title}` +
      `&page=${pack.filter.skip}` +
      `&sort=${pack.filter.sort}` +
      `&limit=${pack.filter.limit}`
  );
  requestNumberChecker++;
  console.log("request ", requestNumberChecker);

  pack.setData(response.data);
  pack.setIsLoading(false);
};

export default fetchData;
