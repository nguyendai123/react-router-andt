import React from "react";
import "./Minesweep.css";
const Minesweep = () => {
  const array = [1, 2, 3, 4, 5];
  var arr = [];
  var r = [];
  for (let i = 0; i < 25; i++) r.push(0);
  console.log("kdk", r);
  for (let i = 0; i < 25; i++) arr.push(Math.floor(Math.random() * 2));
  console.log(arr);
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      var x = arr[5 * i + j];
      if (x == 0) {
        for (let k = -1; k <= 1; k++) {
          for (let h = -1; h <= 1; h++) {
            r[5 * i + j] = r[5 * i + j] + arr[5 * (i - k) + j - h];
          }
        }

        r[5 * i + j] -= x;
      }
    }
  }
  for (let i = 0; i < 25; i++) if (r[i] != 0) arr[i] = r[i];
  console.log(r);
  return (
    <div className="table-sweep">
      {array.map((element, i) => {
        return (
          <div key={i} className="row">
            {array.map((element, j) => {
              return (
                <button key={j} className="col">
                  {arr[5 * i + j]}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Minesweep;
