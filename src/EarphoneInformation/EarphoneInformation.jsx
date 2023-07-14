import { useMemo } from "react";
import jwtDecode from "jwt-decode";

// eslint-disable-next-line react/prop-types
const EarphoneInformation = ({ token }) => {
  const profile = useMemo(() => jwtDecode(token), [token]);
  return [
    { label: <div>{profile.username}</div>, key: "1" },
    { label: <div>{profile.position}</div>, key: "2" },
    { label: <div>{profile.company}</div>, key: "3" },
  ];
};

export default EarphoneInformation;
