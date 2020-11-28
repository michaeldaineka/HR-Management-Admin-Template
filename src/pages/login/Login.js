import React from "react";
import { Button, Layout, Row, Col, Tabs } from "antd";
import s from "./Login.module.less";
import logo from "images/logo.svg";

export default () => {
  const { TabPane } = Tabs;
  return (
    <Row>
      <Col sm={24} md={12}>
        <section className={s.loginSection}>
          <Tabs defaultActiveKey="1" tabPosition={"bottom"}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </section>
      </Col>
      <Col sm={24} md={12}>
        <section className={s.infoSection}>
          <img src={logo} />
        </section>
      </Col>
    </Row>
  );
};
