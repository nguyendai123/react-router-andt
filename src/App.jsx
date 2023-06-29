import { CalculatorOutlined } from "@ant-design/icons";

import { Menu } from "antd";
import { useState } from "react";
import { ChessBoard } from "./Chess/ChessBoard/ChessBoard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BoardNumber from "./Calculator/number/BoardNumber";
import HelloWorld from "./HelloWorld/Hello";
import Minesweep from "./Minesweep/Minesweep/Minesweep";
import Time from "./Pomonoro/time-clock/Time";
const items = [
  {
    label: <Link to="/time">Time</Link>,
    key: "time",
    icon: <CalculatorOutlined />,
  },
  {
    label: <Link to="/boardnumber">Board number</Link>,
    key: "boardnumber",
  },
  {
    label: <Link to="/chessboard">Chess board</Link>,
    key: "chessboard",
  },
  {
    label: <Link to="/minesweep">mine sweep</Link>,
    key: "minesweep",
  },
  {
    label: <Link to="/">hello</Link>,
    key: "/",
  },
];
const App = () => {
  const [count] = useState(4);
  const [color1] = useState("black");
  const [color2] = useState("white");
  const [current, setCurrent] = useState("time");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Router>
        <div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/time">
              <Time />
            </Route>
            <Route path="/boardnumber">
              <BoardNumber />
            </Route>
            <Route path="/chessboard">
              <ChessBoard count={count} color1={color1} color2={color2} />
            </Route>
            <Route path="/minesweep">
              <Minesweep />
            </Route>
            <Route path="/">
              <HelloWorld />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
