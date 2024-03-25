import React from "react";
import TopSection from "../Components/TopSection";
import { useState, useEffect } from "react";
import Card from "../Components/Card";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <TopSection />
      <div className="homeContainer">
        {products.map((item, index) => {
          return <Card
            title={item.title.slice(0, 70)}
            description={item.description.slice(0, 100)}
            image={item.image}
            price={item.price}
            rating={item.rating.rate}
          />;
        })}
      </div>
    </>
  );
}

export default Home;
