import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import GettingStarted from "./GettingStarted"
import Footer from "./Footer"



const Layout = () => {
  return (
    <div className="w-full flex flex-col items-center ">
  
     <Nav/>
     <Outlet/>
     
   <GettingStarted/>
   <Footer/>
    </div>

  )
}

export default Layout
