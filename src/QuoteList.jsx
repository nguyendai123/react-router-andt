import { Card, Typography, Space } from "antd";
import { useState } from "react";
const { Paragraph } = Typography;
// eslint-disable-next-line react/prop-types
function QuoteList({ quotes }) {
  const [ellipsis] = useState(true);
  const styleOuter = {
    display: "grid",
    gridTemplateColumns: `repeat(4, 25%)`,
  };
  const styleInner = {
    display: "inline-block",
    margin: 10,
  };
  return (
    <div style={styleOuter}>
      {
        // eslint-disable-next-line react/prop-types
        quotes.map((q, idx) => (
          <Space key={idx} style={styleInner}>
            <Card
              style={{ minWidth: "200px", height: "200px" }}
              title={q.author}
            >
              <Paragraph
                ellipsis={
                  ellipsis
                    ? {
                        rows: 5,
                        expandable: true,
                        symbol: "more",
                      }
                    : false
                }
              >
                {q.quote}
              </Paragraph>
            </Card>
          </Space>
        ))
      }
    </div>
  );
}
export default QuoteList;
