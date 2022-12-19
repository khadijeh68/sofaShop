import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar'

function SharedLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default SharedLayout
