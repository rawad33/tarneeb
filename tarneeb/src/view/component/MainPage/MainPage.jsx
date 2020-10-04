import React, { useState, useEffect } from "react";
import "./MainPage.css";

import logo from "../../img/logo.png";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
const MainPage = () => {
  const [userNmae, setUserName] = useState("");
  const [userPic, setUserPic] = useState("");
  useEffect(() => {
    let token = Cookies.get("loginToken");
    if (token != null) {
      const decoded = jwt.decode(token);
      setUserPic(decoded.userPic);
      setUserName(decoded.name);
    }
  }, []);

  return (
    <div className="MainPage__page">
      <h1>
        R-33 <img src={logo} alt="Logo" />
      </h1>
      <div className="MainPage__profile">
        <img src={userPic} alt="userPic" />
        <h2>{userNmae}</h2>
      </div>
    </div>
  );
};
export default MainPage;
