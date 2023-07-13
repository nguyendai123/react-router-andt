import { useState } from "react";
import { Typography, Space, Input, Button } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

// eslint-disable-next-line react/prop-types
function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        padding: 32,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title>Login</Title>
      <Space direction="vertical">
        <Space direction="vertical">
          <div>
            <Text>Username</Text>
          </div>
          <Input
            prefix={<MailOutlined />}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Space>
        <Space direction="vertical">
          <div>
            <Text>Password</Text>
          </div>
          <Input
            prefix={<UserOutlined />}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Space>
        <Space>
          <Button
            type="primary"
            onClick={async () => {
              console.log("submit");
              onSubmit(username, password);
            }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            Reset
          </Button>
        </Space>
      </Space>
    </div>
  );
}
export default LoginForm;
