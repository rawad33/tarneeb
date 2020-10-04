import React, { useState, createContext, useEffect } from 'react';

import './App.css';
import Login from "./view/component/LogIn/LogIn";
import Register from "./view/component/Register/Register";
import MainPage from './view/component/MainPage/MainPage';
import SideBar from './view/component/SideBar/SideBar';
import Games from './view/component/Games/Games';
import Tarneeb from './view/component/Tarneeb/Tarneeb';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export const UserContext = createContext(null)



function App() {
  const [nav, setNav] = useState(true)
  const [userName, setUserName] = useState("");
  const [userPic, setUserPic] = useState("");
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    let token = Cookies.get("loginToken");
    if (token != null) {
      const decoded = jwt.decode(token);
      setUserPic(decoded.userPic);
      setUserName(decoded.name);
      setUserEmail(decoded.userName)
    }
  }, []);

  return (
    <div className="App">
      <Router>

        <SideBar userEmail={userEmail} userName={userName} />

        <div>
          <UserContext.Provider value={{ userName, setUserName, userPic, setUserPic, nav, setNav, userEmail, setUserEmail }}>
            <Switch>
              <Route exact={true} path="/" >
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>

              <Router path='/tarneeb'>
                <Tarneeb />
              </Router>
              <Router path='/games'>
                <Games />
              </Router>
              <Router path="/mainPage">
                <MainPage />
              </Router>



            </Switch>
          </UserContext.Provider>
        </div>
      </Router>

    </div>

  );
}

export default App;
