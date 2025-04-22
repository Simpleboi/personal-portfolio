import React from "react";
import "../styles/skillCard.scss";

// Import icons
import HTML from "/assets/icons/html.png";
import CSS from "/assets/icons/css.png";
import JS from "/assets/icons/js.png";
import TS from "/assets/icons/ts.png";
import RCT from "/assets/icons/react.png";
import SASS from "/assets/icons/sass.png";
import BS from "/assets/icons/bootstrap.png";
import DB from "/assets/icons/db.png";
import NODE from "/assets/icons/node.png";
import PY from "/assets/icons/python.png";
import XD from "/assets/icons/xd.png";
import FIG from "/assets/icons/figma.png";
import BASH from "/assets/icons/gnu-bash.png";
import LINUX from "/assets/icons/linux.png";

interface SkillProps {
  name: string;
  icon: string;
  level?: number; // Optional skill level from 1-5
}

interface CategoryProps {
  title: string;
  skills: SkillProps[];
}

const SkillIcon: React.FC<{ url: string; name: string; level?: number }> = ({
  url,
  name,
  level = 3,
}) => {
  return (
    <div className="skill-icon">
      <div className="skill-icon-wrapper">
        <img src={url} alt={name} />
      </div>
      <div className="skill-details">
        <span className="skill-name">{name}</span>
        <div className="skill-level">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`level-dot ${i < level ? "filled" : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkillCategory: React.FC<CategoryProps> = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h2 className="category-title">{title}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            url={skill.icon}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

export const SkillsData = {
  frontend: [
    { name: "HTML", icon: HTML, level: 5 },
    { name: "CSS", icon: CSS, level: 5 },
    { name: "JavaScript", icon: JS, level: 4 },
    { name: "TypeScript", icon: TS, level: 4 },
    { name: "React", icon: RCT, level: 5 },
    { name: "SASS", icon: SASS, level: 4 },
    { name: "Bootstrap", icon: BS, level: 3 },
  ],
  backend: [
    { name: "Databases", icon: DB, level: 3 },
    { name: "Node.js", icon: NODE, level: 4 },
    { name: "Python", icon: PY, level: 3 },
  ],
  other: [
    { name: "Adobe XD", icon: XD, level: 3 },
    { name: "Figma", icon: FIG, level: 4 },
    { name: "Bash", icon: BASH, level: 3 },
    { name: "Linux", icon: LINUX, level: 3 },
  ],
};

export const SkillCard: React.FC = () => {
  return (
    <div className="skills-card-container">
      <SkillCategory
        title="Frontend Development"
        skills={SkillsData.frontend}
      />
      <SkillCategory title="Backend Development" skills={SkillsData.backend} />
      <SkillCategory title="Tools & Platforms" skills={SkillsData.other} />
    </div>
  );
};
