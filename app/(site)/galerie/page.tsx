import React from "react";
import "./galerie.css";
import { theming } from "@/theming";

const page = () => {
  return (
    <div
      style={{ padding: theming.galleryPadding, background: theming.backgroundFooter }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/2.jpeg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/19.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/3.jpeg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/4.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/6.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/9.jpeg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/21.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/22.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/23.jpeg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/11.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/24.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/17.jpeg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/25.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/26.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/27.jpeg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/28.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/29.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/30.jpeg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/31.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/33.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/32.jpeg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/11.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/24.jpeg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="galerie/17.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
