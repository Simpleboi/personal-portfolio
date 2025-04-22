import React from "react";
import { Nav } from "../components/nav";
import { Banner } from "../components/banner";
import { BannerBTN } from "../components/banner";
import "../styles/hero.scss";

export const Home: React.FC = () => {
  return (
    <main id="main-content" className="hero-container">
      <div className="background-image"></div>
      <div className="content">
        <Nav />
        <div className="hero-content-wrapper">
          <Banner />
          <div className="bannerBTN-container">
            <BannerBTN />
          </div>
        </div>
      </div>
    </main>
  );
};
