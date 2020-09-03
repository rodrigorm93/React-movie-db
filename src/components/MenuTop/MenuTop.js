import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
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
        <SubMenu icon={<SettingOutlined />} title="Movie">
          <Menu.ItemGroup title="Category">
            <Menu.Item key="1" onClick={reiniciarPaginationTopRated}>
              <Link to="/">Top Rated</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={reiniciarPaginationUpcoming}>
              <Link to="/upcomingMovie">Upcoming</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu icon={<SettingOutlined />} title="TV">
          <Menu.ItemGroup title="Category">
            <Menu.Item key="1" onClick={reiniciarPaginationTopRatedTV}>
              <Link to="/topRatedTV">Top Rated</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={reiniciarPaginationPopularTV}>
              <Link to="/popularTV">Popular</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};
