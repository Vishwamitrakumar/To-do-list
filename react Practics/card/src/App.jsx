import React,{Suspense , lazy } from "react"
import "./App.css"
import Login from "./Athentication/Login.jsx"
import Signup from "./Athentication/Signup.jsx"
import Create from "./Cards/Create.jsx"
const Home = lazy(() => import('./Home'))
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <>
    
    <Suspense fallback={<div> please wait ...</div>} >
  <BrowserRouter>
  
    <Routes>
   
      <Route path='/' element={< Home />} /> 
      <Route path='/login' element={<Login />} /> 
      <Route path='/login/:name' element={<Login />} /> 
      <Route path='/signup' element={<Signup />} /> 
      <Route path='/Create' element={<Create />} />
  
    </Routes>
  
  </BrowserRouter>
  </Suspense>

    </>
  )
}

export default App;
