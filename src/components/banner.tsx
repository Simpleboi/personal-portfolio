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
        <h1 className="banner-name">I'm <span>&lt;Nate/&gt;</span></h1>
        <h2 className="banner-subheading">
          Aspiring Computer Scientist and Web Developer
        </h2>

        <div className="social-container">
          <div className="social-inner-container">
            <a href="https://www.instagram.com/n8.jsx/" target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nathaniel-eureste-12641220a/"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/Simpleboi" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UC6hvnNbmotcGge7Hq-wyF_g"
              target="_blank"
            >
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="https://discord.gg/DCszF2VrSm" target="_blank">
              <i className="bx bxl-discord-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
