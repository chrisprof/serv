import React from 'react'
import './NavBar.css'
function NavBar() {
    return <body>
                <navbar>
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
                </navbar>
            </body>
}

export default NavBar;