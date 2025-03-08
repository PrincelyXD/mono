import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import GettingStarted from "./GettingStarted"
import Footer from "./Footer"



const Layout = () => {
  return (
    <div className="w-full flex flex-col items-center max-w-[1600px] min-w-[344px] mx-auto ">
  
     <Nav/>
     <Outlet/>
     
   <GettingStarted/>
   <Footer/>
    </div>

  )
}

export default Layout
