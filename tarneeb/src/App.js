import React, { useState } from 'react';

import './App.css';
import Login from "./view/component/LogIn/LogIn";
import Register from "./view/component/Register/Register";
import MainPage from './view/component/MainPage/MainPage';
import SideBar from './view/component/SideBar/SideBar';
import Games from './view/component/Games/Games';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";




function App() {
  const [nav, setNav] = useState(true)
  return (
    <div className="App">
      <Router>

        <SideBar />

        <div>
          <Switch>
            <Route exact={true} path="/" >
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Router path="/mainPage">
              <MainPage />
            </Router>
            <Router path='/games'>
              <Games />
            </Router>


          </Switch>
        </div>
      </Router>

    </div>

  );
}

export default App;
