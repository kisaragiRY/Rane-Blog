import React from 'react'
import { Outlet } from 'react-router';
import { Navbar, Footer } from '../Components';
import { useLocation} from 'react-router-dom'

import {
    ScrollRestoration
  } from 'react-router-dom';

export default function RootLayout() {

  const location = useLocation();

  return (
    <div id='root-layout'>
        <ScrollRestoration />
        <Navbar/>
        <Outlet/>
        {
          location.pathname === "/"?
           "" : <Footer/>
        }
        
    </div>
  )
}
