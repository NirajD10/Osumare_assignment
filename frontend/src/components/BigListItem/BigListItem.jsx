import React from "react";
import "./BigListItem.css";

function BigListItem({ vector, title, info }) {
  return (
    <div className="listitem-container">
      <div className="listitem-image">
        <img src={vector} alt={title} />
      </div>
      <div className="listitem-title">
        <h3 className="montserrat-bold">{title}</h3>
        <p className="open-sans-normal">{info}</p>
      </div>
    </div>
  );
}

export default BigListItem;
