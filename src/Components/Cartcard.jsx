import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Cartcard(props) {
  function increaseQuantity() {
    const updatedCart = props.cart.map((item) => {
      if (item.title === props.title) {
        // Increment quantity if item matches
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    // Update cart state with updatedCart
    props.setCart(updatedCart);
  }
  function decreaseQuantity() {
    const updatedCart = props.cart.map((item) => {
      if (item.title === props.title && item.quantity > 1) {
        // decrement quantity if item matches
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    // Update cart state with updatedCart
    props.setCart(updatedCart);
  }
  function removeCartCard() {
    const updatedCart = props.cart.filter((item) => item.title !== props.title);
    props.setCart(updatedCart);
  }
  return (
    <div className="cartcardcontainer">
      <div className="cardleft">
        <div className="cartimgcontainer">
          <img src={props.image} alt="" />
        </div>
        <div className="carttitle">
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className="cardright">
        <div className="quantity">
          <button onClick={increaseQuantity}>+</button>
          <h4 className="quantityDisplay">{props.quantity}</h4>
          <button onClick={decreaseQuantity}>-</button>
        </div>
        <h4 className="price">${props.price}</h4>
        <RxCross2 className="cross" onClick={removeCartCard} />
      </div>
    </div>
  );
}

export default Cartcard;
