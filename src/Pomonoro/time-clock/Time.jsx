import { Button, InputNumber, Space, Menu } from "antd";
import "./Time.css";

import moment from "moment/moment";
import { useState, useEffect } from "react";
const items = [
  {
    label: "Working",
    key: "working",
  },
  {
    label: "Play",
    key: "playing",
  },
];
const Time = () => {
  const today = new Date();
  const [countWork, setCountWork] = useState(20);
  const [countPlay, setCountPlay] = useState(10);
  const [showinput, setShowinput] = useState(1);
  const [pause, setPause] = useState(0);
  const [count, setCount] = useState(countWork);
  const [current, setCurrent] = useState("working");
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [timecurrent] = useState(time);
  const startTime = timecurrent;

  const endTime = moment(startTime, "HH:mm:ss")
    .add(count, "seconds")
    .format("HH:mm:ss");

  useEffect(() => {
    console.log("effect");

    // num = number;
    // console.log("check num", num);
    const time = setInterval(() => {
      if (countWork == 0 || current == "playing") clearInterval(time);
      else if (pause == 0) {
        setCountWork(countWork - 1);
      } else {
        setCountWork(countWork);
      }
      console.log("h1");
    }, 1000);
    return () => {
      //clearInterval(workTran);
      clearInterval(time);
    };
  }, [countWork, current, pause]);
  useEffect(() => {
    console.log("effect");

    // num = number;
    // console.log("check num", num);
    const time1 = setInterval(() => {
      if (countPlay == 0 || current == "working") clearInterval(time1);
      else if (pause == 0) {
        setCountPlay(countPlay - 1);
      } else {
        setCountPlay(countPlay);
      }
      console.log("h1");
    }, 1000);
    return () => {
      //clearInterval(workTran);
      clearInterval(time1);
    };
  }, [countPlay, current, pause]);

  const handleInputCycle1 = (value) => {
    setCountWork(value);
  };
  const handleInputCycle2 = (value) => {
    setCountPlay(value);
  };
  const handleStart = () => {
    current == "working" ? setCountWork(20) : setCountPlay(10);
  };
  const handlePause = () => {
    setPause(1);
  };

  const handleContinue = () => {
    setPause(0);
    current == "working"
      ? setCountWork(countWork - 1)
      : setCountPlay(countPlay - 1);
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    {
      current == "playing" && setCount(countPlay);
    }
  };

  return (
    <>
      <Menu
        style={{ backgroundColor: "D2E9E9" }}
        className="menu-pregnancy"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div className="pregnancy-content">
        {current == "working" ? (
          <div className="time">{countWork}</div>
        ) : (
          <div className="time1">{countPlay}</div>
        )}
      </div>

      <Space className="button-click">
        <Button style={{ width: "90px" }} onClick={() => handleStart()}>
          Reset
        </Button>
        <Button style={{ width: "90px" }} onClick={() => handlePause()}>
          Pause
        </Button>
        <Button onClick={() => handleContinue()}>Continue</Button>
      </Space>
      <div className="form-input">
        <Button type="primary" onClick={() => setShowinput(!showinput)}>
          {showinput ? "hidden" : "show"}
        </Button>
      </div>
      <Space className={showinput ? "show" : "hidden"}>
        <Space>
          <InputNumber
            style={{ color: "blue", width: "200px" }}
            onChange={(e) => handleInputCycle1(e)}
          />
          <Button>Set time play</Button>
        </Space>
        <Space>
          <InputNumber
            style={{ color: "blue", width: "200px" }}
            onChange={(e) => handleInputCycle2(e)}
          />
          <Button>Set time work</Button>
        </Space>
      </Space>
      <Space className="time-now">
        <Space className="start-time">{time}</Space>
        <Space className="end-time">{endTime}</Space>
      </Space>
    </>
  );
};

export default Time;
