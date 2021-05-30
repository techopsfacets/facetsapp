import React, {useState, useContext} from 'react'
import {appContext} from '../contexts/AppContexts'

const Profile_page = () => {
    const user = useContext(appContext);

    return (
        <div>
            profile page thji is {user.email}
        </div>
    )
}

export default Profile_page
