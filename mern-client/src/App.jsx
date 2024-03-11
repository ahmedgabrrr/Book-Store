import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
