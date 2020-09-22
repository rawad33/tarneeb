import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./view/component/LogIn/LogIn"
import Register from "./view/component/Register/Register"
import MainPage from './view/component/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
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


          </Switch>
        </div>
      </Router>

    </div>

  );
}

export default App;
