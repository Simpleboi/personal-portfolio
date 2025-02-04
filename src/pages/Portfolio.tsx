import { Nav } from "../components/nav";
import "../styles/portfolio.scss";
import blogPost from "/assets/images/blog-post-one.jpg";

interface PortfolioCardProps {
  title: string;
  link: string;
  image: string;
  desc: string;
}

let PortfolioItems = [
  {
    title: "FireSpark🔥✨",
    desc: "FireSpark is a component-based UI library designed to work seamlessly with SparkCSS. It provides a collection of reusable, customizable UI components, similar to Bootstrap or Tailwind UI, but with enhanced flexibility and performance. FireSpark integrates well with modern frontend frameworks like React and helps developers build elegant, responsive interfaces efficiently.",
    link: "https://firespark.netlify.app/",
    image: blogPost,
  },
  {
    title: "SparkCSS⚡🎨",
    desc: "SparkCSS is a CSS preprocessor with utility-class features, combining the best aspects of SCSS and Tailwind CSS. It offers powerful directives like @snippet and @apply, making it easy to write modular, maintainable, and scalable styles. SparkCSS enhances development speed while keeping styles clean and structured, perfect for large-scale projects.",
    link: "https://sparkcss.org/",
    image: blogPost,
  },
  {
    title: "SimplyPi 🧮📚",
    desc: "SimplyPi is an educational platform focused on math and computer science. It provides downloadable course materials, tutorials, and interactive exercises to help students and self-learners grasp fundamental concepts. SimplyPi aims to make complex topics simple and accessible, offering structured lessons in Algebra, Calculus, and Programming.",
    link: "https://example.com",
    image: blogPost,
  },
];

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  link,
  image,
  desc,
}) => {
  return (
    <div className="port-card-container">
      <figure className="port-image">
        <img src={image} alt="" />
      </figure>
      <h2>{title}</h2>
      <hr />
      <p>{desc}</p>
      <a href={link} target="_blank">
        Learn more <i className="bx bx-right-arrow-alt"></i>
      </a>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <Nav />
      <div className="port-header">
        <h1>
          My Personal <span>&lt;Projects/&gt;</span>
        </h1>
      </div>
      <div className="port-items">
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
    </section>
  );
};
