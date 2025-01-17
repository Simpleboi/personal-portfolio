import { Nav } from "../components/nav";
import "../styles/portfolio.scss";

export const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <Nav />
      <div className="port-header">
        <h1>My Personal <span>&lt;Projects/&gt;</span></h1>
      </div>
      <div className="port-items"></div>
    </section>
  );
};
