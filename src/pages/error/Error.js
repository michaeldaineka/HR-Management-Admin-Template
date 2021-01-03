import React from "react";
import { Typography, Space, Button, Card } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import s from "./Error.module.less";

const Error = () => {
  const { Title } = Typography;
  const history = useHistory();
  return (
    <div className={`${s.errorPage} error`}>
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
    </div>
  );
};

export default Error;
