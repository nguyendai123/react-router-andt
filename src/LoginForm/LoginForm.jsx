import { Button, Input, Space, Typography } from "antd";

import { useState } from "react";
const { Text, Title } = Typography;
function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <Title>Login</Title>
      <Space direction="vertical">
        <Space direction="vertical">
          <div>
            <Text>Username</Text>
          </div>
          <Input
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Space>
        <Space>
          <Button
            type="primary"
            onClick={async () => {
              o;
            }}
          >
            Login
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
