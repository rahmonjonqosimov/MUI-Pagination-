import React from "react";
import "./index.scss";
import img from "../../assets/images/hero image.png";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Discover Most Suitable Watches</h1>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <div className="serach">
              <BiSearch />
              <input type="search" placeholder="Find the best brands" />
              <button>Search</button>
            </div>
          </div>
          <div className="hero__image">
            <img src={img} alt="Watch image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
