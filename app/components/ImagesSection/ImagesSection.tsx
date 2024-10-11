import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { theming } from "@/theming";
import "./ImagesSection.css";

interface ImagesSectionProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

const ImagesSection: React.FC<ImagesSectionProps> = ({ image1, image2, image3, image4 }) => {
  const alt = "Imagine";

  return (
    <div className="images-section col-md-6 col-sm-12">
      <div className="row">
        <img
          style={{
            width: theming.imageWidth,
            height: theming.imageHeight,
            marginBottom: theming.marginSmall,
            marginRight: theming.marginSmall,
          }}
          src={image1}
          alt={alt}
        />
        <img
          className="d-none d-lg-block"
          style={{
            width: theming.imageWidth,
            height: theming.imageHeight,
            marginBottom: theming.marginSmall,
          }}
          src={image2}
          alt={alt}
        />
      </div>
      <div className="row">
        <img
          className="d-none d-lg-block"
          style={{
            width: theming.imageWidth,
            height: theming.imageHeight,
            marginBottom: theming.marginSmall,
            marginRight: theming.marginSmall,
          }}
          src={image3}
          alt={alt}
        />
        <img
          className="d-none d-lg-block"
          style={{
            width: theming.imageWidth,
            height: theming.imageHeight,
            marginBottom: theming.marginSmall,
          }}
          src={image4}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default ImagesSection;
