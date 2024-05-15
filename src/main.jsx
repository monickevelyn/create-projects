import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import Home from './pages/home/Home.jsx'
import NewProjects from './pages/new-project/NewProject.jsx'
import Project from "./pages/project/Project.jsx"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",  element: <Home />},
      { path: "newprojects",  element: <NewProjects />  },
      { path: "project",  element: <Project />  }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />  
  </React.StrictMode>
)
