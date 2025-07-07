import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Service from './components/Service/Service'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
       <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>

     )
}

export default App
