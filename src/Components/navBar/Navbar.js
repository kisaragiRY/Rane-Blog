import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'

import './hamburger.css'
import { NavWrapper } from './NavWrapper.style';
import { useTransitionNavigate } from '../../Helpers/Transition/useTransitionNavigate';

export default function Navbar() {
    const location = useLocation();
    const [isActive,setActive]=useState(false);

    const {transitionNavigate} = useTransitionNavigate();

    const toggleClass=()=>{
        setActive(!isActive);
    }
  return (
    <NavWrapper isHomePage={location.pathname==="/"? true : false}>
        <div className='navbar-logo'>
            <a onClick={() => transitionNavigate("/", "slide-to-right")}>Home</a>

        </div>
        <div className={isActive?'navbar-menu-links is-active':'navbar-menu-links'} onClick={toggleClass}>
            <a onClick={() => transitionNavigate("/works", "slide-to-right")}>works</a>
            <a onClick={() => transitionNavigate("/post", "slide-to-right")}>post</a>
            <a onClick={() => transitionNavigate("/about", "slide-to-right")}>about</a>

        </div>
        <button className={isActive?'hamburger is-active':'hamburger'} onClick={toggleClass}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </NavWrapper>
    

  )
}
