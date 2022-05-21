import './Tutorial.css'

function Tutorial()
{
    return(
        <div id = 'Back-Tutorial'>
            <h3 id ='User-guide'>Serv User Guide</h3>

            <div id = 'Back-Teach' className='tut'>
                <h1>Teachers</h1>

                <h4>
                    <img src='/images/Temp_pic.png' alt = 'image' id ='T-Image'/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                
                </h4>
                
            </div>

            <p className='breaker'></p>

            <div id = 'Back-Student' className='tut'>
                <h1>Students</h1>
            

                <h4>
                    <img src='/images/Temp_pic2.png' alt = 'image' id ='T-Image'/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    
                </h4>
            </div>
            
        </div>
    )
}

export default Tutorial;