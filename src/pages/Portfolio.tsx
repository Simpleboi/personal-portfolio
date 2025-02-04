import { Nav } from "../components/nav";
import "../styles/portfolio.scss";
import blogPost from "/assets/images/blog-post-one.jpg";

interface PortfolioCardProps {
  title: string;
  link: string;
  image: string;
  desc: string;
}

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
      <a href={link} target="_blank">Learn more <i className='bx bx-right-arrow-alt'></i></a>
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
        <PortfolioCard 
        title="SimplyPi"
        desc="a learning platform to help math and science get a feel for something else"
        link="something"
        image={blogPost}
        />
        <PortfolioCard 
        title="SimplyPi"
        desc="a learning platform to help math and science get a feel for something else"
        link="something"
        image={blogPost}
        />
      </div>
    </section>
  );
};
