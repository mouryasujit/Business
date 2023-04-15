import React, { useEffect, useState } from "react";
import "./Services.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const arr = [
  {
    name: "Green Cardamon",
    title: "cardamon choti Elaichi",
    images: "/images/cardamon.webp",
  },
  {
    name: "Coriander",
    title: "corainder sukha dhaniya",
    images: "/images/parslay.webp",
  },
  {
    name: "Fenugreek",
    title: "fenugreek methi",
    images: "/images/fenugreek.webp",
  },
  {
    name: "Asafoetida ",
    title: "asafoetida hing",
    images: "/images/spices.webp",
  },
  {
    name: "Cinnamon",
    title: "cinnamon cassia bark dalchini",
    images: "/images/cinnamon.webp",
  },
  {
    name: "Fennel",
    title: "fennel sauf",
    images: "/images/spices.webp",
  },
  {
    name: "Carom",
    title: "carom ajwain",
    images: "/images/spices.webp",
  },
  {
    name: "Cloves",
    title: "cloves lavang",
    images: "/images/clove.webp",
  },
  {
    name: "Black pepper",
    title: "blackpepper kali mirch",
    images: "/images/blackpepper.webp",
  },
  {
    name: "Red chilli",
    title: "red chilli",
    images: "/images/peppers.webp",
  },
  {
    name: "Mustard Seeds",
    title: "Mustard Seeds rai sarso",
    images: "/images/mustard.webp",
  },
  {
    name: "Mace ",
    title: "javitri mace",
    images: "/images/spices.webp",
  },
  {
    name: "Garam Masala",
    title: "garam masala",
    images: "/images/garammasala.webp",
  },
  {
    name: "Wheat Flour",
    title: "wheatflour atta",
    images: "/images/flour.webp",
  },
  {
    name: "Maida",
    title: "maida rice flour",
    images: "/images/flour.webp",
  },
  {
    name: "Whole Wheat",
    title: "whole wheat",
    images: "/images/grain.webp",
  },
  {
    name: "Green Mung Beans",
    title: "green mung beans",
    images: "/images/mungbeans.webp",
  },
  {
    name: "Peas",
    title: "peas matar",
    images: "/images/greenpeas.webp",
  },
  {
    name: "Toor Dal",
    title: "toor dal",
    images: "/images/yellowdal.webp",
  },

  {
    name: "Chick Peas",
    title: "chickpea",
    images: "/images/chickpea.webp",
  },

  {
    name: "Red Lentils",
    title: "redlentils",
    images: "/images/lentils.webp",
  },
  {
    name: "Onions",
    title: "onions kanda",
    images: "/images/onions.webp",
  },
  {
    name: "Potatoes",
    title: "potatoes aloo",
    images: "/images/potatoes.webp",
  },
  {
    name: "Garlic",
    title: "garlic adrak",
    images: "/images/garlic.webp",
  },
  {
    name: "Rice",
    title: "rice chawal",
    images: "/images/rice.webp",
  },
  {
    name: "Cotton",
    title: "cotton",
    images: "/images/Cotton.webp",
  },
  {
    name: "Fruits",
    title: "fruits ",
    images: "/images/images.jpg",
  },
];
const Services = () => {
  // useEffect(() => {
  //   arr.filter();
  // });
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  useEffect(() => {
    // Update filteredData whenever searchQuery changes
    const filtered = arr.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update searchQuery with input value
  };

  return (
    <>
      <Navbar />
      <div className="main-service">
        <div className="header">
          <h2
            className="headers"
            style={{ marginTop: "9rem", marginBottom: "3rem", color: "black" }}
          >
            Our Products
          </h2>
          <input
            type="text"
            className="input"
            placeholder="Search here our products"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
        <div className="service-containers">
          {filteredData.length !== 0 ? (
            filteredData.map((i) => (
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
            ))
          ) : (
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                padding: "3rem",
                color: "red",
              }}
            >
              This product is not currently listed in our website you can
              contact for more info about this product
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
