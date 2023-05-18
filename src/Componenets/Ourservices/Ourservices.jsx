import React from "react";
import "./Ourservices.css";
import { Link } from "react-router-dom";

const arr = [
  {
    image: "/images/grain.webp",
    info: "Grains and Pulses",
  },
  {
    image: "/images/Cotton.webp",
    info: "Lifestyle",
  },
  {
    image: "/images/Pulses.webp",
    info: "Beans and Pulses",
  },
  {
    image: "/images/fruits.jpg",
    info: "Fruits",
  },
  {
    image: "/images/vegetables.webp",
    info: "Vegetables",
  },
  {
    image: "/images/spices.webp",
    info: "Spices",
  },
];

const Ourservices = () => {
  return (
    <section id="food">
      <h2 style={{ color: "#000", fontWeight: "bold" }}>Our Products</h2>
      <div class="food-container container">
        {arr.map((i) => (
          <div class="food-type fruit">
            <div class="img-container ">
              <img src={i.image} alt="" />
              <div class="img-content">
                <h3>{i.info}</h3>
                <br />

                <Link to="/ourproducts" class="Button a">
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourservices;
