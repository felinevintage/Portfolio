import { useState } from 'react'
import {Link, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import background from './assets/background.mp4'

function App() {
 

  return (
    <div>
   <NavBar />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Home" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
   </Routes>
   <video  id="video" autoPlay loop muted >
    <source type="video/mp4" src={background} />
   </video>
   </div>
  )
}

export default App
