
import './Cell.css'
 const Cell = ({cellType}) => {
  
  return (
    <div style={{ backgroundColor:cellType}}  className={`cell `}></div>
  ) 
}
export default Cell;