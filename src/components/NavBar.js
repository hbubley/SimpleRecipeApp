import { Link } from 'gatsby'
import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
