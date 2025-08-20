import React from "react";
import "../styles/aboutCard.scss";
import PFP from "/assets/images/logo.jpg";

export const AboutCard: React.FC = () => {
  return (
    <div className="about-card">
      <div className="about-card-content">
        <h1>
          About <span>&lt;Me/&gt;</span>
        </h1>
        <p>
          Good Morning👋🏽 My name is Nathaniel Paz, I'm a 22-year-old aspiring
          computer scientist and web developer with a passion for creating
          innovative web applications.
          <br />
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
              <a href="https://github.com/Simpleboi/JournalXP" target="_blank">
                JournalXP
              </a>{" "}
              | A gameified mental health journaling app that rewards users with
              XP for completing self-care tasks, tracking thier mood, etc.
            </li>
            <li>
              <a href="https://github.com/Simpleboi/Genesis" target="_blank">
                Genesis
              </a>{" "}
              | A general-purpose programming language designed with a focus on
              web development.
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
              | A framework-agnostic component based library aimed to speed-up
              web development. Built on top of SparkCSS.
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
          <br />
          <br />
          <div className="resume-section">
            <h2>Resume / CV</h2>
            <p>Want to learn more about my experience and qualifications?</p>
            <a
              href="/assets/resume/Resume.pdf"
              download="Nathaniel_Paz_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download-btn"
            >
              Download Resume (PDF)
            </a>
          </div>
        </p>
      </div>
      <div className="about-card-image">
        <div className="image-container">
          <img src={PFP} alt="Nathaniel Paz" />
        </div>
      </div>
    </div>
  );
};
