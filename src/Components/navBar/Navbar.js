import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-menu'>
        <div className='navbar-menu-name'>
            <li><Link to='/'>Rane's Blog</Link></li> 
        </div>
        <div className='navbar-menu-links'>
        <li><Link to='/post'>Post</Link></li>
        <li><Link to='/about'>About</Link></li>
        </div>
    </div>
  )
}
