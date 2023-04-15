import React from "react";
import Homeslider from "../HomeSlider/Homeslider";
import Navbar from "../Navbar/Navbar";
import Popup from "../Popup/Popup";
import Ourservices from "../Ourservices/Ourservices";
import Quote from "../Quote/Quote";
import "./Home.css";
import Footer from "../Footer/Footer";
import Courousel from "../Courousel/Courousel";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homeslider />
      <Courousel />
      <Popup />
      <Ourservices />
      <Quote />
      <Footer />
    </div>
  );
};

export default Home;
