import { useState } from "react";
import "./Chess.css";
import { ChessBoard } from "../ChessBoard/ChessBoard";
import { Button, Input, Space, Modal } from "antd";
import { Typography } from "antd";
import tr from "../../i18n";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
function Chess({ lang }) {
  //  const [n,setN] =useState(4);
  const [count, setCount] = useState(4);
  const [color1, setColor1] = useState("black");
  const [color2, setColor2] = useState("white");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setColor1(document.querySelector(".colorone").value);
    setColor2(document.querySelector(".colortwo").value);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
      <Title style={{ margin: "20px" }}>{tr("Chess board", lang)}</Title>
      <div onClick={() => handleClickTran()}>
        <ChessBoard count={count} color1={color1} color2={color2} />
      </div>
      <div className="form-input">
        <Button type="primary" onClick={showModal}>
          Setting
        </Button>
        <Modal
          title="Basic Modal"
          centered
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Space wrap={16}>
            <Space>
              <Input value={count} onChange={(e) => handdleOnchange(e)} />
              <Button>Search value</Button>
            </Space>
            <Space className="setColor">
              <Input
                type="color"
                style={{ width: "185px" }}
                className="colorone"
              />
              <Button onClick={() => handleClickColor1()}>Search color</Button>
            </Space>
            <Space className="setColor">
              <Input
                style={{ width: "185px" }}
                type="color"
                className="colortwo"
              />
              <Button onClick={() => handleClickColor2()}>Search color</Button>
            </Space>
          </Space>
        </Modal>
      </div>
    </>
  );
}

export default Chess;
