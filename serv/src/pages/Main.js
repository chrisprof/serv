import './Main.css'
import {loging, auth} from '../firebase';
import {useEffect, useState} from "react"

function Main()
{
    let proccedingPage = "/home"

    let goHome = () => {window.location.href=proccedingPage}

    function login()
    {
        try{
            loging();
        }
        catch(err){
            return err;
        }
        
    }

    auth.onAuthStateChanged(user=>{
        if(user)
        {
            if(localStorage.getItem('teacher'))
            {
                window.location.href="/thome"
            }

            else
            {
                window.location.href="/shome"
            }
        }
    })

    return(
        <div className="centerFlex" id="homepageParentDiv">
            <img id="homepageMainImg"src="https://www.niche.com/blog/wp-content/uploads/2019/01/importance-of-community-service-1200-1200x794.jpg"/>
            <div className="centerFlex" id="homepageRightDiv">
                <div className="centerFlex"><h1 id="titleHeaderMainpage">serv</h1></div>
                <div className="centerFlex" id="paragraphdiv"><p id="desc">helping students find community service opportunities</p></div>
                <div className="centerFlex"><button id="loginBtn" onClick={auth.currentUser ? goHome : login}>{auth.currentUser ? "home" : "login"}</button></div>
            </div>
        </div>
    )
}

export default Main;