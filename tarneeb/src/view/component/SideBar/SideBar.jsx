import React, { useState } from "react";
import "./SideBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import Cookies from "js-cookie";

import { Link, useHistory } from "react-router-dom";
import { SidebarData } from "../SidebarData";
import { IconContext } from "react-icons";

const SideBar = ({ userName, userEmail }) => {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const handleLogOut = () => {
    fetch("/api/users/logout", {
      method: "POST",
      body: JSON.stringify({ userName, userEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { success, error } = data;
        if (success) {
          history.replace("/");
          Cookies.remove("loginToken");
        }
      });
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fefbd8" }}>
        <div className="navBar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cNam}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-logout" onClick={handleLogOut}>
              <BiIcons.BiLogOutCircle />
              <span>L-Out</span>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default SideBar;
