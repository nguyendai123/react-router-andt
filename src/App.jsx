import {
  CalculatorOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import logo from "./assets/logo.svg";

import { Menu, Space, Avatar, Layout } from "antd";
import { useState } from "react";
import { Typography, Badge } from "antd";
const { Title } = Typography;
import Chess from "./Chess/Chess/Chess";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BoardNumber from "./Calculator/number/BoardNumber";
import HelloWorld from "./HelloWorld/Hello";
import Minesweep from "./Minesweep/Minesweep/Minesweep";
import Time from "./Pomonoro/time-clock/Time";
const { Header, Content, Footer, Sider } = Layout;
import "./App.css";

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
  const UserList = ["Đ", "Lucy", "Tom", "Edward"];
  const ColorList = ["#008cff", "#7265e6", "#ffbf00", "#00a2ae"];
  const GapList = [4, 3, 2, 1];
  const [user] = useState(UserList[0]);
  const [color] = useState(ColorList[0]);
  const [gap] = useState(GapList[0]);

  const [current, setCurrent] = useState("time");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        </div>
        <Layout>
          <Header>
            <div className="header">
              <Space className="left-header">
                <Space className="image-logo">
                  <img className="image-logo__icon" src={logo} alt="logo" />
                </Space>

                <Title className="header-title" style={{ color: "white" }}>
                  Ant Design Pro
                </Title>
              </Space>
              <Space className="right-header">
                <Space className="search-header">
                  <SearchOutlined
                    style={{
                      color: "white",
                    }}
                  />
                </Space>
                <Space className="bell-header">
                  <Badge count={5}>
                    <BellOutlined
                      style={{
                        color: "white",
                      }}
                    />
                  </Badge>
                </Space>
                <Space className="account-header">
                  <Avatar
                    style={{
                      backgroundColor: color,
                      verticalAlign: "middle",
                    }}
                    size="large"
                    gap={gap}
                  >
                    {user}
                  </Avatar>
                  <Space
                    style={{
                      color: "white",
                    }}
                  >
                    Nguyen Van Dai
                  </Space>
                </Space>
                <Space className="trans-language-header">
                  <Space
                    className=""
                    style={{
                      color: "white",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path>
                    </svg>
                  </Space>
                </Space>
              </Space>
            </div>
          </Header>
          <Layout>
            <Sider>
              <Menu
                theme="red"
                onClick={onClick}
                selectedKeys={[current]}
                mode="vertical"
                items={items}
              />
            </Sider>
            <Content>
              <Switch>
                <Route path="/time">
                  <Time />
                </Route>
                <Route path="/boardnumber">
                  <BoardNumber />
                </Route>
                <Route path="/chessboard">
                  <Chess />
                </Route>
                <Route path="/minesweep">
                  <Minesweep />
                </Route>
                <Route path="/">
                  <HelloWorld />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};
export default App;
