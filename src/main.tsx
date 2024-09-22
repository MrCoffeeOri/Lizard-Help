import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./css/main.css"
import Landing from './pages/Landing'
import Start from './pages/Start'
import Home from './pages/Home'
import Error from './pages/Error'
import Client from './pages/Client'
import Technician from './pages/Technician'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />
  },
  {
    path: "start",
    element: <Start />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "client",
    element: <Client />
  },
  {
    path: "technician",
    element: <Technician />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider fallbackElement={<h1 style={{ textAlign: "center", margin: "auto" }}>Loading!</h1>} router={router} />
  </React.StrictMode>
)