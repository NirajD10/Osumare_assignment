import React from "react";
import "./PeaceMessage.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import PrimaryButton from "../Button/PrimaryButton";
import bluecirclegradient from "../../assets/Images/blue_Ellipse.png"
import redcirclegradient from "../../assets/Images/Ellipse_red.png"

function PeaceMessage() {
  return (
    <div className="message-container">
       <img src={bluecirclegradient} alt="Blue Gradient Circle" className="message-bluecircle"/>
       <img src={redcirclegradient} alt="Red Gradient Circle" className="message-redcircle" />
       <div className="meassge-section">
        <div className="message-content">
          <HeadingTitle
            title="Your Peace of Mind"
            subtitle="Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market"
          />
        </div>
        <PrimaryButton
          title="Get started"
          font_css="montserrat-semibold"
          size_btn="mid-btn"
        />
      </div>
    </div>
  );
}

export default PeaceMessage;
