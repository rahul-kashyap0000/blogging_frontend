import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Articles from '../pages/Articles'
import Landing from '../pages/Landing'
import Profile from '../pages/Profile'
import Write from '../pages/Write'
import ArticlePage from '../pages/ArticlePage'
export default function Main() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/write' element={<Write/>} />
      <Route path='/articles' element={<Articles/>} />
      <Route path='/article/:articleid' element={<ArticlePage/>} />
      <Route path='/profile' element={<Profile/>} />
     </Routes>
  )
}
