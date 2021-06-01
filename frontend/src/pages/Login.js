import React, { useState, useContext } from "react";
import { appContext } from '../contexts/AppContexts';
import "../stylesheets/module.scss";
import {CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import Button from './../components/common/Button';


export default function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const { authenticate } = useContext(appContext);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log('authentic')
    
    authenticate(email,password)
      .then(data => {
        console.log('logged in !', data);
      })
      .catch (err =>{
        console.log("failed to login", err);
      })
  };

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
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              ></input>
            </div>
          </div>
          {/* <Button type="submit" text={'SIGN IN'} /> */}
          <button type="submit">sign in</button>
        </form>
      </div>
    </div>
  );
}
