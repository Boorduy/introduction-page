import React from 'react'

import { Outlet } from 'react-router-dom'
import {Header,Footer} from './Components/index'
//lets learn these now {outlet} from react-router-dom
// the feature it has is that it lets us have things always on our page it creates that inteligence
//lets learn more
//how will it know we are doing this
import backImg from './assets/sample.gif'



function Layout() {
  var styleBg = {
  backgroundImage: `url(${backImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  //bottom ones are somewhat extra
  minHeight: "100dvh",
  minWidth: "100dvw",
  width: "100%",
  overflow: "hidden"
}
return (
    <>
    <div style={styleBg}>
    
    <Header/>
    <Outlet/>
    
    <Footer/>
    
    </div>
    </>
  )
}

  


export default Layout