import { useState } from "react";
import "./BoardNumber.css";
import { Typography } from "antd";
const { Title } = Typography;
const BoardNumber = () => {
  const [classResult, setClassResult] = useState("result");
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState("");
  const [count, setCount] = useState("");
  const [cong, setCong] = useState(0);
  const [number, setNumber] = useState("");

  const handleClickNumber = (e) => {
    console.log(e.target.className);
    setDisplay(display + e.target.innerText);

    setNumber(number + e.target.innerText);
  };
  const handleClickEqual = (e) => {
    result == 0 && setResult(parseInt(number));
    console.log(e.target.innerText);
    setCount(e.target.innerText);

    count == "." && setResult(result + parseInt(number) / 10);
    if (count == "+") {
      setResult(result + parseInt(number));
      setCong(1);
    }
    if (count == "-") {
      setResult(result - parseInt(number));
      setCong(2);
    }
    if (count == "*") {
      setResult(result * parseInt(number));
      setCong(3);
    }
    if (count == "÷") {
      setResult(result / parseInt(number));
      setCong(4);
    }
    count == "%" &&
      setDisplay(result) &&
      setResult(result / 100) &&
      setDisplay(result);
    e.target.innerText != "=" && setDisplay("");
    setNumber("");
    e.target.innerText == "=" && setClassResult("result1");
  };

  const handleDelete = () => {
    //setDisplay(display.slice(0, display.length - 1));
    setNumber(display.slice(0, display.length - 1));
    setDisplay(display.slice(0, display.length - 1));
  };
  const handleDeleteResult = () => {
    setResult("");
    setDisplay("");
  };
  const handleDeletedisplay = () => {
    setDisplay("");
  };
  const handleClickSquare = (e) => {
    result == 0 && setResult(parseInt(number));
    setDisplay(e.target.innerText);

    setResult(result * result);
  };

  return (
    <>
      <Title style={{ margin: "20px" }}>BoardNumber</Title>
      <div className="table-number">
        <div className="displayCaculator">{display}</div>
        <div className={classResult}>{result}</div>
        <table>
          <thead>
            <tr>
              <th onClick={(e) => handleClickEqual(e)}>%</th>
              <th
                onClick={() => {
                  handleDeletedisplay();
                }}
              >
                CE
              </th>
              <th onClick={() => handleDeleteResult()}>C</th>
              <th onClick={(e) => handleDelete(e)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th onClick={(e) => handleClickSquare(e)}>x^2</th>
              <th
                onClick={() => {
                  setResult(1 / result);
                }}
              >
                1/x
              </th>
              <th
                onClick={() => {
                  setResult(Math.sqrt(result));
                }}
              >
                sqrt(x)
              </th>
              <th
                className={cong == 4 ? "cong" : ""}
                onClick={(e) => handleClickEqual(e)}
              >
                &#247;
              </th>
            </tr>
            <tr>
              <th onClick={(e) => handleClickNumber(e)}>7</th>
              <th onClick={(e) => handleClickNumber(e)}>8</th>
              <th onClick={(e) => handleClickNumber(e)}>9</th>
              <th
                className={cong == 3 ? "cong" : ""}
                onClick={(e) => handleClickEqual(e)}
              >
                *
              </th>
            </tr>
            <tr>
              <th onClick={(e) => handleClickNumber(e)}>4</th>
              <th onClick={(e) => handleClickNumber(e)}>5</th>
              <th onClick={(e) => handleClickNumber(e)}>6</th>
              <th
                className={cong == 2 ? "cong" : ""}
                onClick={(e) => handleClickEqual(e)}
              >
                -
              </th>
            </tr>
            <tr>
              <th onClick={(e) => handleClickNumber(e)}>1</th>
              <th onClick={(e) => handleClickNumber(e)}>2</th>
              <th onClick={(e) => handleClickNumber(e)}>3</th>
              <th
                className={cong == 1 ? "cong" : ""}
                onClick={(e) => handleClickEqual(e)}
              >
                +
              </th>
            </tr>
            <tr>
              <th
                onClick={() => {
                  setResult(0 - result);
                }}
              >
                +/-
              </th>
              <th onClick={(e) => handleClickNumber(e)}>0</th>
              <th onClick={(e) => handleClickEqual(e)}>.</th>
              <th onClick={(e) => handleClickEqual(e)}>=</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BoardNumber;
