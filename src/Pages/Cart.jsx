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
      <div className="right">
        <div className="cost">
          <div className="promo">
            <input type="text" name="" id="" />
            <button>Submit</button>
          </div>
          <div className="innercost">
            <h4>Shopping Cost:</h4> <h4>$100</h4>
          </div>
          <div className="innercost">
            <h4>Discount:</h4> <h4>-$0</h4>
          </div>
          <div className="innercost">
            <h3>Total Cost:</h3> <h3>$100</h3>
          </div>
          <button className="purchase">Proceed to purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
