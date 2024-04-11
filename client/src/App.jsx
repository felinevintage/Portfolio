import { useState } from 'react'
import {Link, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
 

  return (
    <div>
   <NavBar />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Home" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
   </Routes>
   </div>
  )
}

export default App
