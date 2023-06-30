import React, { useState } from "react";
import "./Homeslider.scss";
// import "./Homemedia.css";
import { useNavigate } from "react-router-dom";
import Typing from "../Typing/Typing.jsx";

function HomeSlider() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate(`/ourProducts?${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Welcome to <span style={{ color: "Yellow" }}>Maurya Global.</span>{" "}
            <br></br>
            <h5 style={{ fontWeight: "400" }}>
              Order any product by filling the popup form
            </h5>
          </h1>
          <div className="typing">
            <Typing />
          </div>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="" />
              <input
                type="text"
                placeholder='Try searching "Fruits"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>

          <div className="popular">
            <h2 className="ourP">Products:</h2>
            <button onClick={() => navigate("/ourproducts?fruits")}>
              Fruits
            </button>
            <button onClick={() => navigate("/ourproducts?spices")}>
              Spices
            </button>
            <button onClick={() => navigate("/ourproducts?vegetables")}>
              Vegetables
            </button>
            {/* <button onClick={() => navigate("/ourproducts")}>
              ...Many More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
