import React from "react";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";

import "./MenuTop.scss";
const { SubMenu } = Menu;

export const MenuTop = ({
  setPageTopRated,
  total_pages_topRates,
  setpagination,
  total_pages_upcoming,
  total_pages_top_tv,
  total_popular_tv,
}) => {
  const reiniciarPaginationTopRated = () => {
    setPageTopRated(1);
    setpagination(total_pages_topRates);
  };

  const reiniciarPaginationUpcoming = () => {
    setPageTopRated(1);
    setpagination(total_pages_upcoming);
  };

  const reiniciarPaginationTopRatedTV = () => {
    setPageTopRated(1);
    setpagination(total_pages_top_tv);
  };

  const reiniciarPaginationPopularTV = () => {
    setPageTopRated(1);
    setpagination(total_popular_tv);
  };

  return (
    <div className="menu-top">
      <div className="menu-top__logo"></div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="app">
          <Link exact to="/">
            MovieDB
          </Link>
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="Movie">
          <Menu.ItemGroup title="Category">
            <Menu.Item key="1" onClick={reiniciarPaginationTopRated}>
              <NavLink exact activeClassName="active" to="/">
                Top Rated
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" onClick={reiniciarPaginationUpcoming}>
              <NavLink exact activeClassName="active" to="/upcomingMovie">
                Upcoming
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu icon={<SettingOutlined />} title="TV">
          <Menu.ItemGroup title="Category">
            <Menu.Item key="3" onClick={reiniciarPaginationTopRatedTV}>
              <NavLink exact activeClassName="active" to="/topRatedTV">
                Top Rated
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4" onClick={reiniciarPaginationPopularTV}>
              <NavLink exact activeClassName="active" to="/popularTV">
                Popular
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};
