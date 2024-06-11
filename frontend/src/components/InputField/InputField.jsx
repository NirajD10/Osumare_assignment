import React from "react";
import "./InputField.css";

function InputField({label, placeholder}) {
  return (
    <div className="inputfield-section">
      <label className="inter-semibold inputfield-label" htmlFor={label}>{label}</label>
      <input className="inputfield-field" type="text" name={label} placeholder={placeholder} />
    </div>
  );
}

export default InputField;
