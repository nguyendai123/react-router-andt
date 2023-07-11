import { Avatar, Space, Typography } from "antd";
import jwtDecode from "jwt-decode";
import { useMemo } from "react";
const { Text } = Typography;
function Profile({ token, Logout }) {
  const profile = useMemo(() => jwtDecode(token));

  return (
    <Space>
      <Avatar size={48}>{profile.username}</Avatar>
      <Text>{profile.company}</Text>
      <Text>{profile.position}</Text>
    </Space>
  );
}

export default Profile;
