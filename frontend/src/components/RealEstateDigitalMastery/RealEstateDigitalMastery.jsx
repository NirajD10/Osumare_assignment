import React from "react";
import "./RealEstateDigitalMastery.css";
import housemarketingimage from "../../assets/Images/Sale_house.png";
import arrowupimage from "../../assets/Vector/directing_the _arrow_up.svg";
import PrimaryButton from "../Button/PrimaryButton";
import HeadingTitle from "../HeadingTitle/HeadingTitle";

function RealEstateDigitalMastery() {
  return (
    <div className="mastery-container">
      <div className="hero-section__image">
        <img
          src={housemarketingimage}
          alt="House Marking Vector"
          className="hero-section__image-vector"
        />
      </div>
      <div className="container-padding mastery-section">
      <HeadingTitle
          title="Real Estate-Focused Digital Mastery"
        />
        {/* <h2 className="montserrat-bold mastery-section__title">
          Real Estate-Focused Digital Mastery
        </h2> */}
        <div className="mastery-section__card">
          <div className="mastery-section__card-image">
            <img src={arrowupimage} alt="Directing Arrow up with Man" />
          </div>
          <div className="mastery-section__card-detail">
            <h3 className="montserrat-bold">
              Unlock the Potential of Digital Real Estate Excellence
            </h3>
            <p className="open-sans-normal">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <div>
              <PrimaryButton
                title="Get Started"
                size_btn="mid-btn"
                font_css="montserrat-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateDigitalMastery;
