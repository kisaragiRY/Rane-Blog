import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const location=useLocation();
    const [navBg,setNavBg]=useState();
    const [navLinks,setNavLinks]=useState();
    const [navBorder,setBorder]=useState();
    useEffect(()=>{
        if(window.location.pathname==="/"){
            setNavBg("var(--color-red)");
            setNavLinks("var(--color-bg)");
            setBorder("solid 0px");
        }
        else{
            setNavBg("var(--color-bg)");
            setNavLinks("var(--color-text)");
            setBorder("solid 1px");
        }
    },[location]);
    const navStyle={backgroundColor:navBg,borderBottom:navBorder}
    const navMenuBgcolor={backgroundColor:navBg}
    const Linkcolor={backgroundColor:navBg,color:navLinks};

  return (
    <nav className='navbar' style={navStyle}>
        <div className='navbar-name'>
            <li><Link to='/' style={Linkcolor}>Rane's Blog</Link></li> 
        </div>
        <div className='navbar-menu-links'  style={navMenuBgcolor}>
        <li ><Link to='/post'  style={Linkcolor}>Post</Link></li>
        <li><Link to='/about' style={Linkcolor}>About</Link></li>
        </div>
    </nav>
  )
}
