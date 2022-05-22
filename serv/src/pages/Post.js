import {auth} from '../firebase';
import {useEffect} from "react"
import './Post.css'


function Post()
{
    auth.onAuthStateChanged(user=>{
        if(!user)
        {
            window.location.href="/"
        }
    })

    return(
        <div>
            <h1>post</h1>
            <div id="text-input-cont">
                <input class="text-input" type={"text"} placeholder="Title"/>
                <input class="text-input" type={"text"} placeholder="Description"/>
                <input class="text-input" type={"text"} placeholder="Hours"/>
                <button>post</button>
            </div>
        </div>
    )
}

export default Post;