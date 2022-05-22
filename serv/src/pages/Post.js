import {auth} from '../firebase';
import {useEffect} from "react"


function Post()
{
    auth.onAuthStateChanged(()=>{
        if(!auth.currentUser&&!localStorage.getItem('teacher'))
        {
            window.location.href="/"
        }
    })

    return(
        <div>
            <h1>post</h1>
        </div>
    )
}

export default Post;