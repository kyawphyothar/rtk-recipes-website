import React from 'react'
import Path from './routes/Path'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className="dark:bg-[#212227] ">
      <Navbar/>
      <Path/>
      <Footer/>
    </div>
  )
}

export default App