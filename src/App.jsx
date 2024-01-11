import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path = '/' element= {<Login />}></Route>
            <Route path = '/home' element={<Home />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
