import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar'
// import Home from '../../pages/home'

function SharedLayout() {
  return (
    <div>
      
      <Outlet/>
    </div>
  )
}

export default SharedLayout
