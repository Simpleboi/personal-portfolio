import React from "react";
import "../styles/about.scss";
import PFP from "/assets/images/logo.jpg";
import { Nav } from "../components/nav";
import { Skills } from "./skills";

export const AboutDesc = () => {
  return (
    <div className="desc-container">
      <div className="inner-left">
        <h1>About <span>&lt;Me/&gt;</span></h1>
        <p>
          Good Morning👋🏽 My name is Nathaniel Paz, I'm a 21-year-old aspiring
          computer scientist and web developer with a passion for creating
          innovative web applications. <br />
          <br />
          My journey with coding began during my sophomore year of high school
          when I took AP Computer Science Principles. The first language I ever
          touched was HTML, I still remember the excitement of creating my first
          button. That moment sparked a passion for web development, and since
          then, I've dedicated myself to learning and mastering web technologies
          like CSS, JavaScript and more.
          <br />
          <br />
          Over the years, I've put my knowledge into action by working on
          various projects and taking on leadership roles. I'm currently the
          President of the{" "}
          <a href="https://sjcsouthcompsci.org/" target="_blankt">
            Computer Science Club
          </a>{" "}
          at my college, where I guide and inspire other students in thier
          coding journeys. Some of my personal projects include:
          <br />
          <br />
          <ul>
            <li>
              <a href="https://github.com/Simpleboi/Neutron" target="_blank">
                Neutron
              </a>{" "}
              | A custom-built web browser made with electron.js and React
            </li>
            <li>
              <a href="https://github.com/Simpleboi/SimplyPi" target="_blank">
                SimplyPi
              </a>{" "}
              | A specialized learning platform for math and computer science
              related courses
            </li>
            <li>
              <a href="https://github.com/Simpleboi/sparkcss" target="_blank">
                SparkCSS
              </a>{" "}
              | A custom CSS preprocessor that utilizes framework rich features
              with a utility-first approach
            </li>
            <li>
              <a href="https://github.com/Simpleboi/FireSpark" target="_blank">
                FireSpark
              </a>{" "}
              | A framework-agnostic component based library aimed to speed-up web development. Built on top of SparkCSS.
            </li>
          </ul>
          <br />
          My current tech stack includes Vite as a build tool for fast
          development, React for dynamic front-end UI, and Node.js + Express for
          backend logic and API development. I use SparkCSS, a custom CSS
          preprocessor I built, along with TypeScript to ensure type safety and
          cleaner, maintainable code. For backend services, I utilize Firebase
          for authentication, database, and hosting needs, while Netlify serves
          as a platform for deploying static web applications. This stack allows
          me to create fast, responsive, and scalable full-stack applications
          with modern development practices.
          <br />
          <br />I have a deep love for programming and problem-solving,
          especially when it comes to tackling complex software challenges.
          While my main focus is on development over design, I'm more than
          capable of handling both sides of web development to create fully
          functional, visually appealing websites. If you're interesting in
          working with me, <a href="mailto:n8ther8.jsx@gmail.com">reach out</a>.
          I'm always looking for opportunities to grow, build, and push the
          limits of what's possible.
        </p>
      </div>
      <div className="about-right-container">
        <figure className="about-img-container">
          <img src={PFP} alt="" />
        </figure>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about">
      <Nav />
      <AboutDesc />
      <Skills />
    </section>
  );
};
