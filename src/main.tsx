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
import { UserContextProvider } from './components/UserContext'
import Auth from './pages/Auth'
import Employee from './pages/Employee'

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
    path: "client",
    element: <Client />
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "technician",
        element: <Technician />
      },
      {
        path: "employee",
        element: <Employee />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider fallbackElement={<h1 style={{ textAlign: "center", margin: "auto" }}>Loading!</h1>} router={router} />
    </UserContextProvider>
  </React.StrictMode>
)