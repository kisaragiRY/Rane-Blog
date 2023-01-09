import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const location=useLocation();
    const [isActive,setActive]=useState(false);

    const toggleClass=()=>{
        setActive(!isActive);
    }

  return (
    <div className='navbar-container'>
    
        <div className='navbar-logo'>
            <Link to='/'>Home</Link>
        </div>
        <div className={isActive?'navbar-menu-links is-active':'navbar-menu-links'} >
            <Link to='/post'   onClick={()=>{setActive(!isActive);}}>Post</Link>
            <Link to='/about' onClick={()=>{setActive(!isActive);}}>About</Link>
        </div>
        <button className={isActive?'hamburger is-active':'hamburger'} onClick={toggleClass}>
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>
  )
}
