import { theming } from "@/theming";
import React from "react";
import "./Hero.css";
import "../../assets/fonts.css";
import Button from "../Button/Button";

const Hero = () => {
  const labels = {
    title: "Anemona Bistrita",
    description: "Aranjamente florale, parfumuri, cadouri, suveniruri",
  };

  return (
    <div
      id="hero"
      className="hero"
      style={{ width: theming.widthFull, height: theming.heightFull }}
    >
      <h1
        style={{
          fontFamily: theming.headerFontFamily,
          fontSize: theming.headerSize,
          color: theming.headerColor,
          fontWeight: theming.fontWeightHeader,
        }}
      >
        {labels.title}
      </h1>
      <p
        style={{
          fontSize: theming.pSize,
          color: theming.pColor,
          fontFamily: theming.pFontFamily,
        }}
      >
        {labels.description}
      </p>
      <Button text="0773 885 401" href="tel:0773885401"></Button>
    </div>
  );
};

export default Hero;
