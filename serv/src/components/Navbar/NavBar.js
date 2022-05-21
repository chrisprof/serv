
import { Outlet, Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
    <>
        <nav>
            <ul className='n-list'>
                <li className='n-item'>
                    <Link to='/'>home</Link>
                </li>
                <li className='n-item'>
                    <Link to='/settings'>settings</Link>
                </li>
                <li className='n-item'>
                    <Link to='/aboutus'>about us</Link>
                </li>
                <li className='n-item'>
                    <Link to='/Tutorial'>Need Help?</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
}

export default NavBar;