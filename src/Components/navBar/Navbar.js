import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'
import './navbar.css'
import { NavWrapper } from './NavWrapper.style';

export default function Navbar() {
    const location=useLocation();
    const [isActive,setActive]=useState(false);

    const toggleClass=()=>{
        setActive(!isActive);
    }
  return (
    <NavWrapper isHomePage={location.pathname==="/"? true : false}>
        <div className='navbar-logo'>
            <Link to='/'>Home</Link>
        </div>
        <div className='navbar-menu-links' >
            <Link to='/works'>works</Link>
            <Link to='/post'>post</Link>
            <Link to='/about'>about</Link>
        </div>
        <button className={isActive?'hamburger is-active':'hamburger'} onClick={toggleClass}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </NavWrapper>
    

  )
}
