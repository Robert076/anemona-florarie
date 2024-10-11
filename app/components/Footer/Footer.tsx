import React from "react";
import "./Footer.css";
import { theming } from "@/theming";

const Footer = () => {
  return (
    <div
      style={{
        width: theming.widthFull,
        height: theming.heightFooter,
        color: theming.footerTextColor,
      }}
      className="footer"
    >
      © Anemona. Toate drepturile rezervate.
    </div>
  );
};

export default Footer;
