import React from "react";
import "./Hero.css";
import PrimaryButton from "../Button/PrimaryButton";
import bluecircleGradient from "../../assets/Images/Ellipse_Banner_Blue.png";

function Hero() {
  return (
    <section className="hero" role="banner" tabIndex={2}>
      <div className="hero-opacity"></div>
      <img
        src={bluecircleGradient}
        className="hero-blurcircle"
        alt="Blue Circle Gradient on Banner"
      />

      <div className="hero-section">
        <div className="hero-section__title">
          <h1 className="montserrat-midnormal heading-title">
            Elevate&nbsp;
            <span className="montserrat-bold heading-title__bold-color">
              Real Estate Success
            </span>
            &nbsp;with <br />
            Osumare's Digital Expertise
          </h1>
          <p className="open-sans-normal heading-subtitle">
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
          <PrimaryButton
            title="Get Started"
            font_css="montserrat-bold"
            size_btn="big-btn"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
