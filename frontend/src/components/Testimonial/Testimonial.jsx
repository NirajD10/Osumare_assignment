import React from "react";
import "./Testimonial.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import TestimonialCard from "./TestimonialCard";
import leftarrowvector from "../../assets/Vector/left_arrow.svg";
import rightarrowvector from "../../assets/Vector/right_arrow.svg";
import FAQ from "../FAQ/FAQ";

function Testimonial() {
  return (
    <div className="testifaq-container">
      <div className="container-padding">
        <HeadingTitle
          title="What Our Pharma Partners Say"
          subtitle="Driving Transformations, One Brand at a Time"
        />
        <div className="testimonionalFaq-section">
          <section className="testimonional-section" role="article" tabIndex={0}>
            <TestimonialCard />
            <div className="testimonional-controls">
              <button className="left-arrow-control">
                <img src={leftarrowvector} alt="Left Arrow Vector" />
              </button>
              <button className="right-arrow-control">
                <img src={rightarrowvector} alt="Right Arrow Vector" />
              </button>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="faq-section" role="article" tabIndex={0}>
            <HeadingTitle
              title="Frequently Asked Questions"
              subtitle="Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand."
            />
            <div className="faq-accordion">
              <FAQ />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
