import { Nav } from "@/components/nav";
// import blogPost from "/assets/images/blog-post-one.jpg";
import compsci from "/assets/images/compsci-logo.png";
import sjcLogo from "/assets/images/sjc-logo.jpg";
import "../styles/portfolio.scss";

interface PortfolioCardProps {
  title: string;
  link: string;
  image: string;
  desc: string;
}

interface LeadershipItemProps {
  title: string;
  role: string;
  period: string;
  description: string;
  image: string;
  achievements: string[];
}

const LeadershipItems: LeadershipItemProps[] = [
  {
    title: "Student Instructor",
    role: "Computer Science Department",
    period: "Spring 2024 - Fall 2025",
    description:
      "Mentored students in programming fundamentals, assisted with coursework, and facilitated hands-on coding workshops to help students master core computer science concepts.",
    image: sjcLogo,
    achievements: [
      "Guided 50+ students through programming assignments",
      "Conducted weekly tutoring sessions and office hours",
      "Developed supplementary learning materials and exercises",
    ],
  },
  {
    title: "President",
    role: "SJC Computer Science Club",
    period: "Spring 2023 - Present",
    description:
      "led the campus computer science club, organizing workshops, coding challenges, and networking events to build a collaborative tech community.",
    image: compsci,
    achievements: [
      "Grew club membership to many active students",
      "Organized monthly projects and coding competitions",
      "Established partnerships with local tech affiliates",
    ],
  },
];

const PortfolioItems: PortfolioCardProps[] = [
  {
    title: "JournalXP🎮📖",
    desc: "JournalXP is a full-featured mental health journaling web application I developed to help users track their mood, daily habits, and personal growth through gamified experiences. Built with React, TypeScript, TailwindCSS, and Firebase for the backend, it lets users sign up securely, write and organize journal entries, and earn XP. ",
    link: "https://journalxp.com/",
    image: "/assets/images/jxp.png",
  },
  {
    title: "Pyra.js⚡🔥",
    desc: "Pyra is a modular build system for modern JavaScript and TypeScript projects. It takes inspiration from the elegance of Vite-like speed with the flexibility of plugin-driven architecture, allowing developers to craft, extend, and optimize builds for any kind of project, from small scripts to full-scale frameworks.",
    link: "https://pyrajs.netlify.app/",
    image: "/assets/images/pyralogo.png",
  },
  {
    title: "FireSpark🔥✨",
    desc: "FireSpark is a component-based UI library designed to speed up developer work flow. It provides a collection of reusable, customizable UI components, similar to Bootstrap or Tailwind UI, but with enhanced flexibility and performance. FireSpark integrates well with React and helps developers build elegant, responsive interfaces efficiently.",
    link: "https://github.com/Simpleboi/FireSpark",
    image: "/assets/images/firespark.png",
  },
  {
    title: "Genesis Programming Language💻",
    desc: "Genesis is a custom programming language I designed to explore language design and compiler development, emphasizing simplicity, stricter typing, and seamless integration with JavaScript environments. Genesis demonstrates my ability to build a parser and transpiler in Node.js that converts C-style syntax into clean JavaScript, so code runs anywhere JS runs without a separate runtime.",
    link: "https://github.com/Simpleboi/Genesis",
    image: "/assets/images/genesis.png",
  },
  {
    title: "SparkCSS⚡🎨",
    desc: "SparkCSS is a CSS preprocessor with utility-class features, combining the best aspects of SCSS and Tailwind CSS. It offers powerful directives like @snippet and @apply, making it easy to write modular, maintainable, and scalable styles. SparkCSS enhances development speed while keeping styles clean and structured, perfect for large-scale projects.",
    link: "https://github.com/Simpleboi/sparkcss",
    image: "/assets/images/sparkcss.png",
  },
  {
    title: "SJC Computer Science Club 💻🚀",
    desc: "The SJC Computer Science Club is a student-led organization dedicated to fostering innovation, learning, and collaboration in computer science and technology. The club provides workshops, coding challenges, hackathons, and networking opportunities to help students expand their skills in programming, cybersecurity, web development, and software engineering.",
    link: "https://sjcsouthcompsci.netlify.app/",
    image: compsci,
  },
  {
    title: "Done By Devonne💅🏽",
    desc: "This project is a responsive web application I built for a nail artist called Devonne Farson. It features a modern, gradient-themed design with pages for service descriptions, and a gallery of nail art. The landing page was made with TypeScript, React, and TailwindCSS to demonstrate a user-friendly and mobile-friendly website",
    link: "https://donebydevonne.netlify.app",
    image: "/assets/images/donebydevonne.png",
  },
];

export const LeadershipCard: React.FC<LeadershipItemProps> = ({
  title,
  role,
  period,
  description,
  image,
  achievements,
}) => {
  return (
    <div className="leadership-card">
      <div className="leadership-card__header">
        <div className="leadership-card__image-wrapper">
          <img src={image} alt={title} className="leadership-card__image" />
        </div>
        <div className="leadership-card__info">
          <h3 className="leadership-card__title">{title}</h3>
          <p className="leadership-card__role">{role}</p>
          <span className="leadership-card__period">{period}</span>
        </div>
      </div>
      <div className="leadership-card__content">
        <p className="leadership-card__description">{description}</p>
        <div className="leadership-card__achievements">
          <h4>Key Achievements:</h4>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  link,
  image,
  desc,
}) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card__image-container">
        <img src={image} alt={title} className="portfolio-card__image" />
        <div className="portfolio-card__overlay"></div>
      </div>
      <div className="portfolio-card__content">
        <h3 className="portfolio-card__title">{title}</h3>
        <p className="portfolio-card__description">{desc}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-card__button"
        >
          <span>View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <Nav />

      {/* Projects Section */}
      <div className="port-header">
        <h1>
          My Personal <span>&lt;Projects/&gt;</span>
        </h1>
      </div>
      <div className="portfolio-grid">
        {PortfolioItems.map((element, index) => (
          <PortfolioCard
            key={index}
            title={element.title}
            desc={element.desc}
            image={element.image}
            link={element.link}
          />
        ))}
      </div>

      {/* Leadership Section */}
      <div className="leadership-section">
        <div className="section-header">
          <h2>
            Leadership & <span>&lt;Involvements/&gt;</span>
          </h2>
          <p className="section-subtitle">
            Building communities and empowering future developers
          </p>
        </div>
        <div className="leadership-grid">
          {LeadershipItems.map((item, index) => (
            <LeadershipCard
              key={index}
              title={item.title}
              role={item.role}
              period={item.period}
              description={item.description}
              image={item.image}
              achievements={item.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
