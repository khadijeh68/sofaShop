import React from 'react'
import { Outlet } from 'react-router'

function SharedLayout() {
  return (
    <div> 
      <Outlet/>
    </div>
  )
}

export default SharedLayout
