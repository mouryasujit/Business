import React from "react";
import "./Services.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const arr = [
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
  {
    name: "Fruit",
    images: "/images/images.jpg",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="main-service">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="headers">Our Products</h2>
        <div className="service-containers">
          {arr.map((i) => (
            <div className="cards">
              <div className="img-containers">
                <img src={i.images} alt="images" />
              </div>
              <div className="text-containers">
                <h1>{i.name}</h1>
                <Link to="/contact" className="btn">
                  <button>Contact</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
