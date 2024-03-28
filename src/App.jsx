import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="container">
      <BrowserRouter>
        <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} isVisible={isVisible}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} setIsVisible={setIsVisible}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
