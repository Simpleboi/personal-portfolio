import React from "react";
import "../styles/skills.scss";
import { SkillsCardFE, SkillsCardBE, SkillsCardOther } from "../components/card";


export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h1 className="skills-header">&lt;Skills/&gt;</h1>
      <div className="skills-wrapper">
        <SkillsCardFE />
        <SkillsCardBE />
        <SkillsCardOther />
      </div>
    </section>
  );
};
