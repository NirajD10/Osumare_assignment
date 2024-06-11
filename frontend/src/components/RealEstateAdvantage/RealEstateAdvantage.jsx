import React from "react";
import "./RealEstateAdvantage.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import AdvantageCard from "./AdvantageCard/AdvantageCard";
import boardexpert from "../../assets/Images/board_display_with_man.png";
import { advantages } from "../../constant/data";

function RealEstateAdvantage() {
  return (
    <div className="container-padding">
      <section className="advantage-container" role="article" tabIndex={5}>
        <HeadingTitle
          title="Navigating Real Estate's Digital Landscape"
          subtitle="Insights for Real Estate Marketing Advantage"
        />
        <div className="advantage-section">
          <div className="advantage-section_wrapper">
            <div className="advantage-lists">
              {advantages.map((item) => (
                <React.Fragment key={item.id}>
                  <AdvantageCard
                    title={item.title}
                    info={item.subtitle}
                    vector={item.vector}
                  />
                </React.Fragment>
              ))}
            </div>
            <img
              src={boardexpert}
              alt="Expert Written on Board with man"
              className="advantage-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default RealEstateAdvantage;
