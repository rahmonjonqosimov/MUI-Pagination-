import React from "react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/auth";
import Admin from "./pages/admin";

const App = () => {
  return (
    <>
      <div className="nav__hero">
        <Navbar />
        <Hero />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
