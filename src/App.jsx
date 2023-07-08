import ProductContextProvider from "./Context/ProductContextProvider"
import Store from "./Components/Store"

const App = () => {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  )
}

export default App