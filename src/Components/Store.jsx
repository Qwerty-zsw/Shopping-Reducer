import { useContext } from "react";
import { ProductContext } from "../Context/ProductContextProvider";
import Product from "./Shared/Product";

const Store = () => {
  const products = useContext(ProductContext);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 py-5 bg-secondary">
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;
