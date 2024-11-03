import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route exaxt path="/" Component={Home} />
      <Route exaxt path="/products" Component={Products} />
      <Route exaxt path="/products/:id" Component={Product} />
      <Route exaxt path="/cart" Component={Cart} />
      </Routes>
    </>
  );
}

export default App;
