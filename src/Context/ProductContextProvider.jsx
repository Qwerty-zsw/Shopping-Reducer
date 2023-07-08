import { createContext, useEffect, useState } from "react";
import { getProducts } from "../Services/Api";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [product, SetProduct] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      SetProduct(await getProducts());
    };

    fetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
