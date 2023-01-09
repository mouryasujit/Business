import React from "react";
import "./Courousel.css";

const Courousel = () => {
  return (
    <div className="cor-container">
      <h2>We Support</h2>
      <div className="c-container">
        <img src="/images/make-in-india.webp" alt="i" />
        <img src="/images/startup-india.webp" alt="i" />
        <img src="/images/swatch.jpg" alt="i" />
        <img src="/images/skill-india.webp" alt="i" />
        <img src="/images/digital-india.webp" alt="i" />
      </div>
    </div>
  );
};

export default Courousel;
