import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    let articleid = "my_article"
  return (
    <>
        <NavLink to="/">
            Logo
        </NavLink>
        <NavLink to={"/article/" + articleid}>Articles</NavLink>
        <NavLink to="/write">Write</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </>
  )
}
