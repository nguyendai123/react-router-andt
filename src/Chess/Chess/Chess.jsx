import { useState } from "react";
import "./Chess.css";
import { ChessBoard } from "../ChessBoard/ChessBoard";

function Chess() {
  //  const [n,setN] =useState(4);
  const [count, setCount] = useState(4);
  const [color1, setColor1] = useState("black");
  const [color2, setColor2] = useState("white");
  var color = color2;
  // const handleClick=()=>{
  //   setN(count);
  // }
  const handdleOnchange = (e) => {
    setCount(e.target.value);
  };
  const handleClickColor1 = () => {
    setColor1(document.querySelector(".colorone").value);
  };
  const handleClickColor2 = () => {
    setColor2(document.querySelector(".colortwo").value);
  };
  const handleClickTran = () => {
    console.log("kdkkds");
    setColor2(color1);
    setColor1(color);
  };
  return (
    <>
      <div onClick={() => handleClickTran()}>
        <ChessBoard count={count} color1={color1} color2={color2} />
      </div>
      <div>
        <div>
          <input value={count} onChange={(e) => handdleOnchange(e)} />
          {/* <button onClick={()=>handleClick()}>Search</button> */}
        </div>
        <div className="setColor">
          <input className="colorone" />
          <button onClick={() => handleClickColor1()}>Search color</button>
        </div>
        <div className="setColor">
          <input className="colortwo" />
          <button onClick={() => handleClickColor2()}>Search color</button>
        </div>
      </div>
    </>
  );
}

export default Chess;
