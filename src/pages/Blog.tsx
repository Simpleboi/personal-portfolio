import { Nav } from "../components/nav";
import "../styles/Blog.scss";

export const BlogBanner = () => {
  return (
    <div className="blogBanner-container">
      <h4>Welcome to my blog :D</h4>
      <h1>
        Thoughts & <span>&lt;Insights/&gt;</span>
      </h1>
      <h2>
        Sharing my <span>&lt;Journey/&gt;</span> through web development,
        Technology, and life
      </h2>
      <div>
        <i className="bx bx-chevron-down"></i>
      </div>
    </div>
  );
};

const Filters = [
  "Web Development",
  "React",
  "TypeScript",
  "AI",
  "Technology",
  "Future Trends",
  "Programming",
];

export const BlogFilter = () => {
  return (
    <section className="blog-filter-container">
      <div className="filter-top">
        <input type="text" placeholder="Search &lt;blog/&gt; posts..." />
      </div>
      <div className="filter-bottom">
        {Filters.map((element) => {
          return <button>{element}</button>;
        })}
      </div>
    </section>
  );
};

export const BlogNewsLetter = () => {
  return (
    <section className="blog-newsletter">
      <div className="newsletter-container">
        <h1>Stay Updated</h1>
        <h3>Join my newsletter to recieve the latest posts and insights directly in your inbox</h3>
        <form action="">
          <input type="email"
          placeholder="Enter your email" 
          required/>
          <input type="submit" value="Subscribe"/>
        </form>
      </div>
    </section>
  );
};

export const Blog = () => {
  return (
    <section id="blog">
      <Nav />
      <BlogBanner />
      <BlogFilter />
      <BlogNewsLetter />
    </section>
  );
};
