import ProductContextProvider from "./Context/ProductContextProvider";
import Store from "./Components/Store";
import { Routes, Route, Navigate } from "react-router-dom";
import ReadPage from "./Components/ReadPage";
import CardContextProvider from "./Context/CardContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Routes>
          <Route path={"/store/:id"} element={<ReadPage />} />
          <Route path={"/store"} element={<Store />} />
          <Route path={"/*"} element={<Navigate to={"/store"} />} />
        </Routes>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;
