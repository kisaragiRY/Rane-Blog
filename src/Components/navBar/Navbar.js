import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const location=useLocation();
    const [navBg,setNavBg]=useState();
    const [navLinks,setNavLinks]=useState();
    useEffect(()=>{
        if(window.location.pathname==="/"){
            setNavBg("var(--color-red)");
            setNavLinks("var(--color-bg)");
        }
        else{
            setNavBg("var(--color-bg)");
            setNavLinks("var(--color-text)");
        }
    },[location]);
    const Bgcolor={backgroundColor:navBg}
    const Linkcolor={backgroundColor:navBg,
                     color:navLinks,};

  return (
    <div className='navbar' style={Bgcolor}>
        <div className='navbar-name'>
            <li><Link to='/' style={Linkcolor}>Rane's Blog</Link></li> 
        </div>
        <div className='navbar-menu-links'  style={Bgcolor}>
        <li ><Link to='/post'  style={Linkcolor}>Post</Link></li>
        <li><Link to='/about' style={Linkcolor}>About</Link></li>
        </div>
    </div>
  )
}
