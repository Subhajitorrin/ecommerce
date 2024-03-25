import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
