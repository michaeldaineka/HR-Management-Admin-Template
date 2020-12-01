import React from "react";
import {
  Button,
  Input,
  Row,
  Col,
  Tabs,
  Space,
  Typography,
  Form,
  Checkbox,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import s from "./Login.module.less";
import logo from "images/logo.svg";

export default () => {
  const { TabPane } = Tabs;
  const { Title } = Typography;
  return (
    <Row>
      <Col xs={24} md={12}>
        <section className={s.loginSection}>
          <Tabs
            defaultActiveKey="1"
            tabPosition={"bottom"}
            centered
            style={{ overflow: "visible" }}
          >
            <TabPane tab="Login" key="1">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={() => alert("kek")}
                onFinishFailed={() => {}}
                style={{ width: 300, maxWidth: "100%" }}
              >
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: " ", type: "email" }]}
                  initialValue={"admin@themebranch.com"}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: " " }]}
                  initialValue={"password"}
                >
                  <Input.Password
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Link to="/" style={{ float: "right" }}>
                    Forgot password
                  </Link>
                </Form.Item>
                <Form.Item>
                  <Button type={"primary"} block htmlType={"submit"}>
                    Log In
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Register" key="2">
              <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={() => alert("kek")}
                  onFinishFailed={() => {}}
                  style={{ width: 300, maxWidth: "100%" }}
              >
                <Form.Item
                    name="fullname"
                    rules={[{ required: true, message: " " }]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: " ", type: "email" }]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: " " }]}
                >
                  <Input.Password
                      placeholder="Password"
                      iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                  />
                </Form.Item>
                <Form.Item>
                  <Button type={"primary"} block htmlType={"submit"}>
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </section>
      </Col>
      <Col xs={24} md={12}>
        <section className={s.infoSection}>
          <Space direction={"vertical"} align={"center"} size={"large"}>
            <img src={logo} alt={"MoveUp"} />
            <Title level={2} className={s.title}>
              HR Management Admin Template
            </Title>
          </Space>
        </section>
      </Col>
    </Row>
  );
};
