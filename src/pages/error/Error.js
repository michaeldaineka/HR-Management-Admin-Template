import React from "react";
import ReactDOM from "react-dom";
import { Typography, Space, Button, Card } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import s from "./Error.module.less";

const Error = () => {
  const { Title } = Typography;
  const history = useHistory();
  return ReactDOM.createPortal(
    <section className={s.errorPage}>
      <Card>
        <Space direction={"vertical"} align={"center"}>
          <Title className={s.title}>404</Title>
          <Button
            type={"primary"}
            icon={<LeftOutlined />}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Space>
      </Card>
    </section>,
    document.getElementById("root")
  );
};

export default Error;
