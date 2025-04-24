import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import "../styles/Testimonials.scss";
import { Nav } from "../components/nav";
import sjc from "/assets/images/sjc-logo.jpg"

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Nathaniel and I worked together on our college's Computer Science Club website. While I handled the design and color choices, he took on the technical side, managing the scripting and content. As president of the club, he helped introduce topics that went beyond what we learned in class, like navigating the job market or programming practices that aren't usually covered in coursework. His passion for learning and diving into new challenges really stood out to me; it's a mindset I believe every CS student should have. In a field where experience outside the classroom matters just as much as grades, he's one of the few who genuinely put in that extra effort.",
      name: "Derrick Martinez ",
      title: "Professor of Computer Science | San Jacinto College",
      image: sjc,
    },
    {
      id: 2,
      quote:
        "This is temporary work",
      name: "Name",
      title: "Job Title",
      image: "../../assets/images/testimonials/michael.jpg",
    },
  ];

  return (
    <div className="testimonials-container">
      <Nav />
      <div className="testimonials-header">
        <h1>Testimonials</h1>
        <p>
          Don't just take my word for it. Here's what others have to say about
          working with me.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};
