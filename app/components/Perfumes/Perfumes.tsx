import { theming } from "@/theming";
import React from "react";
import "./Perfumes.css";
import { buttonTexts, headers, texts, imagesPerfumes } from "@/typography";
import TextSection from "../TextSection/TextSection";
import ImagesSection from "../ImagesSection/ImagesSection";

const Perfumes = () => {
  return (
    <div
      className="perfumes row"
      style={{
        width: theming.widthFull,
        padding: theming.flowersPadding,
      }}
    >
      <ImagesSection
        image1={imagesPerfumes[3]}
        image2={imagesPerfumes[2]}
        image3={imagesPerfumes[0]}
        image4={imagesPerfumes[1]}
      />
      <TextSection header={headers[1]} text={texts[1]} buttonText={buttonTexts[1]} />
    </div>
  );
};

export default Perfumes;
