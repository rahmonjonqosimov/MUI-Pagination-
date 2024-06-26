import React from "react";
import "./index.scss";
import img from "../../assets/images/contact-image.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__text">
            <h1>Subscribe To Newsletter</h1>
            <p>Get free guide about smart watches daily. </p>
            <div className="email__input">
              <input type="email" placeholder="Enter Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
          <img src={img} alt="Watch" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
