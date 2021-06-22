import React, { useEffect, useContext, useState } from "react";
import {appContext} from '../contexts/AppContexts'
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const Profile_page = () => {
    const [email, setEmail] = useState("");

    const { getSession } = useContext(appContext);
  
    useEffect(() => {
      getSession().then((data) => {
        setEmail(data["email"]);
      });
    }, []);
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      getSession().then(({ user }) => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: email }),
        ];
  
        user.updateAttributes(attributes, (err, result) => {
          if (err) console.error(err);
          console.log(result);
        });
      });
    };
    return (
        <div>
            profile page thji is {email}
        </div>
    )
}

export default Profile_page
