import React from "react";
import Typewriter from "typewriter-effect";
// import { Link } from "react-router-dom";
import "./Typing.css";

const Typing = () => {
  return (
    <div className="maincontainer">
      <h3 className="Dominion">Dominion of &nbsp;</h3>
      <span className="Typing" style={{ color: "red" }}>
        <Typewriter
          options={{
            strings: [
              "Logistics",
              "Packaging",
              "Production",
              "Teamwork",
              "Innovation",
              "Documentation",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};

export default Typing;
