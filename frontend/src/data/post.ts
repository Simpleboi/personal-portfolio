import React from "react";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  component: React.LazyExoticComponent<React.ComponentType>;
};

export const Posts: PostMeta[] = [
  {
    slug: "my-first-blog-post",
    title: "My First Blog Post!",
    description: "Why I made the blog and what I’ll write about.",
    date: "March 6th, 2025",
    tags: ["Web Development", "Personal", "Nate.jsx"],
    image: "/assets/images/logo.jpg",
    component: React.lazy(() => import("../posts/intro")),
  },
  {
    slug: "sinners",
    title: "Sinners judging other sinners",
    description:
      "A small rant about a society full of sinners, judging other sinners for sinning differently",
    date: "April 4th, 2025",
    tags: ["Mental-health", "Personal"],
    image: "/assets/images/sinner.jpg",
    component: React.lazy(() => import("../posts/judgement")),
  },
  {
    slug: "burn-out",
    title: "Don't Burn Yourself Out",
    description:
      "Feeling drained and overwhelmed by work is a tough spot. This post explores the dangers of pushing yourself too hard and hitting burnout.",
    date: "April 29th, 2025",
    tags: ["Mental-health", "Personal", "Burnout"],
    image: "/assets/images/burnout.jpg",
    component: React.lazy(() => import("../posts/burnout")),
  },
  {
    slug: "comparison",
    title: "Comparing yourself to Others",
    description:
      "This post talks about not comparing yourself to others and unlocking greater self-acceptance by letting go of comparisons.",
    date: "April 30th, 2025",
    tags: ["Mental-health", "Personal", "Self Love"],
    image: "/assets/images/comparison.jpg",
    component: React.lazy(() => import("../posts/comparison")),
  },
  {
    slug: "tailwindcss",
    title: "Why I switched from SASS to TailwindCSS",
    description:
      "This post talks about why I switched over my styles from SASS to TailwindCSS in all my future projects.",
    date: "May 2nd, 2025",
    tags: ["Mental-health", "SASS", "TailwindCSS"],
    image: "/assets/images/tailwind.png",
    component: React.lazy(() => import("../posts/Tailwind")),
  },
  {
    slug: "pride",
    title: "Pride is the deadliest sin of all",
    description:
      "This post talks about how pride almost destroyed my entire life and how the journey toward humility helped rebuild what I lost",
    date: "May 3rd, 2025",
    tags: ["Mental-health", "Pride", "Personal"],
    image: "/assets/images/pride.jpg",
    component: React.lazy(() => import("../posts/Pride")),
  },
  {
    slug: "genesis",
    title: "Genesis Update 0.9.3",
    description:
      "This post talks about production updates for the Genesis programming Language version 0.9.3",
    date: "June 16th, 2025",
    tags: ["Web Development", "Programming", "TypeScript"],
    image: "/assets/images/genesis.png",
    component: React.lazy(() => import("../posts/genv093")),
  },
  {
    slug: "reactjs",
    title: "React.js update after 1 year",
    description:
      "This post talks about my experience and overall feelings with the React.js library",
    date: "June 23rd, 2025",
    tags: ["Web Development", "Programming", "React"],
    image: "/assets/images/React.webp",
    component: React.lazy(() => import("../posts/ReactUpdate")),
  },
  {
    slug: "betrayal",
    title: "Betrayal",
    description:
      "This post is a story on a betrayal I endured and how I overcame it, and so can you.",
    date: "September 25th, 2025",
    tags: ["Personal", "Mental Health", "Self Help"],
    image: "/assets/images/betrayal.jpg",
    component: React.lazy(() => import("../posts/Betrayal")),
  },
  {
    slug: "Love",
    title: "Love",
    description:
      "This post is an introspective look at love, what it is, what it isn’t, and learning to live fully even when love no longer stays.",
    date: "October 5th, 2025",
    tags: ["Personal", "Mental Health", "Love"],
    image: "/assets/images/love.jpg",
    component: React.lazy(() => import("../posts/Love")),
  },
  {
    slug: "healing",
    title: "The Sound of Healing",
    description:
      "This post talks about a sound that follows heartbreak, not the echo of loss, but the whisper of something new growing in its place. That’s the sound I learned to listen for.",
    date: "October 7th, 2025",
    tags: ["Personal", "Mental Health", "Healing"],
    image: "/assets/images/healing.jpg",
    component: React.lazy(() => import("../posts/Healing")),
  },
  {
    slug: "trauma",
    title: "The Weight of Holding On",
    description:
      "This post is about understanding the pull of toxic love, the weight of staying out of fear, and the peace that comes when you finally choose yourself.",
    date: "October 9th, 2025",
    tags: ["Personal", "Mental Health", "Trauma Bonding"],
    image: "/assets/images/trauma.jpg",
    component: React.lazy(() => import("../posts/trauma")),
  },
  {
    slug: "right-or-wrong",
    title: "What Makes Someone a Bad Person?",
    description:
      "This post challenges the idea of absolute morality by asking uncomfortable questions about judgment, justice, and human behavior. It explores whether “good” and “bad” are fixed truths, or just reflections of what society chooses to believe.",
    date: "October 15th, 2025",
    tags: ["Personal", "Mental Health", "Morality"],
    image: "/assets/images/right-and-wrong.jpg",
    component: React.lazy(() => import("../posts/Badpeople")),
  },
  {
    slug: "education",
    title: "Education isn’t broken, it’s Misunderstood",
    description:
      "This post counters the way we think about education. From failing grades to a passion for teaching, I share how real learning doesn’t come from passing tests, it comes from curiosity, failure, and the courage to think differently.",
    date: "October 17th, 2025",
    tags: ["Personal", "Mental Health", "Education"],
    image: "/assets/images/education.jpg",
    component: React.lazy(() => import("../posts/Education")),
  },
];
