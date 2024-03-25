import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Header() {
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
          <FaCartShopping />
        </Link>
        <FaUser />
        <IoMenuSharp />
      </div>
    </div>
  );
}

export default Header;
