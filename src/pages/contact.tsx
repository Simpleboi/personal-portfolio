import React from "react";
import "../styles/contact.scss";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="left-wrapper">
        <h1>Contact Me</h1>
        <p>Interested in working with me? Fill out some info and I'll be in touch shortly. Can't wait to hear from you!</p>
      </div>
      <div className="right-wrapper">
        <form action="#">
          <div className="name-wrapper">
            <label htmlFor="FirstName" className="first-name">
              First Name
              <input type="text" placeholder="John" />
            </label>
            <label htmlFor="LastName" className="last-name">
              Last Name
              <input type="text" placeholder="Doe" />
            </label>
          </div>
          <label htmlFor="email" className="email">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="example@something.com"
            />
          </label>

          <label htmlFor="message" className="message">
            Message
            <textarea
              name="message"
              id=""
              placeholder="Enter your message..."
            ></textarea>
          </label>

          <input type="submit" className="submit"/>
        </form>
      </div>
    </section>
  );
};