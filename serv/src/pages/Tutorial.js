import './Tutorial.css'
import {auth} from '../firebase';
import {useEffect} from "react"


function Tutorial()
{

    auth.onAuthStateChanged(user=>{
        if(!user)
        {
            window.location.href="/"
        }
    })

    return(
        <div id = 'Back-Tutorial'>
            <h3 id ='User-guide'>Serv User Guide</h3>

            <div id = 'Back-Teach' className='tut'>
                <h1 className='T-Purp'>Teachers</h1>

                <img src='https://media-public.canva.com/zblsw/MAD-vkzblsw/1/s.svg' alt = 'image' id ='T-Image'/>

                <h3 className = 'T-h3'>
                    Hello Teachers! This is Serv, a free community service manager made by Jersey city Students! <br/> 

                    As a Teacher you will be able to post requests and delete community service requests.<br/> <br/>

                    1. To start, log in with your JCBOE email. <br/> <br/>

                    2. Then a button will appear on the top of your screen called "Post". <br/> <br/>

                    3. Click on the button and post your Community service opportunity. <br/> <br/>

                    NOTE: Make sure you list: Your Name, The community service offer, Location, and date.<br/>
                    (Requirments are OPTIONAL)
                
                </h3>
                
            </div>

            <p className='breaker'></p>

            <div id = 'Back-Student' className='tut'>
                <h1 className='T-Purp'>Students</h1>
            
                <img src='https://media-public.canva.com/8C-_o/MAEIfT8C-_o/1/s3-1.svg' alt = 'image' id ='S-Image'/>
                <h3 className = 'T-h3'>

                    Hello Students! This is Serv, a free community service manager made by students, just like all of you!<br/>

                    As a student, you will NOT be able to post/request for community service. <br/> <br/>

                    1. To start, log in with your JCPSNJ email <br/> <br/>

                    2. Now, you will find yourself on the main page! <br/> <br/>

                    3. Lastly, you may "reserve" or bookmark requests and save yourself a seat!
                                        
                </h3>
            </div>
            
        </div>
    )
}

export default Tutorial;