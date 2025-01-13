import { Nav } from "../components/nav";
import { useParams, Link } from "react-router-dom";
import PostOne from "/assets/images/blog-post-one.jpg";
import "../styles/Blog.scss";
import { blogPosts } from "../components/postDetails";

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

export const BlogFilter = () => {
  return (
    <section className="blog-filter-container">
      <div className="filter-top">
        <div className="input-container">
          <input type="text" placeholder="Search &lt;blog/&gt; posts..." />
          <i className="bx bx-search"></i>
        </div>
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
        <h3>
          Join my newsletter to recieve the latest posts and insights directly
          in your inbox
        </h3>
        <form action="">
          <input type="email" placeholder="Enter your email" required />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </section>
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

export interface BlogPostProps {
  postName?: string;
  postDesc?: string;
  postDate?: string;
  filters?: string[];
  image?: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  postName = "Post Name",
  postDesc = "A basic Description",
  postDate = "Januaray 1st, 2025",
  filters = ["General"],
  image,
}) => {
  return (
    <div className="blogpost-container">
      <figure>
        <img src={image || PostOne} alt="" />
      </figure>
      <div className="filter-container">
        <ul>
          {filters.map((filter, index) => (
            <button key={index}>{filter}</button>
          ))}
        </ul>
      </div>
      <h1>{postName}</h1>
      <p>{postDesc}</p>
      <h2>{postDate}</h2>
      <div className="read-full-post">
        <Link to={`/blog/${encodeURIComponent(postName)}`} className="btn-link">
          <button className="rfp">Read Full Post</button>
        </Link>
      </div>
    </div>
  );
};

export const Blog = () => {
  return (
    <section id="blog">
      <Nav />
      <BlogBanner />
      <BlogFilter />
      <div className="post-container">
        {blogPosts.map((post) => (
          <BlogPost
            postName={post.postName}
            postDesc={post.postDate}
            postDate={post.postDate}
            filters={post.filters}
            image={post.image}
          />
        ))}
      </div>
      <BlogNewsLetter />
    </section>
  );
};

export const BlogPostDetails = () => {
  const { postName } = useParams();
  const post = blogPosts.find((post) => post.postName === postName);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="blogpost-details">
      <h1>{post.postName}</h1>
      <img src={post.image} alt={post.postName} />
      <p>{post.postDesc}</p>
      <h2>{post.postDate}</h2>
      <div className="filters">
        {post.filters.map((filter, index) => (
          <span key={index} className="filter">
            {filter}
          </span>
        ))}
      </div>
    </div>
  );
};
