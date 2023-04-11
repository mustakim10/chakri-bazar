import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Default from './components/Default/Default';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import featureJobsLoader from './components/loaders/featureJobsLoader';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default></Default>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details',
        element: <JobDetails></JobDetails>,
        loader: featureJobsLoader
      },
      // {
      //   path: 'details/:detailsId',
      //   element: <Details></Details>,
      //   loader: ({params}) => fetch(`featurejobs.json/details/${params.detailsId}`)
      // },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'jobs',
        element: <AppliedJobs></AppliedJobs>
         
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
   </React.StrictMode>,
)
