import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./assets/styles/App.css"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"


function App() {
 

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}>

            </Route>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
