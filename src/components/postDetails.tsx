import { PostOne } from "../posts/intro";
import { Judgement } from "../posts/judgement";

export const blogPosts = [
  {
    id: 1,
    postName: "My First Blog Post!",
    postDesc:
      "A short post talking about why I made the blog and my goals redgarding them.",
    postDate: "March 6th, 2025",
    filters: ["Web Development", "Personal", "Nate.jsx"],
    image: "/assets/images/blog-post-one.jpg",
    content: <PostOne />,
  },
  {
    id: 2,
    postName: "Sinners judging other Sinners",
    postDesc:
      "A small rant about a society full of sinners, judging other sinners for sinning differently",
    postDate: "April 4th, 2025",
    filters: ["Mental-health", "Personal"],
    image: "/assets/images/blog-post-one.jpg",
    content: <Judgement />,
  },
];
