import './styles/App.css'
import React, {useEffect} from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Top from './Components/Top'
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import Projects from "./Components/Projects"
import About from "./Components/About"
import {MainP1} from "./Project1/MainP1"
import MyAlbums from './Project1/MyAlbums'
import Contact from './Components/Contact'
import YourLinks from "./YourLinks"


function App() {

  const location = useLocation()

  useEffect(() => {
   
    if (location.pathname === '/projects/project1') {
      document.body.classList.add('raterBg')
    }

    if (location.pathname === '/projects/project1/myalbums') {
      document.body.classList.add('raterBg')
    }

    if (location.pathname === '/') {
      document.body.classList.remove('raterBg')}
  }, [location])

   
  return (
    <>
      <Top/>
       
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="projects/project1/" element={<MainP1/>}/>
        <Route path="projects/project1/myalbums" element={<MyAlbums/>}/>
        <Route path="projects/yourlinks/" element={<YourLinks/>}/>
      </Routes>

      <Footer/> 
    </> 
  )
}

export default App;

