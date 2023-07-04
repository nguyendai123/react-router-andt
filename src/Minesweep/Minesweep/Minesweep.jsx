import { useState } from "react";
import Button from "../Button/Button";
import "./Minesweep.css";
const Minesweep = () => {
  var n = 8;
  const array = [];

  const [boom, setBoom] = useState("");
  const [zero, setZero] = useState("");
  for (let i = 0; i < n - 1; i++) {
    array[i] = i + 1;
  }
  array.pop();
  array.pop();
  var arr = new Array();
  var r = new Array();
  for (let i = 0; i < n - 1; i++) {
    r[i] = new Array();
    for (let j = 0; j < n - 1; j++) r[i].push(0);
  }
  for (let i = 0; i < n - 1; i++) {
    arr[i] = new Array();
    for (let j = 0; j < n - 1; j++) {
      if (i == 0 || j == 0 || i == n - 2 || j == n - 2) arr[i].push(0);
      else {
        if (Math.random() < 0.15) arr[i].push(1);
        else arr[i].push(0);
      }
    }
  }

  for (let i = 1; i < n - 1 - 1; i++) {
    for (let j = 1; j < n - 1 - 1; j++) {
      var x = arr[i][j];
      if (x == 0) {
        for (let k = -1; k <= 1; k++) {
          for (let h = -1; h <= 1; h++) {
            r[i][j] = r[i][j] + arr[i - k][j - h];
          }
        }

        r[i][j] -= x;
      }
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[i][j] == 1) {
        arr[i][j] = 11;
      }
      if (r[i][j] != 0) arr[i][j] = r[i][j];
    }
  }
  const handleClick = () => {
    // setDisplay("display");
    //Game Over
    setBoom("boom");
    //Show one button
  };

  const [data, setData] = useState([...arr]);
  return (
    <div className="table-sweep">
      {array.map((element, i) => {
        return (
          <div key={"row" + i} className="row-mine">
            {array.map((element, j) => {
              return (
                <button key={"col" + j} className={`col-mine`}>
                  {data[i + 1][j + 1] == 11 ? (
                    <svg
                      className={boom}
                      onClick={(e) => handleClick(e)}
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V43.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H43.5c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V468.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H468.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5V32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                  ) : data[i + 1][j + 1] > 0 ? (
                    <Button data={data[i + 1][j + 1]} />
                  ) : (
                    <Button
                      className={zero}
                      setZero={setZero}
                      arr={data}
                      i={i + 1}
                      j={j + 1}
                      data={data[i + 1][j + 1]}
                      setData={setData}
                    />
                  )}
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
