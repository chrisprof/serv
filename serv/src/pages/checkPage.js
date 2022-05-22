import './checkPage.css'
import {loging, auth} from '../firebase';

function Check()
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
        if(!user)
        {
           return; 
        }

        if(localStorage.getItem('teacher'))
        {
            window.location.href="/thome"
        }

        else if(localStorage.getItem('student'))
        {
            window.location.href="/shome"
        }

        else if(!window.location.href=='/check'){
            window.location.href='/check'
        }
    })

    function checkUser(id)
    {
        localStorage.setItem(id,true)

        if(!auth.currentUser)
        {
           return; 
        }

        if(localStorage.getItem('teacher'))
        {
            window.location.href="/thome"
        }

        else if(localStorage.getItem('student'))
        {
            window.location.href="/shome"
        }

        else if(!window.location.href=='/check'){
            window.location.href='/check'
        }
    }

    return(
        <div id="prntDiv">
            <h1>Are you a teacher or a student?</h1>
            <div id="btnCont">
                <button id="teacher" className="quesBtn" onClick={()=>{checkUser("teacher")}}>Teacher</button>
                <button id="student" className="quesBtn" onClick={()=>{checkUser("student")}}>Student</button>
            </div>
        </div>
    )
}

export default Check;