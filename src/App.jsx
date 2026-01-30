import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Naavbar.jsx'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx'
import Project from './components/Project.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import ChatBot from './components/ChatBot.jsx'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    
      <Navbar />
      <ChatBot/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
  
    </BrowserRouter>
     
    </>
  )
}

export default App
