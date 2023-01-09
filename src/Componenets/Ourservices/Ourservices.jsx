import React from "react";
import "./Ourservices.css";
import { Link } from "react-router-dom";

const arr = [
  {
    image: "/images/grid_image1.png",
    info: "Overcome your shyness and grove to the music of salsa! Learn from aprofessional salsa instructor and gain an amazing skill to flaunt to your friends. Join us for this amazing experience with your partner!",
  },
  {
    image: "/images/grid_image1.png",
    info: "Overcome your shyness and grove to the music of salsa! Learn from aprofessional salsa instructor and gain an amazing skill to flaunt to your friends. Join us for this amazing experience with your partner!",
  },
  {
    image: "/images/grid_image1.png",
    info: "Overcome your shyness and grove to the music of salsa! Learn from aprofessional salsa instructor and gain an amazing skill to flaunt to your friends. Join us for this amazing experience with your partner!",
  },
  {
    image: "/images/grid_image1.png",
    info: "Overcome your shyness and grove to the music of salsa! Learn from aprofessional salsa instructor and gain an amazing skill to flaunt to your friends. Join us for this amazing experience with your partner!",
  },
  {
    image: "/images/grid_image1.png",
    info: "Overcome your shyness and grove to the music of salsa! Learn from aprofessional salsa instructor and gain an amazing skill to flaunt to your friends. Join us for this amazing experience with your partner!",
  },
  {
    image: "/images/grid_image1.png",
    info: "Overcome your shyness and grove to the music of salsa! Learn from aprofessional salsa instructor and gain an amazing skill to flaunt to your friends. Join us for this amazing experience with your partner!",
  },
];

const Ourservices = () => {
  return (
    <section id="food">
      <h2>Our Products</h2>
      <div class="food-container container">
        {arr.map((i) => (
          <div class="food-type fruit">
            <div class="img-container ">
              <img src={i.image} alt="" />
              <div class="img-content">
                <h3>Fruits</h3>
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
