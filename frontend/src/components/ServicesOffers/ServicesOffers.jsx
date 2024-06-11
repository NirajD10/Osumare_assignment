import React from "react";
import "./ServicesOffers.css";
import ServicesCard from "./ServicesCard/ServicesCard";
import { services_data } from "../../constant/data";
import PrimaryButton from "../Button/PrimaryButton";
import HeadingTitle from "../HeadingTitle/HeadingTitle";

function ServicesOffers() {
  return (
    <section className="services-container" role="article" tabIndex={0}>
      <div className="services-section container-padding">
        <HeadingTitle
          title="Our Service Offerings"
          subtitle="Strategies that Drive Property Market Excellence"
        />
        <div className="serivces-section__offerslist">
          {services_data.map((item) => (
            <ServicesCard
              key={item.id}
              title={item.title}
              svg={item.vector}
              info={item.info}
            />
          ))}
        </div>
        <div className="serivces-section__btn">
          <PrimaryButton
            font_css="montserrat-semibold"
            title="Get started"
            size_btn="mid-btn"
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesOffers;
