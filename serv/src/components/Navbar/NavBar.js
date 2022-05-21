import React from 'react'
import './NavBar.css'
function NavBar() {
    return <body>
                <navbar>
                    <ul className='n-list'>
                        <li className='n-item'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='n-item'>
                            <a href='#'>Settings</a>
                        </li>
                        <li className='n-item'>
                            <a href='#'>About us</a>
                        </li>
                    </ul>
                </navbar>
            </body>
}

export default NavBar;