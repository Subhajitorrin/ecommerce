import React from "react";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footercontainer">
      <div className="left">
        <ul>
          <li>
            <h4>SHOP</h4>
          </li>
          <li>Drinks</li>
          <li>Gift Cards</li>
          <li>Store Locator</li>
          <li>Refer a friend</li>
        </ul>
        <ul>
          <li>
            <h4>HELP</h4>
          </li>
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Accessibility</li>
        </ul>
        <ul>
          <li>
            <h4>ABOUT</h4>
          </li>
          <li>Our story</li>
          <li>Ingredients</li>
          <li>Wholesale</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="right">
        <p>Signup to get 10% off your first order</p>
        <div className="emailcontainer">
          <input type="text" name="" id="" placeholder="Enter your email"/>
          <button>Subscribe</button>
        </div>
        <div className="iconcontainer">
          <LuInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
