import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-orange-700 p-4 text-center text-white text-2xl'>User: {userid} </div>
    )
}

export default User
