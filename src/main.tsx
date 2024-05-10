import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing'
import Error from './pages/Error'
import Start from './pages/Start'
import CopyRight from './components/CopyRight';
import "./css/main.css"
import Home from './pages/Home'
import Client from './pages/Client'

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
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider fallbackElement={<h1 style={{ textAlign: "center", margin: "auto" }}>Loading!</h1>} router={router} />
    <CopyRight />
  </React.StrictMode>
)
