import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarTwo from './Compenents/Navbar_two';

const Layout = () => {
  return (
    <>
    <NavbarTwo/>
    <Outlet/>
    </>
  )
}

export default Layout