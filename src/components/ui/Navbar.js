import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <NavLink to="/">
            Logo
        </NavLink>
        <NavLink to={"/articles/"}>Articles</NavLink>
        <NavLink to="/write">Write</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </>
  )
}
