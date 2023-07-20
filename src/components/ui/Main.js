import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Article from '../pages/Article'
import Landing from '../pages/Landing'
import Profile from '../pages/Profile'
import Write from '../pages/Write'
export default function Main() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/write' element={<Write/>} />
      <Route path='/article/:articleid' element={<Article/>} />
      <Route path='/profile' element={<Profile/>} />
     </Routes>
  )
}
