import React from "react";
import { LoginSection } from "./LoginView";
import { Typography } from "antd";

export default () => {
  const { Text } = Typography;
  return (
    <LoginSection>
      <Text>Login page</Text>
    </LoginSection>
  );
};
