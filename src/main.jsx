import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header> ,
    children:[
      {
        path: '/statistics',
        element: <div>this is statistics</div>
      },
      {
        path: '/jobs',
        element: <div>jobs are coming</div>
      },
      {
        path: '/blog',
        element: <div>blogs are coming</div>
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>,
)
