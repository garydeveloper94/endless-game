import React from "react";
import "./section.css";

const Section = ({ body, stepNumber, title }) => (
  <div className="section col-3">
    <div className="counter">
      <span>0{stepNumber}</span>
    </div>
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);

export default Section;
