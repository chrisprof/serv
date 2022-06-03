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

        let resultDiv = document.createElement('div');
        let nameCont = document.createElement('div');
        let resultBottom = document.createElement('div');
        let viewBtn = document.createElement('btn');
        let nameHeader = document.createElement('h1');
        let job = document.createElement('span');
        let hrs = document.createElement('span');

        job.className='job'
        viewBtn.className='viewBtn'
        hrs.className='hours'
        resultBottom.className='result-bottom'
        nameCont.className='name-cont'
        resultDiv.className='result';


        resultDiv.appendChild(nameCont)
        resultDiv.appendChild(resultBottom)
        nameCont.appendChild(nameHeader)
        resultBottom.appendChild(job)
        resultBottom.appendChild(viewBtn)
        resultBottom.appendChild(hrs)

        job.innerHTML=jobtype;
        hrs.innerHTML="HRs: "+hours;
        viewBtn.innerHTML='view'
        nameHeader.innerHTML=name;
        document.getElementById('results-cont').appendChild(resultDiv)
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
                    makeListing(x,joblist[x][1],joblist[x][0])
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