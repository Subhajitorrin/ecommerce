import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  return (
    <div className="headerContainer">
      <div className="left">
        <h2>ORRINMART</h2>
        <nav className="nav">
          <ul>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Trending now</li>
            <li>Gifts</li>
            <li>Sportswear</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <IoSearch />
        <FaCartShopping />
        <FaUser />
        <IoMenuSharp />
      </div>
    </div>
  );
}

export default Header;
