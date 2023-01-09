import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contacts">
        <div className="content">
          <h2>Contact Us</h2>
          <div className="contactform">
            <form action="https://formspree.io/f/mlekeawy" method="POST">
              <h2>Send Message</h2>
              <div className="inputbox">
                <input type="text" name="name" required />
                <span>Full Name</span>
              </div>
              <div className="inputbox">
                <input type="phone" name="phone" required />
                <span>Mobile no.</span>
              </div>
              <div className="inputbox">
                <textarea name="message" required></textarea>
                <span>The message you need to send... </span>
              </div>
              <div className="inputbox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
