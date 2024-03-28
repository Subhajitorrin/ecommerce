import React from "react";
import TopSection from "../Components/TopSection";
import { useState, useEffect } from "react";
import Card from "../Components/Card";

function Home(props) {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // https://fakestoreapi.com/products
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <TopSection />
      <div className="homeContainer">
        {products.map((item, index) => {
          return (
            <Card key={index}
              title={item.title.slice(0, 70)}
              description={item.description.slice(0, 100)}
              image={item.image}
              price={item.price}
              rating={item.rating.rate}
              cart={props.cart}
              setCart={props.setCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
