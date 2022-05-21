import {signoutg} from '../firebase';
import './Settings.css'

function Settings()
{
    function signOut()
    {
        signoutg();
        localStorage.clear();
        window.location.href = "/"
    }
    return(
        <div id="parentDiv" className='centerFlex'>
            <h1>Settings</h1>
            <button id="logoutBtn" onClick={signOut}>sign out</button>
        </div>
    )
}

export default Settings;