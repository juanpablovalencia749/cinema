import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesApi } from "../../api/moviesApi";
import { TvCard } from "../components/TvCard";
import { Pagination } from "../components";
import { ResultTvShows, TvShows } from "../../interface/tv-shows";
import { transformString } from "../../helpers";


export const TvPageList = () => {
  const [tvShows, setTvShows] = useState<ResultTvShows[]>([]);
  const [totalPageTv, setTotalPageTv] = useState(0);
  const [currentPageTv, setCurrentPageTv] = useState(0);
  const { tv } = useParams() 

  const titleTv = transformString(tv)

  const getDataTv = useCallback( async (page: number): Promise<void> => {
      if (!tv) return;
      const {data} = await  moviesApi.get<TvShows>(`/tv/${tv}?page=${page}`);

      setTvShows(data.results);
      setTotalPageTv(data.total_pages);
      setCurrentPageTv(data.page);
  },[tv])

  useEffect(() => {
    getDataTv(1);
  }, [getDataTv,tv]);

  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-6 gap-3 justify-start items-start">
      <h1 className="col-span-full text-2xl mx-2 font-bold my-5 md:my-12 md:text-4xl">{titleTv} Tv Shows</h1>
        {tvShows.map(({ id, original_name, first_air_date, poster_path, vote_average}) => (
          <TvCard key={id} id={id} original_name={original_name} first_air_date={first_air_date} poster_path={poster_path}  vote_average={vote_average}/>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <Pagination totalPage={totalPageTv} getData={getDataTv} currentPage={currentPageTv} />
      </div>
    </div>
  );
};