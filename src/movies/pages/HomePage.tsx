import { useEffect, useState } from "react";
import { moviesApi } from "../../api/moviesApi";
import { Movies, Result } from "../../interface/movies";
import { MovieCard } from "../components/MovieCard";
import { Pagination } from "../components/Pagination";

export const HomePage = () => {
  const [movies, setMovies] = useState<Result[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const getMovies = async (page: number): Promise<void> => {
   
      const { data } = await moviesApi.get<Movies>(`/movie/now_playing?page=${page}`);
      setMovies(data.results);
      setTotalPage(data.total_pages);
      setCurrentPage(data.page);
    
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-start items-start">
        {movies.map(({ id, title, release_date, poster_path, vote_average}) => (
          <MovieCard key={id} id={id} title={title} release_date={release_date} poster_path={poster_path}  vote_average={vote_average}/>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <Pagination totalPage={totalPage} getMovies={getMovies} currentPage={currentPage} />
      </div>
    </div>
  );
};
