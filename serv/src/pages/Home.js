import {auth} from '../firebase';
import {useEffect, useState} from "react"


function Home()
{
    useEffect(()=>{
        if(!auth.currentUser&&!window.location.href=='/')
        {
            console.log(window.location.href)
            window.location.href='/'
        }
    },[])

    const [username,setUsername] = useState(localStorage.getItem('name'))
    
    return(
        <div>
            <h1>Home</h1>
            <h2>Welcome, {username}</h2>
        </div>
    )
}

export default Home;