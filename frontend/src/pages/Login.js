import React, { useState, useContext } from "react";
import { LoginContext } from '../contexts/AppContexts';
import axios from "axios";
import "../stylesheets/module.scss";
import {CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";


export default function Login() {
const [user,setUser] = useContext(appContext);

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();
    
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });
    
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        setUser(data);
      },
      onFailure: (err) => {
        console.log("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      }
    });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <p>
          <span>Sign in to your</span>
          <span> account.</span>
        </p>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type="Password"
                value={Password}
                onChange={({ target }) => setPassword(target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}
