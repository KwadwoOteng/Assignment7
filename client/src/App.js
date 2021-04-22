import "./App.css";
import { useState } from "react";
import { useCart } from "./context/state";

function App() {
  const addToCart = useCart((state) => state.addToCart);
  const items = useCart((state) => state.items);
  const totalPrice = useCart((state) => state.totalPrice);
  const removeFromCart = useCart((state) => state.removeFromCart)

  // const counter = useStore((state) => state.counter);
  // const increaseCounter = useStore((state) => state.increaseCounter);
  // const decreaseCounter = useStore((state) => state.decreaseCounter);
  const [product, setProduct] = useState([
    { id: "1", name: "Bel-Aqua", price: 1.5 },
    { id: "2", name: "Book", price: 2.0 },
    { id: "3", name: "Pen", price: 1 },
    { id: "4", name: "Gob3", price: 5 },
    { id: "5", name: "waakye", price: 6 },
  ]);
  return (
    <div className="App">
      <h1>Products</h1>
      <hr />
      {product.map((product) => (
        <p>
          {product.name} - {product.price}
          <button className="add" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </p>
      ))}
      <h2>Cart</h2>
      <h3>Total Price: {totalPrice}</h3>
      <hr />
      {
        items.length === 0? (
        <p>No item in cart</p>
         ) : (
          items.map((item) => (
            <p>
              {item.name} - {item.price} - {item.qty}
            </p>
          ))
        )}
      {/* <h1>Counter: {counter}</h1>
      <button onClick={decreaseCounter}>-</button>
      <button onClick={increaseCounter}>+</button> */}
    </div>
  );
};

export default App;
