import React from "react";
import { Nav } from "../components/nav";
import { Banner } from "../components/banner";
import { BannerBTN } from "../components/banner";
import "../styles/hero.scss";

export const Home: React.FC = () => {
  return (
    <main className="hero-container">
      <div className="background-image"></div>
      <div className="content">
        <Nav />
        <Banner />
        <div className="bannerBTN-container">
          <BannerBTN />
        </div>
      </div>
    </main>
  );
};
