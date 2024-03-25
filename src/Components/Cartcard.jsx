import React from "react";
import { RxCross2 } from "react-icons/rx";

function Cartcard(props) {
  return (
    <div className="cartcardcontainer">
      <div className="cardleft">
        <div className="cartimgcontainer">
          <img
            src={props.image}
            alt=""
          />
        </div>
        <div className="carttitle">
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className="cardright">
        <div className="quantity">
          <button>+</button>
          <h4>1</h4>
          <button>-</button>
        </div>
        <h4 className="price">${props.price}</h4>
        <RxCross2 className="cross"/>
      </div>
    </div>
  );
}

export default Cartcard;
