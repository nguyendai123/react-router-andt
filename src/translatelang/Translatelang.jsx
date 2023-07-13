import "./translatelang.css";
import { Dropdown, Space } from "antd";
import enflag from "../assets/enflag.png";
import viflag from "../assets/vnflag.png";
import { useState } from "react";

const items = [
  {
    key: "en",
    label: (
      <Space align="center">
        <Space>
          <img
            style={{
              width: "26px",
              height: "26px",
            }}
            src={enflag}
            alt=""
          />
        </Space>
        <Space>English</Space>
      </Space>
    ),
  },
  {
    key: "vi",
    label: (
      <Space align="center">
        <Space>
          <img
            style={{
              width: "26px",
              height: "26px",
            }}
            src={viflag}
            alt=""
          />
        </Space>
        <Space>VietNamese</Space>
      </Space>
    ),
  },
];
// eslint-disable-next-line react/prop-types
export const Translatelang = ({ setLang }) => {
  const [currentFlag, setCurrentFlag] = useState({
    flag: enflag,
    title: "English",
  });
  const onClick = ({ key }) => {
    setLang(key);
    return key == "en"
      ? setCurrentFlag({ flag: enflag, title: "English" })
      : setCurrentFlag({ flag: viflag, title: "VietNamese" });
  };
  return (
    <Space align="start">
      <Dropdown
        menu={{
          items,
          onClick,
        }}
        placement="bottomRight"
      >
        <div>
          <Space align="start" className="trans-language-header">
            <Space
              className=""
              style={{
                color: "white",
              }}
            >
              <img
                style={{
                  marginTop: "20px",
                  width: "26px",
                  height: "26px",
                }}
                src={currentFlag.flag}
                alt=""
              />
            </Space>
            <Space
              style={{
                color: "white",
              }}
            >
              {currentFlag.title}
            </Space>
          </Space>
        </div>
      </Dropdown>
    </Space>
  );
};
