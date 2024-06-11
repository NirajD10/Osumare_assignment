import React from "react";
import "./HeadingTitle.css";

function HeadingTitle({ title, subtitle }) {
  return (
    <div className="headingtitle-section">
      <h2 className="montserrat-bold">{title}</h2>
      {subtitle && <h3 className="open-sans-normal">{subtitle}</h3>}
    </div>
  );
}

export default HeadingTitle;
