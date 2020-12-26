import React from "react";
import s from "./Sidebar.module.less";
import logo from "images/logo.svg";
import { Button } from "antd";
import navbarSchema from "./schema/navbarSchema";
import { ReactComponent as SearchIcon } from "images/icons/line/settings.svg";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.navbar}>
        <img src={logo} alt={"MoveUp"} className={s.logo} />
        <ul className={s.navbarList}>
          {navbarSchema[0].map((item) => (
            <li key={item.alt}>
              <Button type="text" icon={item.icon} className={s.icon}/>
            </li>
          ))}
          {navbarSchema[1].map((item) => (
            <li key={item.alt} className={s.navbarListBottom}>
              <Button type="text" icon={item.icon ? item.icon : <img src={item.img} alt={item.alt} className={s.avatar}/>} className={s.icon} />
            </li>
          ))}
        </ul>
      </nav>
      <nav className={s.menu}></nav>
    </aside>
  );
};

export default Sidebar;
