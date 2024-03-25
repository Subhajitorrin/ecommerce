import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";

function Card(props) {
  const [rating, setRating] = useState(0);
  const [starlist, setStarlist] = useState([]);
  useEffect(() => {
    setRating(Math.floor(props.rating));
    let temp=[]
    for (let i = 0; i < rating; i++) {
      temp.push(<IoIosStar key={i}/>)
    }
    setStarlist(temp)
  }, []);

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
          {
            starlist
          }
        </div>
      </div>
      <div className="price">
        <h5>${props.price}</h5>
      </div>
      <div className="cartbtn">
        <button>
          <h4>Add to cart</h4>
        </button>
      </div>
    </div>
  );
}

export default Card;
