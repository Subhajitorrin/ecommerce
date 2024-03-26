import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";

function Card(props) {
  const [rating, setRating] = useState(0);
  const [starlist, setStarlist] = useState([]);
  useEffect(() => {
    setRating(Math.floor(props.rating));
    let temp = [];
    for (let i = 0; i < rating; i++) {
      temp.push(<IoIosStar key={i} />);
    }
    setStarlist(temp);
  }, []);

  function addToCart() {
    // checking if present already
    const isAlreadyInCart = props.cart.some(
      (item) => item.title === props.title
    );
    if (isAlreadyInCart) {
      // If item is already in cart, update its quantity
      const updatedCart = props.cart.map((item) =>
        item.title === props.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      props.setCart(updatedCart);
    } else {
      const updatedCart = [
        ...props.cart,
        {
          title: props.title,
          price: props.price,
          image: props.image,
          quantity: 1,
        },
      ];
      props.setCart(updatedCart);
    }

    // hover effect
    const cartNotifyContainer = document.querySelector(".cartNotifyContainer");
    cartNotifyContainer.style.opacity = 100;
    setTimeout(() => {
      cartNotifyContainer.style.opacity = 0;
    }, 2000);
  }

  return (
    <div className="cardcontainer">
      <div className="imgcontainer">
        <img src={props.image} alt="" />
      </div>
      <div className="title">
        <h4>{props.title}</h4>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="rating">
        <h5>Rating {props.rating}</h5>
        <div className="starcontainer">
          {/* <IoIosStar /> */}
          {starlist}
        </div>
      </div>
      <div className="price">
        <h5>${props.price}</h5>
      </div>
      <div className="cartbtn">
        <button onClick={addToCart}>
          <h4>Add to cart</h4>
        </button>
      </div>
    </div>
  );
}

export default Card;
