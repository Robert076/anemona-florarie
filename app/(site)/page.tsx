import React from "react";
import Hero from "../components/Hero/Hero";
import Flowers from "../components/Flowers/Flowers";
import Perfumes from "../components/Perfumes/Perfumes";
import Footer from "../components/Footer/Footer";
import FloatingLogo from "../components/FloatingLogo/FloatingLogo";

const page = () => {
  return (
    <>
      <FloatingLogo />
      <Hero />
      <Flowers />
      <Perfumes />
      <Footer />
    </>
  );
};

export default page;
