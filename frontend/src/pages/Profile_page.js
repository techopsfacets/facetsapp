import React, {useState, useContext} from 'react'
import {appContext} from '../contexts/AppContexts'

const Profile_page = () => {
    const {email} = useContext(appContext);

    return (
        <div>
            profile page {email}
        </div>
    )
}

export default Profile_page
