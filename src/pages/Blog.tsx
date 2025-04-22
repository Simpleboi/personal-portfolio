import React from "react";
import { Nav } from "../components/nav";
import { useParams, Link } from "react-router-dom";
import PostOne from "/assets/images/blog-post-one.jpg";
import "../styles/Blog.scss";
import { blogPosts } from "../components/postDetails";
import "../styles/blogPost.scss";
import BlogPostCard from "../components/BlogPostCard";

export const BlogBanner = () => {
  return (
    <div className="blogBanner-container">
      <div className="blog-banner-content">
        <span className="welcome-text">Welcome to my blog</span>
        <h1 className="blog-title">
          Thoughts & <span className="highlight">&lt;Insights/&gt;</span>
        </h1>
        <p className="blog-subtitle">
          Sharing my <span className="highlight">&lt;Journey/&gt;</span> through
          web development, technology, and life
        </p>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <i className="bx bx-chevron-down"></i>
        </div>
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
        {Filters.map((element, index) => {
          return <button key={index}>{element}</button>;
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
  id: number;
}

export const Blog = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPosts =
    searchTerm.trim() === ""
      ? blogPosts
      : blogPosts.filter((post) =>
          post.postName.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <section id="blog">
      <Nav />
      <BlogBanner />
      <BlogFilter onSearch={handleSearch} />
      <div className="post-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              postName={post.postName}
              postDesc={post.postDesc}
              postDate={post.postDate}
              filters={post.filters}
              image={post.image}
              id={post.id}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No posts found matching "{searchTerm}"</h3>
          </div>
        )}
      </div>
      <BlogNewsLetter />
    </section>
  );
};

export const BlogPostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((post) => post.id.toString() === id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="blogpost-details">
      <div className="go-back">
        <a href="../">
          <i className="bx bx-left-arrow-alt"></i>Go Back
        </a>
      </div>
      <hr />
      <h1 className="current-post-name">{post.postName}</h1>
      <figure className="img-container">
        <img
          src={post.image}
          alt={post.postName}
          className="current-post-img"
        />
      </figure>
      <h2 className="current-post-date">{post.postDate}</h2>
      <div className="filters">
        {post.filters.map((filter, index) => (
          <span key={index} className="filter">
            {filter}
          </span>
        ))}
      </div>
      <hr />
      <div className="post-content">{[post.content]}</div>
    </div>
  );
};
