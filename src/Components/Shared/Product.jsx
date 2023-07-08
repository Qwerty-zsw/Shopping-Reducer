import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { shorten } from "../Helper/Splitter";

const Product = ({ productData }) => {
  return (
    <Card className="rounded-4 bg-dark" style={{ width: "18rem" }}>
      <Card.Img
        className="rounded-top-4 imageFit bg-white p-3"
        variant="top"
        src={productData.image}
      />
      <Card.Body>
        <Card.Title
          className="text-white d-flex justify-content-end"
        >
          {shorten(productData.title)}
        </Card.Title>
        <Card.Text className="d-flex text-white">
          قیمت: ${productData.price}
        </Card.Text>
        <Button variant="primary w-100 text-white">Add to card</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
