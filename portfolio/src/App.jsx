import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Service from './components/Service/Service'
import MyWork from './components/MyWork/MyWork'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
       <About/>
       <Service/>
      <MyWork/>


    </div>

     )
}

export default App
