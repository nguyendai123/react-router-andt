import "./Button.css";
// eslint-disable-next-line react/prop-types
function Button({ operator, buttonClick }) {
  return <button className={buttonClick ? "cong" : ""}>{operator}</button>;
}

export default Button;
