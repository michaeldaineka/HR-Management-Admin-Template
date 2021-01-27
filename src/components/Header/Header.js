import React from "react";
import s from "./Header.module.less";
import { useLocation } from "react-router-dom";
import { Typography, Select } from "antd";
import menuSchema from "../Sidebar/schema/menuSchema";
import navbarSchema from "../Sidebar/schema/navbarSchema";

const allSchemas = Array.prototype.concat(menuSchema, navbarSchema);
allSchemas.forEach((item, index, arr) => {
  if (Array.isArray(item)) {
    allSchemas.push(...item);
    allSchemas.splice(index, 1, []);
  }
});

const Header = () => {
  const {Option} = Select;
  const { Title } = Typography;
  const location = useLocation();
  return (
    <header className={s.header}>
      {allSchemas.map(
        (item) =>
          location.pathname === item.link && (
            <Title level={4} className={s.title} >
              {item.alt}
            </Title>
          )
      )}
      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </header>
  );
};

export default Header;
