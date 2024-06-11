import React from "react";
import "./FAQ.css";
import Accordion from "./Accordion/Accordion";
import { faqdata } from "../../constant/data";

function FAQ() {
  return (
    <div className="faq-accordionsection">
      {faqdata.map((item) => (
        <React.Fragment key={item.id}>
          <Accordion title={item.question} content={item.answer} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FAQ;
