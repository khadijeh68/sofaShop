import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from '../shared'

function AppRouter() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<SharedLayout/>}>

    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRouter