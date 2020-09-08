import React, { useContext } from "react";
import { Menu } from "antd";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  VideoCameraOutlined,
  HomeOutlined,
  SearchOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import "./MenuTop.scss";
import { AuthContext } from "../Auth/AuthContext";
import { types } from "../../types/types";
import { URL_API, API } from "../../helpers/API";
import { useFetch } from "../../hooks/useFetch";
const { SubMenu } = Menu;

export const MenuTop = () => {
  const reiniciarPagination = (total_pagination) => {
    setPageTopRated(1);
    setpagination(total_pagination);
  };

  const { user, dispatch, setPageTopRated, setpagination } = useContext(
    AuthContext
  ); //le asigamos nuestro componente usercontext para buscar todo lo que tenga adentro

  const url = `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=1`;
  const { data } = useFetch(url);
  const { total_pages: total_pages_topRates } = !!data && data;

  const urlUpcoming = `${URL_API}/movie/upcoming?api_key=${API}&language=es-ES&page=1`;
  const { data: dataUpcoming } = useFetch(urlUpcoming);
  const { total_pages: total_pages_upcoming } = !!dataUpcoming && dataUpcoming;

  const urlTopRatedTV = `${URL_API}/tv/top_rated?api_key=${API}&language=es-ES&page=1`;
  const { data: dataTopRatedTV } = useFetch(urlTopRatedTV);
  const { total_pages: total_pages_top_tv } =
    !!dataTopRatedTV && dataTopRatedTV;

  const urlPopularTV = `${URL_API}/tv/popular?api_key=${API}&language=es-ES&page=1`;
  const { data: dataPopularTV } = useFetch(urlPopularTV);
  const { total_pages: total_popular_tv } = !!dataPopularTV && dataPopularTV;

  const history = useHistory(); //hoosk des react-dom para poder uswer el hytory en un compoenente que no es una ruta
  const handleLogout = () => {
    history.replace("/");
    dispatch({
      // disparamos la accion

      type: types.logout,
    });
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

        <Menu.Item key="search" icon={<SearchOutlined />}>
          <Link to="/search">Search</Link>
        </Menu.Item>

        {user.logged ? (
          <SubMenu icon={<VideoCameraOutlined />} title={user.name}>
            <Menu.Item key="logout" icon={<LoginOutlined />}>
              <button onClick={handleLogout}>Logout</button>
            </Menu.Item>

            <Menu.Item key="addPelicula" icon={<LoginOutlined />}>
              <Link to="/addPelicula">Agregar Pelicula</Link>
            </Menu.Item>
          </SubMenu>
        ) : (
          <Menu.Item key="logout" icon={<LoginOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};
