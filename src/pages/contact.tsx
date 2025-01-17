import "../styles/contact.scss";
import { Nav } from "../components/nav";

export const ContactForm = () => {
  return (
    <section className="contact">
      <div className="left-wrapper">
        <h1>Contact Me</h1>
        <p>
          Interested in working with me? Fill out some info and I'll be in touch
          shortly. Can't wait to hear from you!
        </p>
        <p style={{ color: "red" }}>
          This section is still in development, the form doesn't work yet
        </p>
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

          <input type="submit" className="submit" />
        </form>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <>
      <Nav />
      <Contact />
    </>
  );
};
