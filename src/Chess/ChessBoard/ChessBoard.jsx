import Row from "../Row";
import "./ChessBoard.css";
// eslint-disable-next-line react/prop-types
export const ChessBoard = ({ count, color1, color2 }) => {
  var rows = [];
  for (let i = 0; i < count; i++) {
    rows[i] = i;
  }
  console.log("checkc", count);

  console.log(color1, color2);
  return (
    <>
      <div className="board">
        {rows.map((item, index) =>
          index % 2 === 0 ? (
            <div key={index} className="row">
              <div>
                <Row
                  count={count}
                  color2={color2}
                  color1={color1}
                  rowType={"even"}
                />
              </div>
            </div>
          ) : (
            <div key={index} className="row">
              <div>
                <Row
                  count={count}
                  color2={color2}
                  color1={color1}
                  rowType={"odd"}
                />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
