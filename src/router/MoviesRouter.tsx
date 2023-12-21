import { Navigate, Route, Routes } from "react-router-dom"
import { MoviesPage } from "../movies/pages/MoviesPage"
import { HomePage } from "../movies/pages/HomePage"
import {NavBar} from "../movies/components/"

export const MoviesRouter = () => {
  return (
   <>
    <NavBar/>
    {/* <div className="container"></div> */}
   <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/movie/:id" element={<MoviesPage/>}/>

      <Route path="/*" element = { <Navigate to= "/home" /> }/>
   </Routes> 
   </> 
  )
}
