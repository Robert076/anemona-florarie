import React from "react";
import { theming } from "@/theming";
import "../../assets/fonts.css";
import "./Button.css";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <a href={href}>
      <button
        style={{
          width: theming.buttonWidth,
          height: theming.buttonHeight,
          background: theming.buttonBackground,
          fontFamily: theming.buttonFontFamily,
          fontSize: theming.buttonFontSize,
          color: theming.buttonTextColor,
          border: theming.buttonBorder,
          marginTop: theming.marginSmall,
        }}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
