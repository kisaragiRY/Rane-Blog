import React from 'react'
import { Outlet } from 'react-router';
import { Navbar, Footer } from '../Components';
import {
    ScrollRestoration
  } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div id='root-layout'>
        <ScrollRestoration />
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
