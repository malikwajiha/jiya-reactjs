import React, { useEffect, useState } from 'react'
import img from '../../assets/image1.jpg'

function Github() {
    const[data, setdata] = useState([])
    useEffect(()=>{
            fetch('https://api.github.com/users/malikwajiha')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                useState(data)
            })
        },[])


    return (
        <div  className='bg-orange-700 p-4 text-center text-white text-2xl'
        >GitHub Followers : {data.followers} 
        <img src={img} alt='git picture' width={300}></img>
        </div>
    )
}

export default Github
