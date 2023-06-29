import { Button, Typography, InputNumber, Space } from "antd";
import "./Time.css";
import { useState, useEffect } from "react";
const Time = () => {
  const today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [count, setCount] = useState(20);
  const [classTime, setClassTime] = useState("time");
  const [classCount] = useState("startcount");
  const [number, setNumber] = useState(0);
  const [cycle1, setCycle1] = useState(2000);
  const [cycle2, setCycle2] = useState(5000);
  const [pause, setPause] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (number == 0 && count != 0 && pause != 1) {
        setClassTime("time1");
        setNumber(1);
      }
    }, cycle2);
  }, [classTime, count, cycle2, number, pause]);
  useEffect(() => {
    setTimeout(() => {
      if (number == 1 && count != 0 && pause != 1) {
        setClassTime("time");
        setNumber(0);
      }
    }, cycle1);
  }, [classTime, count, cycle1, number, pause]);
  useEffect(() => {
    console.log("effect");

    // num = number;
    // console.log("check num", num);
    const time = setInterval(() => {
      if (count == 0) clearInterval(time);
      else if (pause == 0) setCount(count - 1);
      else setCount(count);
      console.log("h1");
    }, 1000);
    return () => {
      //clearInterval(workTran);
      clearInterval(time);
    };
  }, [count, pause]);

  function handleInputCount(e) {
    setCount(e.target.value);
  }
  const handleInputCycle1 = (e) => {
    setCycle1(e.target.value);
  };
  const handleInputCycle2 = (e) => {
    setCycle2(e.target.value);
  };
  const handlePause = () => {
    setPause(1);
  };

  const handleContinue = () => {
    alert("dkdk");
    setPause(0);
    setCount(count - 1);
  };
  const [showinput, setShowinput] = useState(1);
  return (
    <>
      <Button type="primary" onClick={() => setShowinput(!showinput)}>
        {showinput ? "show" : "hidden"}
      </Button>
      <Space className={showinput ? "show" : ""}>
        <InputNumber
          style={{ color: "blue" }}
          onChange={(e) => handleInputCycle1(e)}
          placeholder="Cycle_suspect"
        />
        <InputNumber
          style={{ color: "blue" }}
          onChange={(e) => handleInputCycle2(e)}
          placeholder="Cycle_Work"
        />

        <InputNumber
          style={{ color: "blue" }}
          onChange={(e) => handleInputCount(e)}
          placeholder="Count"
        />
      </Space>
      <Typography>{time}</Typography>
      <Space className={classTime}>
        <Typography className={classCount}>{count}</Typography>
      </Space>
      <Button onClick={() => handlePause()}>pause</Button>
      <Button onClick={() => handleContinue()}>Continue</Button>
    </>
  );
};

export default Time;
