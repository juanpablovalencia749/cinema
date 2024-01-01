import { Navigate, Route, Routes } from "react-router-dom"
import { MoviesPage } from "../movies/pages/MoviesPage"
import { MoviesPageList } from "../movies/pages/MoviesPageList"
import {Footer, NavBar} from "../movies/components/"
import { TvPage } from "../movies/pages/TvPage"
import { TvPageList } from "../movies/pages/TvPageList"
import { GendersPageList } from "../movies/pages/GendersPageList"


export const MoviesRouter = () => {
  return (
   <>
    <NavBar/>

   <Routes>
      <Route path="/movie/:movie" element={<MoviesPageList/>}/>
      <Route path="/tv/:tv" element={<TvPageList/>}/>
      <Route path="/gender/:gender" element={<GendersPageList/>}/>
      <Route path="/movie-info/:id" element={<MoviesPage/>}/>
      <Route path="/tv-info/:id" element={<TvPage/>}/>

      <Route path="/*" element = { <Navigate to= "/movie/now_playing" /> }/>
   </Routes>
   <Footer/> 
   </> 
  )
}
