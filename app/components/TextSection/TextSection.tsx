import { theming } from "@/theming";
import React from "react";
import "./TextSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../Button/Button";

interface TextSectionProps {
  header: string;
  text: string;
  buttonText: string;
}

const TextSection: React.FC<TextSectionProps> = ({ header, text, buttonText }) => {
  return (
    <div className="text-section col-md-6 col-sm-12">
      <div className="wrapper">
        <h1
          style={{
            fontSize: theming.headerSizeSection,
            color: theming.headerColorSection,
            fontFamily: theming.headerFontFamily,
          }}
        >
          {header}
        </h1>
        <p
          style={{
            color: theming.pColorSection,
            fontSize: theming.pSizeSection,
            marginTop: theming.marginSmall,
            maxWidth: theming.pSectionMaxWidth,
          }}
        >
          {text}
        </p>
        <Button text={buttonText} href="tel:0773885401" />
      </div>
    </div>
  );
};

export default TextSection;
