import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Banner from "../../components/banner";
import Products from "../../components/products";
import About from "../../components/about";
import Footer from "../../components/footer";
import Contact from "../../components/contact";

const Home = () => {
  return (
    <>
      <div className="nav__hero">
        <Navbar />
        <Hero />
      </div>
      <Banner />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
