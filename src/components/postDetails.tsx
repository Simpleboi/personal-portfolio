import { PostOne } from "../posts/intro";

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
];
