import React, { useEffect, useState } from "react";
import Cartcard from "../Components/Cartcard";

function Cart(props) {
  const [totalPrice,setTotalPrice] = useState(0);
  function calculateTotalPrice(){
    let tempPrice=0
    for(let i=0;i<props.cart.length;i++){
      tempPrice+=props.cart[i].price*props.cart[i].quantity;
    }
    setTotalPrice(tempPrice)
  }
  useEffect(() => {
    calculateTotalPrice()
  }, [props.cart])
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
              quantity={item.quantity}
              cart={props.cart}
              setCart={props.setCart}
            />
          );
        })}
      </div>
      <div className="right">
        <div className="cost">
          <div className="promo">
            <input type="text" name="" id="" placeholder="Enter promo code"/>
            <button>Submit</button>
          </div>
          <div className="innercost">
            <h4>Shopping Cost:</h4> <h4>${totalPrice}</h4>
          </div>
          <div className="innercost">
            <h4>Discount:</h4> <h4>-$0</h4>
          </div>
          <div className="innercost">
            <h3>Total Cost:</h3> <h3>${totalPrice}</h3>
          </div>
          <button className="purchase">Proceed to purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
