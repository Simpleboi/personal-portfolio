import { Nav } from "../components/nav";
import "../styles/Blog.scss";

export const BlogBanner = () => {
  return (
    <div className="blogBanner-container">
      <h4>Welcome to my blog :D</h4>
      <h1>
        Thoughts & <span>&lt;Insights/&gt;</span>
      </h1>
      <h2>Sharing my <span>&lt;Journey/&gt;</span> through web development, Technology, and life</h2>
      <div><i className='bx bx-chevron-down'></i></div>
    </div>
  );
};

export const Blog = () => {
  return (
    <section id="blog">
      <Nav />
      <BlogBanner />
    </section>
  );
};
