import React, {useState} from "react";
import { BrowserRouter as  Switch, Route } from 'react-router-dom';

import NavBar from "./components/common/Header.js";
import Login from "./pages/Login.js";
import Signup_User from "./pages/signup_page/Signup_User.js";
import Signup_Type from "./pages/signup_page/Signup_Type";
import Signup_Desc from "./pages/signup_page/Signup_Desc";
import Signup_Cat from "./pages/signup_page/Signup_Cat";
import Signup_Social from "./pages/signup_page/Signup_Social";
import Landing_page from "./pages/Landing_page";
import Footer from "./components/common/Footer";
import Creator_info_page from "./pages/Creator_info_page";
import Profile_page from "./pages/Profile_page.js";
import { LoginContext } from './contexts/LoginContexts';


export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContext.Provider value={{email, setEmail, password, setPassword}}>
    <div>
      <Switch>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exac1t path="/dashboard">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Login />
        </Route>
        <Route exact path="/workflow">
          <Login />
        </Route>
        <Route exact path="/signuptype">
          <Signup_Type />
        </Route>
        <Route exact path="/signupsocial">
          <Signup_Social />
        </Route>
        <Route exact path="/signupuser">
          <Signup_User/>
        </Route>
        <Route exact path="/signupdesc">
          <Signup_Desc />
        </Route>
        <Route exact path="/signupcat">
          <Signup_Cat />
        </Route>
        <Route exact path="/creatorinfo">
          <NavBar />
          <Creator_info_page />
        </Route>
        <Route exact path="/profilepage">
            <Profile_page />
        </Route>
        <Route exact path="/">
          <NavBar />
          <Landing_page />
        </Route>
      </Switch>
    </div>
    </LoginContext.Provider>
  );
}
