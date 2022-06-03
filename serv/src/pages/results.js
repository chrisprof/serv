import {auth,db} from '../firebase';
import {useEffect, useState} from "react"
import { doc,getDoc} from "firebase/firestore"; 
import './results.css'


function Results()
{
    
    auth.onAuthStateChanged(user=>{
        if(!user)
        {
            window.location.href="/"
        }
    })
    const [school, setSchool] = useState(localStorage.getItem('highschool'))

    function makeListing(name,jobtype,hours) {

    }

    function load(){
        const place = localStorage.getItem('highschool')
        async function main(){
            const docRef = doc(db, "servicereqs", place);
            const docSnap = await getDoc(docRef);
        
            try{
                const joblist = docSnap.data()['joblist'];
                for(var x in joblist.keys().length)
                {
                    console.log(x)
                }
            }

            catch{
                console.log("No entries")
            }
        }

        main();
    }

    useEffect(()=>{
        load();
        console.log('hi')
    },[])

    return(
        <div>
            <h1>results for {school}</h1>
            <div id="results-cont">
            </div>
        </div>
    )
}

export default Results;