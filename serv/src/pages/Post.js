import {auth} from '../firebase';
import {useEffect} from "react"


function Post()
{
    useEffect(()=>{
        if(!auth.currentUser&&!window.location.href=='/')
        {
            console.log(window.location.href)
            window.location.href='/'
        }
    },[])

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Post;