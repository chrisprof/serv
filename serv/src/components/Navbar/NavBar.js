import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
    <nav>
        <ul className='n-list'>
            <li className='n-item'>
                <a href='#'>home</a>
            </li>
            <li className='n-item'>
                <a href='#'>settings</a>
            </li>
            <li className='n-item'>
                <a href='#'>about us</a>
            </li>
        </ul>
    </nav>   
    )
}

export default NavBar;