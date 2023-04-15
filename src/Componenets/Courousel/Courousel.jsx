import React, { useEffect, useRef, useState } from "react";
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
  const currIdxRef = useRef(0);
  const [currIdx, setCurrIdx] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrIdx((prevIdx) => (prevIdx >= 5 ? 0 : prevIdx + 1));
      currIdxRef.current = currIdx;
    }, 3000);
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
