import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' //time to make router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home,About, Contact, Projects, User,Github,githubInfoLoader} from './Components/index.js'


const router = createBrowserRouter(
  //a method
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Projects" element={<Projects/>}/>
      <Route path='User/' element={<User/>}>
      <Route path=':userid' element={<User/>}/>
      </Route>
      <Route 
      loader = {githubInfoLoader}
      path='Github' element={<Github/>}/>
      <Route path='*' element={<div className='bg-red-500'>Page not found</div>}/>
    </Route>
    ///: colomn captures anything after user/ its a oarameter a plaaceholder
    //it could be just id userid or productid whatever. but now normal user
    // doesnt work right now so lets fix it
    //sandwich concepting is important here because rn its http://localhost:5173/about to load about
    //we don't add slash because everything after slash is what's happening the first normal page
    //is Layout
    
    
    //every time u have to give it a parameter of path and tell it what path(element)(component)
    //should it load.
    
    //it takes a few parameters
    //we need a special element known as route it works like component.

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
)
