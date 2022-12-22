import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const location=useLocation();
    const [isActive,setActive]=useState(false);

    useEffect(()=>{
        const homeUrl=process.env.PUBLIC_URL;
        // if(window.location.pathname===homeUrl|window.location.pathname===homeUrl+'/'){
        //     setNavBg("var(--color-text)");
        //     setBorder("solid 0px");
        // }
        // else{
        //     setNavBg("var(--color-bg)");
        //     setBorder("solid 1px");
        // }
    },[location]);
    const toggleClass=()=>{
        setActive(!isActive);
    }

  return (
    <div className='navbar-container'>
    
        <div className='navbar-logo'>
            <li><Link to='/'>Home</Link></li> 
        </div>
        <div className={isActive?'navbar-menu-links is-active':'navbar-menu-links'} >
        <li ><Link to='/post'   onClick={()=>{setActive(!isActive);}}>Post</Link></li>
        <li><Link to='/service' onClick={()=>{setActive(!isActive);}}>Service</Link></li>
        <li><Link to='/about' onClick={()=>{setActive(!isActive);}}>About</Link></li>
        </div>
        <button className={isActive?'hamburger is-active':'hamburger'} onClick={toggleClass}>
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>
  )
}
