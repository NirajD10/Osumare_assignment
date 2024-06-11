import React from "react";
import "./RealEstateConversionInfo.css";
import PrimaryButton from "../Button/PrimaryButton";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import housesearchingimage from "../../assets/Images/house_searching.png";

function RealEstateConversionInfo() {
  return (
    <div className="conversion-container">
      <div className="container-padding conversion-section">
        <HeadingTitle
          title="Streamlined Strategies for Real Estate Success"
          subtitle="Streamlined Strategies for Real Estate Success"
        />
        <div className="conversion-section__card">
          <img
            src={housesearchingimage}
            alt="A House with magnifying glass"
            className="conversion-section__card-image"
          />
          <div className="conversion-section__card-detail">
            <h3 className="montserrat-bold">
              Optimized Path to Property Purchase
            </h3>
            <p className="open-sans-normal">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
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

export default RealEstateConversionInfo;
