import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import LogoAndt from "./assets/LogoAndt.jsx";
import LoginForm from "./LoginForm/LoginForm";
import { Menu, Space, Avatar, Layout, Input, Button,ConfigProvider, theme } from "antd";
import { useState } from "react";
import { Typography, Badge } from "antd";
const { Title } = Typography;
import Chess from "./Chess/Chess/Chess";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

import BoardNumber from "./Calculator/number/BoardNumber";
import HelloWorld from "./HelloWorld/Hello";
import CallApi from "./CallApi/CallApi";
import Minesweep from "./Minesweep/Minesweep/Minesweep";
import Pomonoro from "./Pomonoro/time-clock/Pomonoro";
const { Header, Content, Footer, Sider } = Layout;
import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Profile/Profile";

const items = [
  {
    label: <Link to="/time">Time</Link>,
    key: "time",
    icon: <PieChartOutlined />,
  },
  {
    label: <Link to="/boardnumber">Board number</Link>,
    key: "boardnumber",
    icon: <DesktopOutlined />,
  },
  {
    label: <Link to="/chessboard">Chess board</Link>,
    key: "chessboard",
    icon: <ContainerOutlined />,
  },
  {
    label: <Link to="/minesweep">mine sweep</Link>,
    key: "minesweep",
    icon: <MailOutlined />,
  },

  {
    label: <Link to="/">hello</Link>,
    key: "/",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/server">my server</Link>,
    key: "server",
    icon: <AppstoreOutlined />,
  },
];
const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  colorText	 :'red'
};
const CurrentData = {
  borderRadius: 6,
  colorPrimary: 'green',
  colorText :'red',
};
const App = () => {
  const [data, setData] = useState(defaultData);
  const UserList = ["Đ", "L", "T", "E"];
  const ColorList = ["#008cff", "#7265e6", "#ffbf00", "#00a2ae"];
  const GapList = [4, 3, 2, 1];
  const [user] = useState(UserList[0]);
  const [color] = useState(ColorList[0]);
  const [gap] = useState(GapList[0]);
  const [showinputheader, setShowinputheader] = useState(false);
  const [current, setCurrent] = useState("time");
  const [collapsed, setCollapsed] = useState(true);
  const [ theme, setTheme] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleClickSearch = () => {
    setShowinputheader(!showinputheader);
  };
  const handleClicktheme = () => {
    setTheme(!theme)
    !theme ? setData(CurrentData ) :setData(defaultData)
  }
  // const pathname = window.location.pathname;
  // const [token, setToken] = useState(null);
  // if ((!token || !token.length) && pathname != "/login") {
  //   window.location.href("/login");
  // }
  return (
    <ConfigProvider
      theme={{
        token :{
          colorPrimary : data.colorPrimary,
          borderRadius : data.borderRadius,
        }
      }}
    >
      <BrowserRouter>

        <Router>
          <Layout>
            <Header style={{ padding: "0 20px" }}>
              <div className="header">
                <Space className="left-header">
                  <Space className="image-logo">
                    <LogoAndt colorPrimary ={data.colorPrimary}/>
                  </Space>

                  <Title className="header-title" style={{ color: "white" }}>
                    Ant Design Pro
                  </Title>
                </Space>
                <Space  size ={"middle"} className="right-header">
                  <Space  className="search-header">
                    <SearchOutlined
                      onClick={() => handleClickSearch()}
                      style={{
                        color: "white",
                      }}
                    />
                    <Input
                      className={!showinputheader && "an"}
                      size="small"
                      placeholder="default size"
                      prefix={<UserOutlined />}
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
            

            <Layout style={{ minHeight: "calc(100vh - 64px - 70px)" }}>
              <Sider
                style={{
                  backgroundColor: "white",
                }}
                collapsed={collapsed}
              >
                <div>
                  <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                      margin: 16,
                    }}
                  >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  </Button>
                  <Menu
                    style={{ fontSize: "20px" }}
                    color="white"
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="inline"
                    theme="white"
                    items={items}
                  />
                </div>
              </Sider>
              <Content>
                <Button onClick={()=>handleClicktheme()} style={{ margin :'20px 10px' }}>tran theme</Button>
                <Switch>
                  <Route path="/time">
                    <Pomonoro />
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
                  <Route path="/server">
                    <div>
                      Hello World
                      <CallApi />
                    </div>
                  </Route>
                  <Route path="/">
                    <HelloWorld />
                  </Route>
                </Switch>
              </Content>
            </Layout>
            <Footer
              style={{
                backgroundColor: "white",
              }}
            >
              <Space className="footer-content">
                {" "}
                Copy right by Nguyen Van Dai @2023
              </Space>
            </Footer>
          </Layout>
        </Router>

      </BrowserRouter>
    </ConfigProvider>
  );
};
export default App;
