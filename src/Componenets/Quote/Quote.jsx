import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <div class="quote-container">
      <div class="quote-img">
        <div class="quote">
          <h2>
            Content builds relationships, relationships are built on trust.
            Trust drives revenue. <br />
            <span style={{ width: "100%", color: "red" }}>- Andrew Davis</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Quote;
