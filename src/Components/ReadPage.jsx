import { useContext } from "react";
import { ProductContext } from "../Context/ProductContextProvider";
import { Link, useParams } from "react-router-dom";

const ReadPage = () => {
  const { id } = useParams();
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { image, title, description, category, price } = product;

  return (
    <>
      <img src={image} style={{ width: "15rem" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{category}</p>
      <div>
        <span>{price}</span>
        <Link to={"/Store"}>Back to Shop</Link>
      </div>
    </>
  );
};

export default ReadPage;
