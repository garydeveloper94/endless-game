import React from "react";
import HeroImage from "../../img/photo-couch.jpg";
import "./heroPanel.css";

const HeroPanel = () => (
  <div className="heropanel">
    <img className="heroimage" src={HeroImage} alt="" />
    <div className="content">
      <h2>New Games and Accessories</h2>
      <h1>
        Monthly Packages. <br />
        Excitement delivered daily.
      </h1>
      <p>
        What's the best way for the latest video games and peripherals? How
        about never shopping at all? You will get new stuff on your doorstep -
        every month
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
);

export default HeroPanel;
