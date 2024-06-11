import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ title, font_css, size_btn }) {
  return (
    <button className={`primary-btn ${font_css} ${size_btn}`}>{title}</button>
  );
}

export default PrimaryButton;
