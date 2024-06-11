import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${isActive ? "active" : " "}`}
        onClick={() => setIsActive(!isActive)}
      >
        <p className="montserrat-semibold">{title}</p>
        <div className="accordian-icons">
          {isActive ? (
            <svg
              width={26}
              height={26}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              width={26}
              height={26}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </div>
      </div>
      {isActive && (
        <p className="accordion-content open-sans-normal">{content}</p>
      )}
    </div>
  );
}

export default Accordion;
