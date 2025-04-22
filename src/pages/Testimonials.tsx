import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import "../styles/Testimonials.scss";

export const Testimonials: React.FC = () => {
  // Sample testimonial data - in a real app, this might come from an API or CMS
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Nathaniel was an absolute pleasure. His technical skills and attention to detail resulted in a website that exceeded our expectations.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
      image: "../../assets/images/testimonials/sarah.jpg",
    },
    {
      id: 2,
      quote:
        "Nathaniel's problem-solving abilities and creative approach to challenges made our collaboration incredibly productive. I highly recommend his services.",
      name: "Michael Chen",
      title: "Lead Developer, InnovateSoft",
      image: "../../assets/images/testimonials/michael.jpg",
    },
    {
      id: 3,
      quote:
        "As a professor, I was impressed by Nathaniel's dedication to learning and his ability to apply complex concepts to real-world projects. He has a bright future ahead.",
      name: "Dr. Emily Rodriguez",
      title: "Computer Science Professor, Tech University",
      image: "../../assets/images/testimonials/emily.jpg",
    },
  ];

  return (
    <div className="testimonials-container">
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
