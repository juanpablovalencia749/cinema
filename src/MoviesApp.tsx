import { BrowserRouter } from "react-router-dom";
import { moviesApi } from "./api/moviesApi"
import { Result } from "./interface/movies";
import { MoviesRouter } from "./router";

const moviesList = async ():Promise<Result[] | void> => {
  try {
    const {data} = await moviesApi.get('/movie/now_playing?language=en-US');
    
    return data.results
    
  } catch (error) {
    console.log(error);  
  }
}

console.log(moviesList());

const MoviesApp = ():JSX.Element => {
  return (
    <BrowserRouter>
      <MoviesRouter/>
    </BrowserRouter>
  )
}
export default MoviesApp
