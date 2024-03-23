import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/App.css'


import './index.css'
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './Components/Header/Home/Home'
import Banner from './Components/Banner/Banner'
import Catagories from './Components/Catagories/Catagories'
import Features from './Components/Features/Features'
import Staticics from './Components/Staticics/Staticics'
import Root from './Components/Catagories/Root/Root'
import JobDetails from './Components/Features/JobDetails/JobDetails'



const router = createBrowserRouter([
 
  {
    path:'/',
    element:<Root></Root>,

   children:[
   {
    path:'/',
    element:<Home></Home>,
   },
   
    {
      path:'/staticics',
      element:<Staticics></Staticics>
    },
    {
      path:'/',
      element:<Features></Features>
    },
    {
      path:'/job/:id',
      element:<JobDetails></JobDetails>,
      loader:()=>fetch(`/data/jobs.json`)
      
    }
   ]
   
  },

 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider className="body" router={router}></RouterProvider>
  </React.StrictMode>,
)
