import { useState } from "react";

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
    setColor1(document.querySelector(".color1").value);
  };
  const handleClickColor2 = () => {
    setColor2(document.querySelector(".color2").value);
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
        <input type="text" value={count} onChange={(e) => handdleOnchange(e)} />
        {/* <button onClick={()=>handleClick()}>Search</button> */}
      </div>
      <div>
        <input type="text" className="color1" />
        <button onClick={() => handleClickColor1()}>Search color</button>
      </div>
      <div>
        <input type="text" className="color2" />
        <button onClick={() => handleClickColor2()}>Search color</button>
      </div>
    </>
  );
}

export default Chess;
