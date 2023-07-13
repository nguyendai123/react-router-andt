import { Typography, Space, Button } from "antd";
import { useMemo, useEffect } from "react";
import jwtDecode from "jwt-decode";
const { Text } = Typography;

// eslint-disable-next-line react/prop-types
function Profile({ token, logOut, setUser }) {
  const profile = useMemo(() => jwtDecode(token), [token]);

  useEffect(() => {
    setUser(profile.username.slice(0, 1).toUpperCase());
  }, [profile.username, setUser]);

  console.log("posi", profile.position);
  console.log("company", profile.company);
  return (
    <>
      <Space>
        <Text style={{ color: "white", textAlign: "center" }}>
          {profile.username.toUpperCase()}
        </Text>

        <Text style={{ color: "white", textAlign: "center" }} strong>
          {profile.position}
        </Text>
      </Space>
      <Button type="link" onClick={logOut}>
        Logout
      </Button>
    </>
  );
}
export default Profile;
