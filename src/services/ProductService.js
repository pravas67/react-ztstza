import Axios from 'axios';
const getProducts = () => {
  const url =
    'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
  return Axios.get(url);
};
const ProductService = { getProducts };
export default ProductService;
