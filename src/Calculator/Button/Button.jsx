import React from "react";
import "./Button.css";
function Button({ operator, buttonClick }) {
  return <button className={buttonClick ? "cong" : ""}>{operator}</button>;
}

export default Button;
