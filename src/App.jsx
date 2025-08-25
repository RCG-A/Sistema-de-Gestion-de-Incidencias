import React, { useEffect, useState } from 'react'
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
import EditIncidencia from './components/template/EditIncidencia'
import IncidenciaE from './components/container/Editar-Incidencia'
import { GetDetailsUser } from './services/AxiosUser'
import ErrorPage from './pages/ErrorPage'
import { PDFViewer } from '@react-pdf/renderer';

const App = () => {


  const [Name, setName] = useState(null)
  const [lastname, setlastname] = useState("");
  const id = localStorage.getItem("RoleId")
  const idINT = parseInt(id)

  function Rutas() {
    switch (idINT) {
      case 1:
        return (<Routes>
          <Route element={<RouteProteccion isAllow={localStorage.getItem("TOKEN")} redirectTo='/' />} >
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/crear-incidencia' element={<IncidenciaC></IncidenciaC>}></Route>
            <Route path='/incidencia-asignada-a-mi' element={<IncidenciasLista></IncidenciasLista>}></Route>
            <Route path='/incidencia-asignada-a-mi-grupo' element={<IncidenciaGrupo></IncidenciaGrupo>}></Route>
            <Route path='/crear-usuario' element={<CrearUsuario></CrearUsuario>}></Route>
            <Route path='/crear-rol' element={<CrearRol></CrearRol>}></Route>
            <Route path='/crear-area' element={<CrearArea></CrearArea>}></Route>
            <Route path='/crear-categoria' element={<CrearCategoria></CrearCategoria>}></Route>
            <Route path='/incidents/:id' element={<IncidenciaE></IncidenciaE>}></Route>

            <Route element={<ErrorPage></ErrorPage>} path='/pdfs-1'></Route>
          </Route>
          <Route
            element={<RouteProteccion isAllow={!localStorage.getItem("TOKEN")} redirectTo='/crear-incidencia' />} >
            <Route path='/' element={<LoginPage></LoginPage>}></Route>
          </Route>

        </Routes>)
        break;
      case 2:
        return (
        <Routes>
          <Route element={<RouteProteccion isAllow={localStorage.getItem("TOKEN")} redirectTo='/' />} >
            <Route path='/crear-incidencia' element={<IncidenciaC></IncidenciaC>}></Route>
            <Route path='/incidents/:id' element={<IncidenciaE></IncidenciaE>}></Route>
            <Route element={<ErrorPage></ErrorPage>} path='/pdfs-1'></Route>
          </Route>
          <Route
            element={<RouteProteccion isAllow={!localStorage.getItem("TOKEN")} redirectTo='/crear-incidencia' />} >
            <Route path='/' element={<LoginPage></LoginPage>}></Route>
          </Route>

        </Routes>)
        break;
      case 3:
        return (<Routes>


          <Route
            element={<RouteProteccion isAllow={localStorage.getItem("TOKEN")} redirectTo='/' />} >

            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/crear-incidencia' element={<IncidenciaC></IncidenciaC>}></Route>
            <Route path='/incidencia-asignada-a-mi-grupo' element={<IncidenciaGrupo></IncidenciaGrupo>}></Route>
            <Route path='/incidents/:id' element={<IncidenciaE></IncidenciaE>}></Route>

            <Route element={<ErrorPage></ErrorPage>} path='/pdfs-1'></Route>
          </Route>


          <Route
            element={<RouteProteccion isAllow={!localStorage.getItem("TOKEN")} redirectTo='/crear-incidencia' />} >
            <Route path='/' element={<LoginPage></LoginPage>}></Route>
          </Route>

        </Routes>)
        break;
      case 4:
        return (<Routes>


          <Route element={<RouteProteccion isAllow={localStorage.getItem("TOKEN")} redirectTo='/' />} >

            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/crear-incidencia' element={<IncidenciaC></IncidenciaC>}></Route>
            <Route path='/incidencia-asignada-a-mi' element={<IncidenciasLista></IncidenciasLista>}></Route>
            <Route path='/incidencia-asignada-a-mi-grupo' element={<IncidenciaGrupo></IncidenciaGrupo>}></Route>
            <Route path='/incidents/:id' element={<IncidenciaE></IncidenciaE>}></Route>

            <Route element={<ErrorPage></ErrorPage>} path='/pdfs-1'></Route>
          </Route>


          <Route
            element={<RouteProteccion isAllow={!localStorage.getItem("TOKEN")} redirectTo='/crear-incidencia' />} >
            <Route path='/' element={<LoginPage></LoginPage>}></Route>
          </Route>

        </Routes>)
        break;
      default:
        return (<Routes>


          <Route
            element={<RouteProteccion isAllow={localStorage.getItem("TOKEN")} redirectTo='/' />} >

            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/crear-incidencia' element={<IncidenciaC></IncidenciaC>}></Route>
            <Route path='/incidencia-asignada-a-mi' element={<IncidenciasLista></IncidenciasLista>}></Route>
            <Route path='/incidencia-asignada-a-mi-grupo' element={<IncidenciaGrupo></IncidenciaGrupo>}></Route>
            <Route path='/crear-usuario' element={<CrearUsuario></CrearUsuario>}></Route>
            <Route path='/crear-rol' element={<CrearRol></CrearRol>}></Route>
            <Route path='/crear-area' element={<CrearArea></CrearArea>}></Route>
            <Route path='/crear-categoria' element={<CrearCategoria></CrearCategoria>}></Route>
            <Route path='/incidents/:id' element={<IncidenciaE></IncidenciaE>}></Route>

            <Route element={<ErrorPage></ErrorPage>} path='/pdfs'></Route>
          </Route>


          <Route
            element={<RouteProteccion isAllow={!localStorage.getItem("TOKEN")} redirectTo='/crear-incidencia' />} >
            <Route path='/' element={<LoginPage></LoginPage>}></Route>
          </Route>

        </Routes>)
        break;
    }
  }





  return (
    <>
      <Router >
        {localStorage.getItem("TOKEN") ? (<Navbar></Navbar>) : (<></>)}

        <div className='flex'>

          {localStorage.getItem("TOKEN") ? (<Sidebar></Sidebar>) : (<></>)}

          {Rutas()}
        </div>
      </Router>
    </>
  )
}

export default App
