import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import "./MenuTop.scss";

export const MenuTop = () => {
  return (
    <div className="menu-top">
      <div className="menu-top__logo"></div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/upcoming">Upcoming</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/popular">Populares</Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/search">Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
