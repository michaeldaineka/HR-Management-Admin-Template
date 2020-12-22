import React from "react";
import s from "./Sidebar.module.less";
import logo from 'images/logo.svg'

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.navbar}>
          <img src={logo} alt={"MoveUp"} className={s.logo}/>
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </nav>
      <nav className={s.menu}></nav>
    </aside>
  );
};

export default Sidebar;
