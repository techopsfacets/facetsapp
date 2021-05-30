import React, { useState } from 'react'
import { CognitoUserPool } from "amazon-cognito-identity-js"
import '../../stylesheets/layout.scss'
import Button from '../../components/common/Button'
import UserPool from '../../UserPool'

const Signup_User = () => {
    const [firstname, setfirstname] =  useState ("");
    const [lastname, setlastname] = useState ("");
    const [email, setEmail] =  useState ("");
    const [password, setPassword] = useState ("");
    const [passwordconfirm, setPasswordConfirm] = useState ("");


    const onSubmit = event => {
        event.preventDefault();
        console.log("submitted");
        UserPool.signUp(email, password, [], null, (err, data) =>{
            if(err) 
                console.error(err);
            console.log(data);
        })
    };
   
    return (
        <div>
        <form onSubmit={onSubmit}>
            <div className = 'signupPage'>
                <div className = 'signupBlock'>
                    <div className = 'signupHeader'>
                        Sign Up
                    </div>
                    <div className = 'signupDesc'>
                        Wahoo!  You're on your way to great things.  Let's get your account set up!{"\n"}
                    </div>
                    <div className= 'signupUserBox'>
                        <div className ='signupfirstname'> First Name </div>
                        <input className = 'signupFirstNameInput' value={firstname} 
                                onChange={event=> setfirstname(event.target.value)} 
                                type = 'text' />
                        <div className = 'signupLastName'> Last Name </div>
                        <input className = 'signupLastNameInput'  value={lastname} 
                                onChange={event=> setlastname(event.target.value)} 
                                type = 'text' />
                        <div className = 'signupEmail'> Email Address </div>
                        <input className = 'signupEmailInput' value={email} 
                                onChange={event=> setEmail(event.target.value)} 
                                type = 'text' />
                        <div className = 'signupPassword' > Password </div>
                        <input className = 'signupPasswordInput' value={password} 
                                onChange={event=> setPassword(event.target.value)}  
                                type = 'text' />
                        <div className = 'signupPasswordConfirm' > Confirm Password </div>
                        <input className = 'signupPasswordInputConfirm'  value={passwordconfirm} 
                                onChange={event=> setPasswordConfirm(event.target.value)}  
                                type = 'text' />

                    </div>
                    <button type = "submit">signup</button>
                    {/* <div className = 'signupButtonNext'>
                        <Button  text={'NEXTUser'} />
                    </div> */}
                </div>
                <div className = 'signupFooter'>
                    By signing up you are creating a facets account, and you {"\n"}
                    agree to facet’s Term Of Use and Privacy Policy {"\n"}
                </div>
            </div>
        </form>
        </div>
    )
}

export default Signup_User
