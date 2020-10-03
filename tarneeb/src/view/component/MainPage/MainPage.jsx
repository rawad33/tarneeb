import React from "react";
import "./MainPage.css";

import logo from "../../img/logo.png";

const MainPage = () => {
  return (
    <div className="MainPage__page">
      <h1>
        R-33 <img src={logo} alt="Logo" />
      </h1>
    </div>
  );
};
export default MainPage;
