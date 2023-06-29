import "./index.css";
import Cell from "../Cell/Cell";
const Row = ({ rowType, count, color2, color1 }) => {
  var rows = [];
  for (let i = 0; i < count; i++) {
    rows[i] = i;
  }
  console.log(rows);
  console.log(color1);
  if (rowType === "even")
    return (
      <div className="row">
        {rows.map((item, index) =>
          index % 2 === 0 ? (
            <div key={index} className="row">
              <Cell cellType={color1} />
            </div>
          ) : (
            <div key={index} className="row">
              <Cell cellType={color2} />
            </div>
          )
        )}
      </div>
    );
  else if (rowType === "odd") {
    return (
      <div className="row">
        {rows.map((item, index) =>
          index % 2 === 0 ? (
            <div key={index} className="row">
              <Cell cellType={color2} />
            </div>
          ) : (
            <div key={index} className="row">
              <Cell cellType={color1} />
            </div>
          )
        )}
      </div>
    );
  }
};
export default Row;
