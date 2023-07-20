import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './pages/Login.jsx'
import Home from './pages/home.jsx'
import PDF from './pages/PDF.jsx'
import { PDFViewer } from '@react-pdf/renderer';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <React.StrictMode>
  <App/>
  </React.StrictMode>,
)
