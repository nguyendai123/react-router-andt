import { Typography } from "antd";
const { Title } = Typography;

export const HelloWorld = () => {
  return (
    <Title
      style={{
        color: "black",
        margin: "20px",
      }}
    >
      Nguyễn Văn Đại
    </Title>
  );
};

export default HelloWorld;
