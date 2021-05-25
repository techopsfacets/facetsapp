import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/module.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  async function handleSubmit(e) {
    const user = { email, password };
    // const response = await axios.post("http://danbackend:3000/api/login", user);
    let response = {
      data: {
        username: "themisterjuly",
        firstName: "Andrew",
        lastName: "Scott",
        categories: ["Beauty", "Fashion", "Fitness"]
      }
    };
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <p>
          <span>Sign in to your</span>
          <span> account.</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Email</label>
              <input
                type="email"
                onChange={({ target }) => setEmail(target.value)}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type="Password"
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
