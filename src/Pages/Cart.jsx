import React, { useEffect, useState } from "react";
import Cartcard from "../Components/Cartcard";
import { RxCross2, RxHalf1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [discout, setDiscount] = useState(0);
  const discountAmount = 100;
  function calculateTotalPrice() {
    let tempPrice = 0;
    for (let i = 0; i < props.cart.length; i++) {
      tempPrice += props.cart[i].price * props.cart[i].quantity;
    }
    tempPrice = tempPrice.toFixed(2);
    setTotalPrice(tempPrice);
  }
  function usePromocode() {
    if (discout === 0) {
      const promoCode = document.querySelector("#promocode").value;
      const promoCross = document.querySelector(".promoCross");
      if (promoCode === "ORRIN100" && totalPrice >= 500) {
        setDiscount(discountAmount);
        setTotalPrice(totalPrice - discountAmount);
        promoCross.style.pointerEvents = "auto";
        promoCross.style.opacity = 100;
        document.querySelector("#promocode").disabled = true;
      }
    }
  }
  function unusePromocode() {
    document.querySelector("#promocode").value = "";
    const promoCross = document.querySelector(".promoCross");
    setDiscount(0);
    setTotalPrice(totalPrice + discountAmount);
    promoCross.style.pointerEvents = "none";
    promoCross.style.opacity = 0;
    document.querySelector("#promocode").disabled = false;
  }
  useEffect(() => {
    calculateTotalPrice();
  }, [props.cart]);

  // razorpay integration
  useEffect(() => {
    // Load Razorpay SDK script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script tag
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_7cs83Ikm791P0j",
      amount: (totalPrice*30) * 100, // Amount in paise
      currency: "INR",
      name: "ORRINMART",
      description: "Test Transaction",
      image: "",
      handler: (response) => {
        console.log(response);
        props.setCart([])
        navigate("/");
      },
      prefill: {
        name: "Subhajit Ghosh",
        email: "clashwithsubhajit6@gmail.com",
        contact: "9800952875",
      },
      notes: {
        address: "Junbedia, Bankura",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="cartcontainer">
      <div className="left">
        {props.cart.length == 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          <p className="tempP"></p>
        )}
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
          <h6 className="promoheading">
            Use <span className="promocodebox">ORRIN100</span> promocode on
            first payment
          </h6>
          <div className="promo">
            <div className="promoNcross">
              <input
                type="text"
                name="promocode"
                id="promocode"
                placeholder="Enter promo code"
              />
              <RxCross2 className="promoCross" onClick={unusePromocode} />
            </div>

            <button onClick={usePromocode}>Submit</button>
          </div>
          <div className="innercost">
            <h4>Shopping Cost:</h4> <h4>&#8377;{totalPrice*30}</h4>
          </div>
          <div className="innercost">
            <h4>Discount:</h4> <h4>-&#8377;{discout}</h4>
          </div>
          <div className="innercost">
            <h3>Total Cost:</h3> <h3>&#8377;{totalPrice*30}</h3>
          </div>
          <button className="purchase" onClick={handlePayment}>Proceed to purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
