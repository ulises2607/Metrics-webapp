import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li> <Link to="/details">para Details</Link> </li>
                <li> <Link to="/">Home</Link></li>
                <li><a href="">Most views</a></li>
                <li><a href="">micIcon</a></li>
                <li><a href="">ConfIcon</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar