import React, { useContext, useEffect } from "react";
import "./MainPage.css";
import { UserContext } from "../../../App";
import logo from "../../img/logo.png";

const MainPage = () => {
  const {
    userName,
    setUserName,
    userPic,
    setUserPic,
    nav,
    setNav,
    userEmail,
    setUserEmail,
  } = useContext(UserContext);
  return (
    <div className="MainPage__page">
      <h1>
        R-33 <img src={logo} alt="Logo" />
      </h1>
      <div className="MainPage__profile">
        <img src={userPic} alt="userPic" />
        <h2>{userName}</h2>
      </div>
    </div>
  );
};
export default MainPage;
