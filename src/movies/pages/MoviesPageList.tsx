import { useCallback, useEffect, useState } from "react";
import { moviesApi } from "../../api/moviesApi";
import { Movies, Result } from "../../interface/movies";
import { MovieCard, Pagination  } from "../components";
import { useParams } from "react-router-dom";
import { transformString } from "../../helpers";

export const MoviesPageList = () => {
  const [movies, setMovies] = useState<Result[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { movie } = useParams()
  const titleMovie = transformString(movie)

  const getDataMovies = useCallback(async (page: number): Promise<void> => {
    if (!movie) return;
    const { data } = await moviesApi.get<Movies>(`/movie/${movie}?page=${page}`);
    setMovies(data.results);
    setTotalPage(data.total_pages);
    setCurrentPage(data.page);
  }, [movie]);
  
  useEffect(() => {
     getDataMovies(1);
  }, [getDataMovies, movie]);

  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-6 gap-3 justify-start items-start">
      <h1 className="col-span-full text-2xl mx-2 font-bold my-5 md:my-12 md:text-4xl">{titleMovie} Movies</h1>
        {movies.map(({ id, title, release_date, poster_path, vote_average}) => (
          <MovieCard key={id} id={id} title={title} release_date={release_date} poster_path={poster_path}  vote_average={vote_average}/>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <Pagination totalPage={totalPage} getData={getDataMovies} currentPage={currentPage} />
      </div>
    </div>
  );
};
