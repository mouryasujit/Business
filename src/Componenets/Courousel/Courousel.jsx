import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Courousel.css";

const arr = [
  { image: "/images/make-in-india.webp", id: "1" },
  { image: "/images/startup-india.webp", id: "2" },
  { image: "/images/swatch.webp", id: "3" },
  { image: "/images/skill-india.webp", id: "4" },
  { image: "/images/make-in-india.webp", id: "5" },
  { image: "/images/digital-india.webp", id: "6" },
];
const Courousel = () => {
  let [currIdx, setCurrIdx] = useState(0);
  useEffect(() => {
    const timer1 = setTimeout(
      () => setCurrIdx(currIdx >= 5 ? (currIdx = 0) : (currIdx = currIdx + 1)),
      3000
    );
    return () => clearTimeout(timer1);
  }, [currIdx]);
  return (
    <div className="cor-container">
      <h2>We Support</h2>

      <div className="c-container">
        <img src={arr[currIdx].image} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Courousel;
