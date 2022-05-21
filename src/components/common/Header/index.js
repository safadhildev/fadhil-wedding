import React from "react";
import { assets } from "../../../assets";

import "./styles.css";

const Header = ({ text }) => {
  return (
    <div className="title-wrapper">
      <div className="title-image" data-aos="fade-right">
        <img alt="" src={assets.strokeGold} />
      </div>
      <p className="title" data-aos="fade-left">
        {text}
      </p>
    </div>
  );
};

export default Header;
