import {signoutg} from '../firebase';
import './Settings.css'
import {loging, auth} from '../firebase';

function Settings()
{
    function signOut()
    {
        signoutg();
        localStorage.clear();
        window.location.href = "/"
    }

    auth.onAuthStateChanged(()=>{
        if(!auth.currentUser)
        {
            window.location.href="/"
        }
    })

    return(
        <div id="parentDiv" className='centerFlex'>
            <h1>settings</h1>
            <button id="logoutBtn" onClick={signOut}>sign out</button>
        </div>
    )
}

export default Settings;