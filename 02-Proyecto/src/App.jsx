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
import IncidenciasLista from './components/container/Incidencias-lista'
import IncidenciaGrupo from './components/container/Incidencia-grupo'
import CrearUsuario from './components/container/Crear-Usuario'
import CrearRol from './components/container/Crear-Rol'
import CrearArea from './components/container/Crear-Area'
import CrearCategoria from './components/container/Crear-Categoria'
const  App = () => {
  const loged = true
  return (
    <>
    <Router>
{loged? (<Navbar></Navbar>):(<></>) }
    
  <div className='flex'>
  
{loged? (<Sidebar></Sidebar>):(<></>) }
    
      <Routes>

  
      
      
        <Route
          element={<RouteProteccion isLogin={!loged} redirectTo='/' />} >
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/crear-incidencia' element={<IncidenciaC></IncidenciaC>}></Route>
          <Route path='/incidencia-asignada-a-mi' element={<IncidenciasLista></IncidenciasLista>}></Route>
          <Route path='/incidencia-asignada-a-mi-grupo' element={<IncidenciaGrupo></IncidenciaGrupo>}></Route>
          <Route path='/crear-usuario' element={<CrearUsuario></CrearUsuario>}></Route>
          <Route path='/crear-rol' element={<CrearRol></CrearRol>}></Route>
          <Route path='/crear-area' element={<CrearArea></CrearArea>}></Route>
          <Route path='/crear-categoria' element={<CrearCategoria></CrearCategoria>}></Route>
          
          
        </Route>
        <Route
          element={<RouteProteccion isLogin={loged} redirectTo='/home' />} >
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
        </Route>

      </Routes>
    
    </div>
</Router>
</>
  )
}

export default App
