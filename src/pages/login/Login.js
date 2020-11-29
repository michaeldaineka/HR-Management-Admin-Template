import React from "react";
import { Button, Input, Row, Col, Tabs, Space, Typography } from "antd";
import s from "./Login.module.less";
import logo from "images/logo.svg";

export default () => {
  const { TabPane } = Tabs;
  const {Title} = Typography;
  return (
    <Row>
      <Col sm={24} md={12}>
        <section className={s.loginSection}>
          <Tabs defaultActiveKey="1" tabPosition={"bottom"} centered>
            <TabPane tab="Login" key="1">
              <Space direction={"vertical"} size={"middle"}>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button type={"primary"} block>Log In</Button>
              </Space>
            </TabPane>
            <TabPane tab="Register" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </section>
      </Col>
      <Col sm={24} md={12}>
        <section className={s.infoSection}>
          <img src={logo} alt={"MoveUp"} />
          <Title level={1}>HR Management Admin Template</Title>
        </section>
      </Col>
    </Row>
  );
};
