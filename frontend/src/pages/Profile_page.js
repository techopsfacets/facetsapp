import React, { useEffect, useContext, useState } from "react";
import {appContext} from '../contexts/AppContexts'
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useHistory } from "react-router-dom";

const Profile_page = () => {
  
  const history = useHistory();
  const [email, setEmail] = useState("");

  const { getSession, logout } = useContext(appContext);

  useEffect(() => {
    getSession().then((data) => {
      setEmail(data["email"]);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log('logout')
    
    logout();
    history.push('/login');
    
  };
  // const onSubmit = (event) => {
  //   event.preventDefault();

  //   getSession().then(({ user }) => {
  //     const attributes = [
  //       new CognitoUserAttribute({ Name: "email", Value: email }),
  //     ];

  //     user.updateAttributes(attributes, (err, result) => {
  //       if (err) console.error(err);
  //       console.log(result);
  //     });
  //   });
  // };
  return (
      <div>
          <form onSubmit={onSubmit}>
            profile page this is {email}
            <button type="submit">logout</button>
          </form>
      </div>
  )
}

export default Profile_page
