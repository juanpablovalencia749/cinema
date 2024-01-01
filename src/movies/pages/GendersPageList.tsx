import { useCallback, useEffect, useState } from "react";
import { moviesApi } from "../../api/moviesApi";
import { Movies, Result } from "../../interface/movies";
import { MovieCard, Pagination  } from "../components";
import { useParams } from "react-router-dom";
import { getGenders } from "../../helpers/getGenders";


export const GendersPageList = () => {
  const [movies, setMovies] = useState<Result[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [genderTitle, setGenderTitle] = useState<string | undefined>()
  const { gender } = useParams()
 

  const getDataMovies = useCallback(  async (page: number): Promise<void> => {
    if (!gender) return
    const {data} = await moviesApi.get<Movies>(`/discover/movie?with_genres=${gender}&page=${page}`)

    setMovies(data.results)
    setTotalPage(data.total_pages)
    setCurrentPage(data.page)
  },[gender])

  useEffect(() => {
    const fetchData = async () => {
        await getDataMovies(1)
        const title = await getGenders(gender)
        setGenderTitle(title)
    }

    fetchData()
  }, [getDataMovies, gender])

  return (
    <div className="flex flex-col items-center justify-center mt-1 gap-8">
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-6 gap-3 justify-start items-start">
        <h1 className="col-span-full text-2xl mx-2 font-bold my-5 md:my-12 md:text-4xl">{genderTitle} Movies</h1>
        {movies.map(({ id, title, release_date, poster_path, vote_average}) => (
          <MovieCard key={id} id={id} title={title} release_date={release_date} poster_path={poster_path} vote_average={vote_average}/>
        ))}
      </div>
    </div>
  
    <div className="flex justify-center mt-2">
      <Pagination totalPage={totalPage} getData={getDataMovies} currentPage={currentPage} />
    </div>
  </div>
  
  
  );
};
