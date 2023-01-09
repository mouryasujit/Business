import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./Typing.css";

const Typing = () => {
  return (
    <div className="maincontainer">
      <h2 className="cName">Maurya Global</h2>

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
      <Link
        to="/ourproducts"
        class="Button a"
        style={{ backgroundColor: "navy", fontSize: "1.7rem" }}
      >
        See More
      </Link>
    </div>
  );
};

export default Typing;
