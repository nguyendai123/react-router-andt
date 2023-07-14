import { Button, InputNumber, Space, Menu, Progress } from "antd";
import "./Pomonoro.css";
import tr from "../../i18n";
import moment from "moment/moment";
import { useState, useEffect } from "react";
import { Typography } from "antd";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const Pomonoro = ({ bgfooter, lang }) => {
  const items = [
    {
      label: tr("Working", lang),
      key: "working",
    },
    {
      label: tr("Play", lang),
      key: "playing",
    },
  ];
  const today = new Date();
  const [countWork, setCountWork] = useState(20);
  const [countPlay, setCountPlay] = useState(10);
  const [showinput, setShowinput] = useState(0);
  const [percent1, setPercent1] = useState(100);
  const [percent2, setPercent2] = useState(100);
  const [status, setStatus] = useState("success");
  const [pause, setPause] = useState(0);
  const [count] = useState(countWork);
  const [current, setCurrent] = useState("working");

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const [endTime, setEndTime] = useState(
    moment(time, "HH:mm:ss").add(count, "seconds").format("HH:mm:ss")
  );
  console.log("endtime", count);
  useEffect(() => {
    console.log("effect");

    // num = number;
    // console.log("check num", num);
    const time = setInterval(() => {
      if (countWork == 0 || current == "playing") clearInterval(time);
      else if (pause == 0) {
        setCountWork(countWork - 1);

        setPercent1(percent1 - percent1 / countWork);
        if (percent1 == 75) setStatus("active");
        if (percent1 == 25) setStatus("exception");
      } else {
        setCountWork(countWork);
      }
      console.log("h1");
    }, 1000);
    return () => {
      //clearInterval(workTran);
      clearInterval(time);
    };
  }, [countWork, current, pause, percent1]);
  useEffect(() => {
    console.log("effect");

    // num = number;
    // console.log("check num", num);
    const time1 = setInterval(() => {
      if (countPlay == 0 || current == "working") clearInterval(time1);
      else if (pause == 0) {
        setCountPlay(countPlay - 1);

        setPercent2(percent2 - percent2 / countPlay);

        if (percent2 < 85 && percent2 > 35) setStatus("active");
        if (percent2 < 35) setStatus("exception");
      } else {
        setCountPlay(countPlay);
      }
      console.log("h2");
    }, 1000);
    return () => {
      //clearInterval(workTran);
      clearInterval(time1);
    };
  }, [countPlay, current, pause, percent2]);

  const handleInputCycle1 = (value) => {
    setCountPlay(value);
  };
  const handleInputCycle2 = (value) => {
    setCountWork(value);
  };
  const handleStart = () => {
    setStatus("success");
    current == "working" ? setPercent1(100) : setPercent2(100);
    current == "working" ? setCountWork(20) : setCountPlay(10);
    setEndTime(
      moment(new Date(), "HH:mm:ss")
        .add(current == "working" ? 20 : 10, "seconds")
        .format("HH:mm:ss")
    );
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
    setCurrent(current == "working" ? "playing" : "working");
    setEndTime(
      moment(today, "HH:mm:ss")
        .add(current == "working" ? countPlay : countWork, "seconds")
        .format("HH:mm:ss")
    );
  };

  return (
    <div>
      <Menu
        style={{ backgroundColor: bgfooter, marginBottom: "40px" }}
        className="menu-pregnancy"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Title style={{ margin: "20px" }}>Pomonoro</Title>
      <div className="pregnancy-content">
        {current == "working" ? (
          <Progress
            type="circle"
            status={status}
            percent={percent1}
            format={() => `${countWork}`}
            style={{
              borderRadius: "100px",
              boxSizing: "border-box",
              fontSize: "10",
              backgroundColor: "#FCAEAE",
            }}
          />
        ) : (
          <Progress
            type="circle"
            status={status}
            percent={percent2}
            format={() => `${countPlay}`}
            style={{
              borderRadius: "100px",
              boxSizing: "border-box",
              fontSize: "10",
              backgroundColor: "#519259",
            }}
          />
        )}
      </div>

      <Space className="button-click">
        <Button style={{ width: "90px" }} onClick={() => handleStart()}>
          {tr("Reset", lang)}
        </Button>
        <Button style={{ width: "90px" }} onClick={() => handlePause()}>
          {tr("Pause", lang)}
        </Button>
        <Button onClick={() => handleContinue()}>{tr("Continue", lang)}</Button>
      </Space>
      <div className="form-input1">
        <Button type="primary" onClick={() => setShowinput(!showinput)}>
          {showinput ? tr("hidden", lang) : tr("show", lang)}
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
    </div>
  );
};

export default Pomonoro;
