import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'

export const privateComponent = () => {
  const local = localStorage.getItem('User')
  return (
    <>
   {
      local ? <Outlet/>: <Navigate to='/signup'/>
    }
    </>
    )
}
export default privateComponent