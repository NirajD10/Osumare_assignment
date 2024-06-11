import React from "react";
import "./Testimonial.css";
import previewimage from "../../assets/Images/Tabish_formal_photo.png";
import testimonialsymbol from "../../assets/Vector/symbol.svg";
import playbuttonvector from "../../assets/Images/Play.png"

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__section">
        <div className="testimonial-card__video">
          <img src={previewimage} alt="Testional from Tabish" className="user-preview_image"/>
          <img src={playbuttonvector} alt="Play Button Vector" className="play-vector"/>
        </div>
        {/* testimonial name and message*/}
        <div className="testimonial-card__message">
          <div className="testimonial-card__message-user">
            {/* user name and profile picture */}
            <div className="user-name">
              <div className="profile-picture">
                <img
                  src={previewimage}
                  height={80}
                  width={80}
                  alt="User Profile picture"
                  className="profile-picture"
                />
              </div>
              <p className="poppins-bold">Tabish Khan</p>
            </div>
            {/* testimonial vector image */}
            <img loading="lazy" src={testimonialsymbol} alt="Testimonial Symbol Vector" />
          </div>
          <p className="testimonial-card__message-user_message open-sans-normal">
            Osumare's expertise in pharma marketing is unparalleled. Their
            strategies helped us navigate complex regulations while driving
            remarkable growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
