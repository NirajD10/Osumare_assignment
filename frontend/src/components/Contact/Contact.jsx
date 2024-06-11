import React from "react";
import "./Contact.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import bluecirclegradient from "../../assets/Images/blue_Ellipse.png";
import redcirclegradient from "../../assets/Images/Ellipse_red.png";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="contact-container" role="article" tabIndex={0}>
      <div className=" contact-section">
        <img
          src={bluecirclegradient}
          alt="Blue Gradient Circle"
          className="contact-bluecircle"
        />
        <img
          src={redcirclegradient}
          alt="Red Gradient Circle"
          className="contact-redcircle"
        />
        <div className="container-padding contactform-section">
          <div className="contact-content">
            <HeadingTitle
              title="Connect with Our Digital Marketing Experts"
              subtitle="Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
