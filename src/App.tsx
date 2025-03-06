import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./assets/styles/App.css"
import Layout from "./layout/Layout"


function App() {
 

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
