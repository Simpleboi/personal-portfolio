import { PostOne } from "../posts/intro";
import { Judgement } from "../posts/judgement";
import { Burnout } from "../posts/burnout";
import { Comparison } from "../posts/comparison";
import { Tailwind } from "../posts/Tailwind";
import { Pride } from "../posts/Pride";

export const blogPosts = [
  {
    id: 1,
    postName: "My First Blog Post!",
    postDesc:
      "A short post talking about why I made the blog and my goals redgarding them.",
    postDate: "March 6th, 2025",
    filters: ["Web Development", "Personal", "Nate.jsx"],
    image: "/assets/images/logo.jpg",
    content: <PostOne />,
  },
  {
    id: 2,
    postName: "Sinners judging other Sinners",
    postDesc:
      "A small rant about a society full of sinners, judging other sinners for sinning differently",
    postDate: "April 4th, 2025",
    filters: ["Mental-health", "Personal"],
    image: "/assets/images/sinner.jpg",
    content: <Judgement />,
  },
  {
    id: 3,
    postName: "Don't Burn Yourself Out",
    postDesc:
      "Feeling drained and overwhelmed by work is a tough spot. This post explores the dangers of pushing yourself too hard and hitting burnout.",
    postDate: "April 29th, 2025",
    filters: ["Mental-health", "Personal", "Burnout"],
    image: "/assets/images/burnout.jpg",
    content: <Burnout />,
  },
  {
    id: 4,
    postName: "Comparing yourself to Others",
    postDesc:
      "This post talks about not comparing yourself to others and unlocking greater self-acceptance by letting go of comparisons.",
    postDate: "April 30th, 2025",
    filters: ["Mental-health", "Personal", "Self Love"],
    image: "/assets/images/comparison.jpg",
    content: <Comparison />,
  },
  {
    id: 5,
    postName: "Why I switched from SASS to TailwindCSS",  
    postDesc:
      "This post talks about why I switched over my styles from SASS to TailwindCSS in all my future projects",
    postDate: "May 2nd, 2025",
    filters: ["Web Development", "SASS", "TailwindCSS"],
    image: "/assets/images/tailwind.png",
    content: <Tailwind />,
  },
  {
    id: 6,
    postName: "Pride is the deadliest sin of all",  
    postDesc:
      "This post talks about how pride almost destroyed my entire life how the journey toward humility helped rebuild what I lost",
    postDate: "May 3nd, 2025",
    filters: ["Mental Health", "Pride", "Personal"],
    image: "/assets/images/pride.jpg",
    content: <Pride />,
  }
];
