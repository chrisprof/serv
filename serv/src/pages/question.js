import {auth} from '../firebase';
import {useEffect} from "react"


function Post()
{
    auth.onAuthStateChanged(user=>{
        if(!user)
        {
            window.location.href="/"
        }
    })

    function submitAnswer(acttype)
    {
        localStorage.setItem(acttype,true)
    }

    return(
        <div>
            <h1>Are you a teacher or a student?</h1>
            <div>
                <button onClick={()=>{submitAnswer('teacher')}}>Teacher</button>
                <button onClick={()=>{submitAnswer('student')}}>Student</button>
            </div>
        </div>
    )
}

export default Post;