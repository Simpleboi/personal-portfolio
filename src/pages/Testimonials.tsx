import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import "../styles/Testimonials.scss";
import { Nav } from "../components/nav";

export const Testimonials: React.FC = () => {
  // Sample testimonial data - in a real app, this might come from an API or CMS
  const testimonials = [
    {
      id: 1,
      quote:
        "This is temporary Text",
      name: "Name",
      title: "Job Title",
      image: "../../assets/images/testimonials/sarah.jpg",
    },
    {
      id: 2,
      quote:
        "This is temporary work",
      name: "Name",
      title: "Job Title",
      image: "../../assets/images/testimonials/michael.jpg",
    },
    {
      id: 3,
      quote:
        "Temporary Text",
      name: "Name",
      title: "Computer Science Professor, Tech University",
      image: "../../assets/images/testimonials/emily.jpg",
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
