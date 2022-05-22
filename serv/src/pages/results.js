import {auth} from '../firebase';
import {useEffect,useState} from "react"
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
        let paragraph = document.createElement('p');
        let nameHeader = document.createElement('h1');
        let job = document.createElement('span');
        let hrs = document.createElement('span');

        job.className='job'
        hrs.className='hours'
        resultBottom.className='result-bottom'
        nameCont.className='name-cont'
        resultDiv.className='result';

        resultDiv.appendChild(nameCont)
        resultDiv.appendChild(resultBottom)
        nameCont.appendChild(nameHeader)
        resultBottom.appendChild(paragraph)
        paragraph.appendChild(job)
        paragraph.appendChild(hrs)

        job.innerHTML=jobtype;
        hrs.innerHTML=hours;
        nameHeader.innerHTML=name;
        document.getElementById('results-cont').appendChild(resultDiv)
    }

    function test()
    {
        makeListing('hi','hi','hi');
    }

    return(
        <div>
            <h1>results for {school}</h1>
            <div id="results-cont">
                <div className='result'>
                    <div className="name-cont">
                        <h1>Name</h1>
                    </div>
                    <div className='result-bottom'>
                        <p><span className='job'>Job Type</span> <span className='hours'>Hours</span></p>
                    </div>
                </div>
            </div>

            <button onClick={test}>click</button>
        </div>
    )
}

export default Results;