import React from "react";
import { useEffect } from "react";

function PaymentSeccesful(props) {
  useEffect(() => {
    if (props.isVisible) {
      const paymentsuccess = document.querySelector(".paymentsuccess");
      if (paymentsuccess) {
        paymentsuccess.style.opacity = 1;
        setTimeout(() => {
          paymentsuccess.style.opacity = 0;
        }, 2000);
      }
    }
  }, [props.isVisible]);
  return (
    <div className="paymentsuccess">
      <h4>Payment Succesful</h4>
    </div>
  );
}

export default PaymentSeccesful;
