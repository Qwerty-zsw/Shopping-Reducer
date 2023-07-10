import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { isInCard, quantityCount, shorten } from "../Helper/Splitter";
import { useContext } from "react";
import { CardContext } from "../../Context/CardContextProvider";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <Card className="rounded-4 bg-dark" style={{ width: "18rem" }}>
      <Card.Img
        className="rounded-top-4 imageFit bg-white p-3"
        variant="top"
        src={productData.image}
      />
      <Card.Body>
        <Card.Title className="text-white d-flex justify-content-end fs-6">
          {shorten(productData.title)}
        </Card.Title>
        <div className="w-100 d-flex justify-content-between">
          <Card.Text className="d-flex text-white">
            قیمت: ${productData.price}
          </Card.Text>
          <Card.Text className="d-flex text-white">
            <Link
              className="fw-bold text-decoration-underline"
              to={`/store/${productData.id}`}
            >
              جزئیات
            </Link>
          </Card.Text>
        </div>
        <div className="w-100 d-flex align-items-center">
          {isInCard(state, productData.id) ? (
            <Button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
              variant="primary text-white py-0"
            >
              <span className="d-flex align-items-center py-1 fw-bold fs-5">+</span>
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
              variant="primary w-100 text-white"
            >
              Add to card
            </Button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <Button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
              className="p-0 me-2"
            >
              <span className="d-flex align-items-center fw-bold fs-5 py-1 px-3">-</span>
            </Button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <Button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
              className="px-2 me-2"
            >
              <DeleteOutlineIcon />
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
