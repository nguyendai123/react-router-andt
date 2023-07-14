import {
  SearchOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import {
  Menu,
  Space,
  Avatar,
  Layout,
  Input,
  Button,
  ConfigProvider,
  Typography,
  Dropdown,
} from "antd";
import LogoAndt from "./assets/LogoAndt.jsx";
import LoginForm from "./LoginForm/LoginForm";
import { useState } from "react";
const { Title } = Typography;
import Chess from "./Chess/Chess/Chess";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import BoardNumber from "./Calculator/number/BoardNumber";
import HelloWorld from "./HelloWorld/HelloWorld";
import Minesweep from "./Minesweep/Minesweep/Minesweep";
import Pomonoro from "./Pomonoro/time-clock/Pomonoro";
const { Header, Content, Footer, Sider } = Layout;
import "./App.css";
import { Translatelang } from "./translatelang/translatelang.jsx";
import { ThemeDarkIcon } from "./assets/Chess/ThemeDarkIcon.jsx";
import { ThemeLightIcon } from "./assets/ThemeLightIcon.jsx";
import tr from "./i18n";
import QuoteList from "./QuoteList.jsx";
import Profile from "./Profile/Profile";
import BellHeader from "./BellHeader/BellHeader.jsx";

const defaultData = {
  borderRadius: 6,
  colorPrimary: "#1677ff",
  colorBgLayout: "#d4dae2",
  colorText: "black",
  bgSider: "#f0f2f5",
  bgfooter: "#f0f2f5",
  theme: "f0f2f5",
  colorBgHeader: "#d4dae2",
  themeIcon: 1,
};
const CurrentData = {
  borderRadius: 6,
  colorPrimary: "green",
  colorText: "red",
  colorBgLayout: "#2a2c2c",
  bgSider: "#242525",
  bgfooter: "#242525",
  theme: "#242525",
  colorBgHeader: "#001529",
  themeIcon: 0,
};
const App = () => {
  const [lang, setLang] = useState("en");
  const items = [
    {
      label: <Link to="/pomodoro">{tr("Pomodoro", lang)}</Link>,
      key: "pomodoro",
      icon: <PieChartOutlined />,
    },
    {
      label: <Link to="/calculator">{tr("Calculator", lang)}</Link>,
      key: "calculator",
      icon: <DesktopOutlined />,
    },
    {
      label: <Link to="/chessboard">{tr("Chess board", lang)}</Link>,
      key: "chessboard",
      icon: <ContainerOutlined />,
    },
    {
      label: <Link to="/minesweep">{tr("Minesweeper", lang)}</Link>,
      key: "minesweep",
      icon: <MailOutlined />,
    },

    {
      label: <Link to="/">{tr("Hello", lang)}</Link>,
      key: "/",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/quotes">{tr("My quotes", lang)}</Link>,
      key: "quotes",
      icon: <AppstoreOutlined />,
    },
  ];
  const [data, setData] = useState(defaultData);
  const [quotes, setQuotes] = useState([]);
  const [quoteNum, setQuoteNum] = useState(4);
  const UserList = ["Đ", "L", "T", "E"];
  const ColorList = ["#008cff", "#7265e6", "#ffbf00", "#00a2ae"];
  const GapList = [4, 3, 2, 1];
  const [user, setUser] = useState(UserList[0]);
  // const [color] = useState(ColorList[0]);
  const [gap] = useState(GapList[0]);
  const [showinputheader, setShowinputheader] = useState(false);
  const [current, setCurrent] = useState("time");
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState(true);
  let history = useHistory();
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
    setTheme(!theme);
    !theme ? setData(CurrentData) : setData(defaultData);
  };
  async function getNewQuotes() {
    const response = await fetch("http://localhost:3000/quotes", {
      method: "POST",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num: quoteNum }),
    });
    const data = await response.json();
    setQuotes(data);
  }
  const [token, setToken] = useState(null);
  const pathname = window.location.pathname;
  if ((!token || !token.length) && pathname !== "/login") {
    history.push("/login");
  }
  const gotohome = () => {
    history.push("/");
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: data.colorPrimary,
          borderRadius: data.borderRadius,
          colorBgLayout: data.colorBgLayout,
          colorText: data.colorText,
          navTheme: data.navTheme,
          primaryColor: data.primaryColor,
          bgSider: data.bgSider,
          bgfooter: data.bgfooter,
          theme: data.theme,
          colorBgHeader: data.colorBgHeader,
          themeIcon: data.themeIcon,
        },
      }}
    >
      {token ? (
        <Layout>
          <Header style={{ padding: "0 20px" }}>
            <div className="header">
              <Space onClick={() => gotohome()} className="left-header">
                <Space className="image-logo">
                  <LogoAndt colorPrimary={data.colorPrimary} />
                </Space>

                <Title className="header-title" style={{ color: "white" }}>
                  Ant Design Pro
                </Title>
              </Space>
              <Space size={"middle"} className="right-header">
                <Space className="search-header">
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
                <BellHeader />
                <Space className="account-header">
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomRight"
                    arrow
                  >
                    <Avatar
                      style={{
                        backgroundColor:
                          ColorList[Math.floor(Math.random() * 3)],
                        verticalAlign: "middle",
                      }}
                      size="large"
                      gap={gap}
                    >
                      {user}
                    </Avatar>
                  </Dropdown>
                  <Profile
                    token={token}
                    logOut={() => setToken(null)}
                    setUser={setUser}
                  />
                </Space>
                <Space align="start" className="tran-theme">
                  <Button
                    onClick={() => handleClicktheme()}
                    style={{
                      borderRadius: "50%",
                      padding: 0,
                      height: "18px",
                      width: "18px",
                      backgroundColor: data.bgSider,
                    }}
                  >
                    {data.themeIcon ? <ThemeDarkIcon /> : <ThemeLightIcon />}
                  </Button>
                </Space>
                <Translatelang setLang={setLang} />
              </Space>
            </div>
          </Header>

          <Layout style={{ minHeight: "calc(100vh - 64px - 70px)" }}>
            <Sider
              style={{
                overflow: "auto",
                height: "calc(100vh-64px)",
                bottom: 0,
                backgroundColor: data.bgSider,
              }}
              collapsed={collapsed}
            >
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
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                items={items}
                theme={data.theme}
              />
            </Sider>
            <Content>
              <Switch>
                <Route path="/pomodoro">
                  <Pomonoro bgfooter={data.bgfooter} lang={lang} />
                </Route>
                <Route path="/calculator">
                  <BoardNumber />
                </Route>
                <Route path="/chessboard">
                  <Chess />
                </Route>
                <Route path="/minesweep">
                  <Minesweep />
                </Route>
                <Route path="/quotes">
                  <div style={{ margin: "20px" }}>
                    <Title>Quotes</Title>
                    <Space>
                      <Button type="primary" onClick={getNewQuotes}>
                        {tr("Get quotes", lang)}
                      </Button>
                      <Input
                        type="number"
                        value={quoteNum}
                        onChange={(e) => setQuoteNum(e.target.value)}
                      />
                    </Space>
                  </div>
                  <QuoteList quotes={quotes} />
                </Route>

                <Route path="/">
                  <HelloWorld />
                </Route>
              </Switch>
            </Content>
          </Layout>
          <Footer
            style={{
              backgroundColor: data.bgfooter,
              // borderTop: "1px solid #b3afaf",
            }}
          >
            <Space className="footer-content">
              {tr("Copy right by Nguyen Van Dai @2023", lang)}
            </Space>
          </Footer>
        </Layout>
      ) : (
        <Switch>
          <Route path="/login">
            <LoginForm
              onSubmit={async (username, password) => {
                const response = await fetch(
                  "http://localhost:3000/authenticate",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                  }
                );
                const { token } = await response.json();
                console.log("token", token);
                setToken(token);
              }}
            />
          </Route>
        </Switch>
      )}
    </ConfigProvider>
  );
};
export default App;
