import { theming } from "@/theming";
import React from "react";
import "./Flowers.css";
import TextSection from "../TextSection/TextSection";
import ImagesSection from "../ImagesSection/ImagesSection";
import { buttonTexts, headers, texts, imagesFlowers } from "@/typography";

const Flowers = () => {
  return (
    <div
      className="flowers row"
      style={{
        width: theming.widthFull,
        padding: theming.flowersPadding,
      }}
    >
      <TextSection header={headers[0]} text={texts[0]} buttonText={buttonTexts[0]} />
      <ImagesSection
        image1={imagesFlowers[1]}
        image2={imagesFlowers[3]}
        image3={imagesFlowers[2]}
        image4={imagesFlowers[0]}
      />
    </div>
  );
};

export default Flowers;
