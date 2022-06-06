import React from "react";
import { assets } from "../../../assets";
import "./styles.css";

const image = assets.marbleBg;

const BackgroundImage = () => {
  return (
    <div className="background-img-wrapper">
      <img alt="" src={image} />
    </div>
  );
};

export default BackgroundImage;
