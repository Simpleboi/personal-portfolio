import React, { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { Nav } from "../components/nav";
import "../styles/Blog.scss";
import "../styles/blogPost.scss";
import BlogPostCard from "../components/BlogPostCard";
import { Posts } from "@/data/post"; 

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

interface BlogFilterProps {
  onSearch: (term: string) => void;
}

export const BlogFilter: React.FC<BlogFilterProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <section className="blog-filter-container">
      <div className="filter-top">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search &lt;blog/&gt; posts..."
            onChange={handleInputChange}
          />
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className="filter-bottom">
        {Filters.map((element, index) => (
          <button key={index}>{element}</button>
        ))}
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
  "Technology",
  "Personal",
  "Programming",
];

export const Blog = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPosts = React.useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return Posts;
    return Posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchTerm]);

  const handleSearch = (term: string) => setSearchTerm(term);

  return (
    <section id="blog">
      <Nav />
      <BlogBanner />
      <BlogFilter onSearch={handleSearch} />
      <div className="post-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((p) => (
            <BlogPostCard
              key={p.slug}
              slug={p.slug}
              postName={p.title}
              postDesc={p.description}
              postDate={new Date(p.date).toLocaleDateString()}
              filters={p.tags}
              image={p.image}
              onSearch={handleSearch}
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
  const { slug = "" } = useParams<{ slug: string }>();
  const post = Posts.find((p) => p.slug === slug);
  if (!post) return <h1>Post not found</h1>;

  const Content = post.component;

  return (
    <div className="blogpost-details">
      <div className="go-back">
        <Link to="/blog">
          <i className="bx bx-left-arrow-alt"></i>Go Back
        </Link>
      </div>
      <hr />
      <h1 className="current-post-name">{post.title}</h1>
      <figure className="img-container">
        <img src={post.image} alt={post.title} className="current-post-img" />
      </figure>
      <h2 className="current-post-date">
        {new Date(post.date).toLocaleDateString()}
      </h2>
      <div className="filters">
        {post.tags.map((tag) => (
          <span key={tag} className="filter">
            {tag}
          </span>
        ))}
      </div>
      <hr />
      <div className="post-content">
        <Suspense fallback={<p>Loading post…</p>}>
          <Content />
        </Suspense>
      </div>
      <div className="social-share">
        <h3>Share this post</h3>
        <div className="share-buttons">
          <button className="share-button twitter">
            <i className="bx bxl-twitter"></i>
          </button>
          <button className="share-button facebook">
            <i className="bx bxl-facebook"></i>
          </button>
          <button className="share-button linkedin">
            <i className="bx bxl-linkedin"></i>
          </button>
          <button className="share-button copy-link">
            <i className="bx bx-link"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
