import React from "react";
import "./ServicesCard.css";

function ServicesCard({svg, title, info}) {
  return (
    <div className="services-card">
      <div className="services-card__headingsection">
        <div className="services-card__vector">
          <img src={svg} alt="SEO Vector" width={24} height={24}/>
        </div>
        <h4 className="montserrat-bold">{title}</h4>
      </div>
      <p className="open-sans-normal services-card__info">
        {info}
      </p>
    </div>
  );
}

export default ServicesCard;
