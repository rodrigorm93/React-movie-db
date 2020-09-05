import React from "react";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import { VideoCameraOutlined, HomeOutlined } from "@ant-design/icons";

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
  const reiniciarPagination = (total_pagination) => {
    setPageTopRated(1);
    setpagination(total_pagination);
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
        <Menu.Item key="app" icon={<HomeOutlined />}>
          <Link
            to="/home"
            onClick={() => reiniciarPagination(total_pages_topRates)}
          >
            MovieDB
          </Link>
        </Menu.Item>

        <SubMenu icon={<VideoCameraOutlined />} title="Movie">
          <Menu.ItemGroup title="Category">
            <Menu.Item
              key="1"
              onClick={() => reiniciarPagination(total_pages_topRates)}
            >
              <NavLink exact activeClassName="active" to="/home">
                Top Rated
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => reiniciarPagination(total_pages_upcoming)}
            >
              <NavLink exact activeClassName="active" to="/upcomingMovie">
                Upcoming
              </NavLink>
            </Menu.Item>

            <Menu.Item
              key="3"
              onClick={() => reiniciarPagination(total_pages_upcoming)}
            >
              <NavLink exact activeClassName="active" to="/PopularMovie">
                Popular
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu icon={<VideoCameraOutlined />} title="TV">
          <Menu.ItemGroup title="Category">
            <Menu.Item
              key="4"
              onClick={() => reiniciarPagination(total_pages_top_tv)}
            >
              <NavLink exact activeClassName="active" to="/topRatedTV">
                Top Rated
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={() => reiniciarPagination(total_popular_tv)}
            >
              <NavLink exact activeClassName="active" to="/popularTV">
                Popular
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <Menu.Item key="login" icon={<HomeOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
