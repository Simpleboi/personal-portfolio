import React from "react";
import "../styles/about.scss";
import { Nav } from "../components/nav";
import { Skills } from "./skills";
import { AboutCard } from "../components/AboutCard";

export const About: React.FC = () => {
  return (
    <section id="about">
      <Nav />
      <div className="about-container">
        <AboutCard />
      </div>
      <Skills />
    </section>
  );
};
