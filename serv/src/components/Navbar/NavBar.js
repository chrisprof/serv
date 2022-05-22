
import { Outlet, Link } from "react-router-dom";
import { auth } from "../../firebase";
import './NavBar.css'

function NavBar() {
    return (
    <>
        <nav>
            <ul className='n-list'>
                <li className='n-item'>
                    <Link to={auth.currentUser ? localStorage.getItem('teacher') ? '/thome': '/shome' : '/'}>home</Link>
                </li>
                <li className='n-item'>
                    <Link to='/settings'>settings</Link>
                </li>
                <li className='n-item'>
                    <Link to='/aboutus'>about us</Link>
                </li>
                <li className='n-item'>
                    <Link to='/tutorial'>help</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
}

export default NavBar;