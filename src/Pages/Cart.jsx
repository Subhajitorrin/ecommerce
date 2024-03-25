import React, { useEffect } from "react";
import Cartcard from "../Components/Cartcard";

function Cart(props) {
  return (
    <div className="cartcontainer">
      <div className="left">
        {props.cart.map((item, index) => {
          return (
            <Cartcard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Cart;
