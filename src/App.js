
import React from 'react'
import Navbar from './component/Navbar/Navbar'
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import Start from './component/Start/Start'
import About from './component/About/About'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import UserLayout from './Layouts/UserLayout/UserLayout'
export default function () {

 let routes= createBrowserRouter ([

    {path:'/' , element:<UserLayout/>, children:[
      {index: true , element:<Start/>},
      {path:'/Start' , element:<Start/>},
      {path:'/About' , element:<About/>},
      {path:'/Portfolio' , element:<Portfolio/>},
      {path:'/Contact' , element:<Contact/>}
    ]}
  
  ])
  return (
    <>

    
    
    <RouterProvider router={routes}/>
    
    
    </>
  )
}
