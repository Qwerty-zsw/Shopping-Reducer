import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const App = () => {
  const [product, SetProduct] = useState([]);
  const [increasers, setIncreasers] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
        const initialIncreasers = {};
        data.data.forEach((item) => {
          initialIncreasers[item.id] = { count: 0, totalPrice: 0, showAddToCart: true };
        });
        setIncreasers(initialIncreasers);
        SetProduct(data.data);
      });
  }, []);

  const handleDecrease = (id) => {
    setIncreasers((prevState) => {
      const newCount = prevState[id].count - 1;
      const newTotalPrice = (newCount * product.find((item) => item.id === id).price).toFixed(2);
      return {
        ...prevState,
        [id]: { ...prevState[id], count: newCount, totalPrice: newTotalPrice },
      };
    });
  };

  const handleIncrease = (id) => {
    setIncreasers((prevState) => {
      const newCount = prevState[id].count + 1;
      const newTotalPrice = (newCount * product.find((item) => item.id === id).price).toFixed(2);
      return {
        ...prevState,
        [id]: { ...prevState[id], count: newCount, totalPrice: newTotalPrice, showAddToCart: false },
      };
    });
  };

  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 py-5 bg-secondary">
      {product.map((item, index) => (
        <Card className="rounded-4 bg-dark" style={{ width: "18rem" }} key={index}>
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
              قیمت: ${item.price.toFixed(2)}
            </Card.Text>
            {increasers[item.id].showAddToCart ? (
              <Button className="w-100" variant="primary" onClick={() => handleIncrease(item.id)}>
                افزودن به سبد
              </Button>
            ) : (
              <div className="d-flex align-items-center text-white">
                <Button variant="primary" onClick={() => handleDecrease(item.id)}>
                  -
                </Button>
                <p className="my-2 mx-4">
                  {increasers[item.id].count}
                </p>
                <Button variant="primary" onClick={() => handleIncrease(item.id)}>
                  +
                </Button>
                <div className="ms-auto bg-success rounded text-center mx-3">
                  قیمت نهایی: ${increasers[item.id].totalPrice}
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default App;
