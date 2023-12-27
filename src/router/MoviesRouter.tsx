import { Navigate, Route, Routes } from "react-router-dom"
import { MoviesPage } from "../movies/pages/MoviesPage"
import { HomePage } from "../movies/pages/HomePage"
import {Footer, NavBar} from "../movies/components/"
import { TvPage } from "../movies/pages/TvPage"

export const MoviesRouter = () => {
  return (
   <>
    <NavBar/>

   <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/movie/:id" element={<MoviesPage/>}/>
      <Route path="/tv/:id" element={<TvPage/>}/>

      <Route path="/*" element = { <Navigate to= "/home" /> }/>
   </Routes>
   <Footer/> 
   </> 
  )
}
