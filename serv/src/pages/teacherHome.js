import {auth} from '../firebase';
import "./Home.css"
import {useEffect, useState} from "react"


function THome()
{
    auth.onAuthStateChanged(user=>{
        if(!user)
        {
            window.location.href="/"
        }
    })

    const dropdownvalue = () => {
        let select = document.getElementById('dropdownMenu')
        alert(select.value);
    }
    const [username,setUsername] = useState(localStorage.getItem('name'))

    return(
        <div className='centerFlexH'>
            <h1>home</h1>
            <h3 id="welcome">Welcome, {username}</h3>
            <h1 id="guide">Choose your school to get started!</h1>
            <div>              
                <select id="dropdownMenu">
                    <option>choose your school</option>
                    <option value={"dickinson"}>Dickinson High School</option>
                    <option value={"mcnair"}>McNair Academic High School</option>
                    <option value={"hths"}>High Tech High School</option>
                </select>
                <button id="searchBtn"onClick={dropdownvalue}>search</button>
            </div>

        </div>
    )
}

export default THome;