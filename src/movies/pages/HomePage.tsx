import { useEffect, useState } from "react";
import { moviesApi } from "../../api/moviesApi"
import { Movies, Result } from "../../interface/movies";
import NavBar from "../components/NavBar";
import { MovieCard } from "../components/MovieCard";
import { Pagination } from "../components/Pagination";


export const HomePage = () => {
  
  const [movies, setMovies] = useState<Result[]>([])
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0)

  const getMovies = async (page:number):Promise<void> => {
      try {
        const {data} = await moviesApi.get<Movies>(`/movie/now_playing?language=en-US&page=${page}`);
        setMovies(data.results)
        setTotalPage(data.total_pages)
        setCurrentPage(data.page)
        
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getMovies(1)
    }, [])
    
  return (
    <>
    <NavBar/>
    <div className="flex flex-wrap gap-3 justify-center flex-grow-0">      
      {movies.map(({ id, title, release_date, poster_path }) => (
       <MovieCard
          key={id} 
          id= {id}
          title= {title}
          release_date = {release_date}
          poster_path = {poster_path}
       />
      ))}
      <Pagination
         totalPage = {totalPage}
         getMovies = {getMovies}
         currentPage = {currentPage}
         />
         
    </div>  

    </>  
  )
}
