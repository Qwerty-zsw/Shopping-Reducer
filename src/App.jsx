import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const App = () => {
  const [product, SetProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => SetProduct(data.data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 py-5 bg-secondary">
      {product.map((item, index) => {
        return (
          <>
            <Card
              className="rounded-4 bg-dark"
              key={index}
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="rounded-top-4 imageFit bg-white p-3"
                variant="top"
                src={item.image}
              />
              <Card.Body>
                <Card.Title
                  style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
                  className="text-white overflow-hidden"
                >
                  {item.title}
                </Card.Title>
                <Card.Text className="d-flex justify-content-end text-white">
                  قیمت: ${item.price}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <section className="text-white m-0 bg-success py-2 px-3 rounded">0$</section>

                  <div className="d-flex align-items-center text-white">
                    <Button variant="primary">-</Button>
                    <p className="my-2 mx-4">0</p>
                    <Button variant="primary">+</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default App;
