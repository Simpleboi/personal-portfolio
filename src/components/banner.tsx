import React from "react";
import "../styles/banner.scss";


export const BannerBTN: React.FC = () => {
  return <button className="banner-btn">Contact Me</button>;
};

export const Banner: React.FC = () => {
  return (
    <header>
      <div className="banner-container">
        <h2 className="banner-header">Good Morning!👋🏽</h2>
        <h1 className="banner-name">I Am Nathaniel Paz</h1>
        <h2 className="banner-subheading">
          Aspiring Computer Scientist and Web Developer
        </h2>

        <div className="social-container">
          <div className="social-inner-container">
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="#">
              <i className="bx bxl-discord-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
