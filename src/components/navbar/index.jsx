import React from "react";
import "./index.scss";
import logo from "../../assets/images/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = ["Brands", "Recent Products", "About"];
  const navLink = navItem?.map((item, index) => <li key={index}>{item}</li>);
  return (
    <section id="navbar">
      <div className="container">
        <div className="nav">
          <a className="logo" href="#">
            <img src={logo} alt="Logo" />
          </a>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {navLink}

            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
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
