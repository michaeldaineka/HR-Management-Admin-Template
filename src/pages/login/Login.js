import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { userLoginAsync } from "actions/user";
import s from "./Login.module.less";
import logo from "images/logo.svg";

export default () => {
  const [form] = Form.useForm();
  const { TabPane } = Tabs;
  const { Title } = Typography;
  const dispatch = useDispatch();
  const isFetching = useSelector((store) => store.auth.isFetching);
  const [activeKey, setActiveKey] = useState("1");

  const handleValidateName = (rule, value) => {
    if (!/ /.test(value)) {
      return Promise.reject();
    }
    return Promise.resolve();
  };

  const handleValidatePassword = (rule, value) => {
    if (value === form.getFieldsValue().password && value !== undefined) {
      return Promise.resolve();
    }
    return Promise.reject();
  };

  return (
    <Row>
      <Col xs={24} md={12}>
        <section className={s.loginSection}>
          <Tabs
            activeKey={activeKey}
            onChange={(tabNum) => setActiveKey(tabNum)}
            tabPosition={"bottom"}
            centered
            style={{ overflow: "visible" }}
          >
            <TabPane tab="Login" key="1">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={() => dispatch(userLoginAsync())}
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
                  <Button
                    type={"primary"}
                    block
                    htmlType={"submit"}
                    loading={isFetching}
                  >
                    Log In
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Register" key="2">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={() => {
                  setActiveKey("1");
                  form.resetFields();
                }}
                style={{ width: 300, maxWidth: "100%" }}
                form={form}
              >
                <Form.Item
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: " ",
                      validator: handleValidateName,
                    },
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: " ", type: "email" }]}
                >
                  <Input placeholder="Email" />
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
                <Form.Item
                  name="repeatPassword"
                  rules={[
                    {
                      required: true,
                      message: " ",
                      validator: handleValidatePassword,
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Repeat Password"
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
