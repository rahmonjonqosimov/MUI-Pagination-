import React from "react";
import "./index.scss";
import logo from "../../assets/images/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navItem = ["Home", "Brands", "Recent Products", "Contact", "About"];
  const navLink = navItem?.map((item, index) => <li key={index}>{item}</li>);
  return (
    <section id="navbar">
      <div className="container">
        <div className="nav">
          <a className="logo" href="#">
            <img src={logo} alt="Logo" />
          </a>
          <ul>{navLink}</ul>
          <ul>
            <a href="/search">
              <IoSearchOutline />
            </a>
            <a href="#">
              <FaUser />
            </a>
            <a href="#">
              <FaShoppingCart />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
