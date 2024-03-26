import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Header(props) {
  return (
    <div className="headerContainer">
      <div className="left">
        <Link to="/"><h2>ORRINMART</h2></Link>
        <nav className="nav">
          <ul>
            <Link to="/">Home</Link>
            <li>Accessories</li>
            <li>Trending now</li>
            <li>Gifts</li>
            <li>Sportswear</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <IoSearch />
        <Link to="/cart">
        </Link>
        <FaUser />
        <Link to="/cart">
          <div className="carticoncontainer">
            <img src="./cart.png" alt="" />
            <div className="pcontainer">
              <p>{props.cart.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
