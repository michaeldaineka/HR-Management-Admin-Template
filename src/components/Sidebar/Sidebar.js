import React from "react";
import { Link } from "react-router-dom";
import s from "./Sidebar.module.less";
import logo from "images/logo.svg";
import { Button, Typography } from "antd";
import navbarSchema from "./schema/navbarSchema";
import menuSchema from "./schema/menuSchema";

const Sidebar = () => {
  const { Title } = Typography;
  return (
    <aside className={s.sidebar}>
      <nav className={s.navbar}>
        <img src={logo} alt={"MoveUp"} className={s.logo} />
        <ul className={s.navbarList}>
          {navbarSchema[0].map((item) => (
            <li key={item.alt}>
              <Link to={item.link}>
                <Button type="text" icon={item.icon} className={s.icon} />
              </Link>
            </li>
          ))}
          {navbarSchema[1].map((item) => (
            <li key={item.alt} className={s.navbarListBottom}>
              <Button
                type="text"
                icon={
                  item.icon ? (
                    item.icon
                  ) : (
                    <img src={item.img} alt={item.alt} className={s.avatar} />
                  )
                }
                className={s.icon}
              />
            </li>
          ))}
        </ul>
      </nav>
      <nav className={s.menu}>
        <Title level={4}>MoveUp</Title>
      </nav>
    </aside>
  );
};

export default Sidebar;
