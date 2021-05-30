import React, {useState, useContext} from 'react'
import {LoginContext} from '../contexts/LoginContexts'

const Profile_page = () => {
    const {email} = useContext(LoginContext);

    return (
        <div>
            profile page {email}
        </div>
    )
}

export default Profile_page
