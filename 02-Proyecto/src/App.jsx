import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import LoginPage from './pages/Login'
import Login from './components/template/Login'
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom"
import RouteProteccion from './routes/RouteProteccion.jsx'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import Incidencia from './components/template/Incidencia'
import IncidenciaC from './components/container/Incidencia'
const  App = () => {
  const loged = true
  return (
    <>
{loged? (<Navbar></Navbar>):(<></>) }


  <div className='flex'>
  
{loged? (<Sidebar></Sidebar>):(<></>) }
    <Router>
      <Routes>

  
      
      
        <Route
          element={<RouteProteccion isLogin={!loged} redirectTo='/' />} >
          <Route path='/home' element={<IncidenciaC></IncidenciaC>}></Route>
        </Route>
        <Route
          element={<RouteProteccion isLogin={loged} redirectTo='/home' />} >
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
        </Route>

      </Routes>
    </Router>
    </div>
</>
  )
}

export default App
