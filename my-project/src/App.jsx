import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Services from "./components/Services"
import About from "./components/About"
import Home from "./components/home/Home"
import StyledNav from "./components/StyledNav"
import Contact from "./components/Contact"
function App() {

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StyledNav/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/> 
          <Route path="/services/:id" element={<Services/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
