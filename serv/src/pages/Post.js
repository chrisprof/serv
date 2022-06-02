import {auth,db} from '../firebase';
import {useEffect, useState} from "react"

import { doc, setDoc,getDoc} from "firebase/firestore"; 
import './Post.css'


function Post()
{
    auth.onAuthStateChanged(user=>{
        if(!user)
        {
            window.location.href="/"
        }
    })

    function post()
    {
        const hours = document.getElementById('hours').value;
        const jobtype = document.getElementById('job').value;
        const title = document.getElementById('title').value;
        const school = localStorage.getItem('highschool');

        async function main()
            {
                const docRef = doc(db,"servicereqs",school);
                const docSnap = await getDoc(docRef);
            
                var joblist = docSnap.data()['joblist']; 
                console.log(joblist);
                joblist[String(title)] = [hours,jobtype]
                console.log(joblist);
                await setDoc(doc(db,"servicereqs",school),{
                    joblist
                });
            }

        main();

        alert('Posted')
    }
    const [school, setSchool] = useState(localStorage.getItem('highschool'))

    return(
        <div>
        <h1>post to {school}</h1>
        <div className='flexcent'>
            <div id="text-input-cont">
                <input className="text-input" id="title"type={"text"} placeholder="title"/>
                <input className="text-input" id="job"type={"text"} placeholder="job type"/>
                <input className="text-input" id="hours"type={"text"} placeholder="hours"/>

                <button id="post" onClick={post}>post</button>
            </div>
        </div>
        </div>
    )
}

export default Post;