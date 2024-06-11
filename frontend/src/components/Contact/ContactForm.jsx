import React from "react";
import "./ContactForm.css";
import PrimaryButton from "../Button/PrimaryButton";
import InputField from "../InputField/InputField";

function ContactForm() {
  return (
    <div className="contactform-card">
      <div className="contactform-card__section">
        <div className="contactform-card__inputsection">
          <div className="contactform-card__inputsection-left">
            <InputField label="Name" placeholder="Enter your name" />
            <InputField label="Phone" placeholder="Enter your Number" />
            <InputField label="Email" placeholder="Enter your Email" />
          </div>
          <div className="contactform-card__inputsection-right"><InputField label="Message" placeholder="Enter your Message." /></div>
        </div>
        <PrimaryButton
          font_css="montserrat-bold"
          size_btn="big-btn"
          title="Get started"
        />
      </div>
    </div>
  );
}

export default ContactForm;
