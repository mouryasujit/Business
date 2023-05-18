import React, { useEffect, useState } from "react";
import "./Services.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
const arr = [
  {
    name: "Green Cardamon",
    title: "cardamon choti Elaichi spices",
    images: "/images/cardamon.webp",
  },
  {
    name: "Coriander",
    title: "corainder sukha dhaniya spices",
    images: "/images/parslay.webp",
  },
  {
    name: "Fenugreek",
    title: "fenugreek methi spices",
    images: "/images/fenugreek.webp",
  },
  {
    name: "Asafoetida ",
    title: "asafoetida hing spices",
    images: "/images/spices.webp",
  },
  {
    name: "Cinnamon",
    title: "cinnamon cassia bark dalchini spices",
    images: "/images/cinnamon.webp",
  },
  {
    name: "Fennel",
    title: "fennel sauf spices",
    images: "/images/spices.webp",
  },
  {
    name: "Carom",
    title: "carom ajwain spices",
    images: "/images/spices.webp",
  },
  {
    name: "Cloves",
    title: "cloves lavang spices",
    images: "/images/clove.webp",
  },
  {
    name: "Black pepper",
    title: "blackpepper kali mirch spices",
    images: "/images/blackpepper.webp",
  },
  {
    name: "Red chilli",
    title: "red chilli spices",
    images: "/images/peppers.webp",
  },
  {
    name: "Mustard Seeds",
    title: "Mustard Seeds rai sarso spices",
    images: "/images/mustard.webp",
  },
  {
    name: "Mace ",
    title: "javitri mace spices",
    images: "/images/spices.webp",
  },
  {
    name: "Garam Masala",
    title: "garam masala spices",
    images: "/images/garammasala.webp",
  },
  {
    name: "Wheat Flour",
    title: "wheatflour atta grains and pulses",
    images: "/images/flour.webp",
  },
  {
    name: "Maida",
    title: "maida rice flour grains and pulses",
    images: "/images/flour.webp",
  },
  {
    name: "Whole Wheat",
    title: "whole wheat grains and pulses",
    images: "/images/grain.webp",
  },
  {
    name: "Green Mung Beans",
    title: "green mung beans grains and pulses",
    images: "/images/mungbeans.webp",
  },
  {
    name: "Peas",
    title: "peas matar grains and pulses",
    images: "/images/greenpeas.webp",
  },
  {
    name: "Toor Dal",
    title: "toor dal grains and pulses",
    images: "/images/yellowdal.webp",
  },

  {
    name: "Chick Peas",
    title: "chickpea grains and pulses",
    images: "/images/chickpea.webp",
  },

  {
    name: "Red Lentils",
    title: "redlentils grains and pulses",
    images: "/images/lentils.webp",
  },
  {
    name: "Onions",
    title: "onions kanda vegetables",
    images: "/images/onions.webp",
  },
  {
    name: "Potatoes",
    title: "potatoes aloo vegetables",
    images: "/images/potatoes.webp",
  },
  {
    name: "Garlic",
    title: "garlic adrak vegetables",
    images: "/images/garlic.webp",
  },
  {
    name: "Rice",
    title: "rice chawal ",
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
  const location = useLocation().search.split("%20").join("");
  // console.log(location);
  const query = location;
  // console.log(query);
  const [searchQuery, setSearchQuery] = useState(
    "" || query.slice(1, query.length)
  ); // State for search query
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  // const [searchdata, setsearchdata] = useState();

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
                textAlign: "justify",
                fontWeight: "bold",
                padding: "3rem",
                color: "red",
              }}
            >
              This product is not currently listed in our website you can
              contact for more info about this product or try searching product
              name with spaces or in any other language.
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
