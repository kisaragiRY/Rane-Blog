import React,{useState,useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const location=useLocation();
    const [navBg,setNavBg]=useState();
    const [navLinks,setNavLinks]=useState();
    const [navBorder,setBorder]=useState();
    const [isActive,setActive]=useState(false);

    useEffect(()=>{
        const homeUrl=process.env.PUBLIC_URL;
        if(window.location.pathname===homeUrl|window.location.pathname===homeUrl+'/'){
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
    const toggleClass=()=>{
        setActive(!isActive);
    }
    const navStyle={backgroundColor:navBg,borderBottom:navBorder,zIndex:'100'}
    const navMenuBgcolor={backgroundColor:navBg}
    const Linkcolor={backgroundColor:navBg,color:navLinks};

  return (
    <nav className='navbar' style={navStyle}>
        <div className='navbar-name'>
            <li><Link to='/' style={Linkcolor}>Home</Link></li> 
        </div>
        <div className={isActive?'navbar-menu-links is-active':'navbar-menu-links'}  style={navMenuBgcolor}>
        <li ><Link to='/post'  style={Linkcolor} onClick={()=>{setActive(!isActive);}}>Post</Link></li>
        <li><Link to='/about' style={Linkcolor} onClick={()=>{setActive(!isActive);}}>About</Link></li>
        </div>
        <button className={isActive?'hamburger is-active':'hamburger'} style={navMenuBgcolor} onClick={toggleClass}>
            <span style={{backgroundColor:navLinks}}></span>
            <span style={{backgroundColor:navLinks}}></span>
            <span style={{backgroundColor:navLinks}}></span>
        </button>
    </nav>
  )
}
