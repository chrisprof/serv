import {auth} from '../firebase';
import {useEffect, useState} from "react"


function Home()
{
    auth.onAuthStateChanged(()=>{
        if(!auth.currentUser)
        {
            window.location.href="/"
        }
    })

    const [username,setUsername] = useState(localStorage.getItem('name'))

    return(
        <div>
            <h1>home</h1>
            <h2>Welcome, {username}</h2>
        </div>
    )
}

export default Home;