import React from "react";
import { Link } from "react-router-dom";
import { BlogPostProps } from "../pages/Blog";
import "../styles/BlogPostCard.scss";

export const BlogPostCard: React.FC<BlogPostProps> = ({
  postName = "Post Name",
  postDesc = "A basic Description",
  postDate = "January 1st, 2025",
  filters = ["General"],
  image,
  id,
}) => {
  return (
    <article className="blog-post-card">
      <div className="blog-post-image">
        <img src={image} alt={postName} />
        <div className="post-date">
          <span>{postDate}</span>
        </div>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-categories">
          {filters.map((filter, index) => (
            <span key={index} className="category-tag">
              {filter}
            </span>
          ))}
        </div>
        <h2 className="blog-post-title">{postName}</h2>
        <p className="blog-post-excerpt">{postDesc}</p>
        <Link to={`/blog/${id}`} className="read-more-link">
          Read More <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
