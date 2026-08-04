import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext)
    if (!user) {
        return<div>Please Login</div>
    }else {
        return <div> Welcome {user.username}</div>
    }
    
}

export default Profile
