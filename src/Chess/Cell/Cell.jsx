import "./Cell.css";
// eslint-disable-next-line react/prop-types
const Cell = ({ cellType }) => {
  return <div style={{ backgroundColor: cellType }} className={`cell `}></div>;
};
export default Cell;
