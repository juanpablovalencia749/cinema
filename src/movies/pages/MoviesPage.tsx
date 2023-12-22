import { useParams } from "react-router-dom";
import { moviesApi } from "../../api/moviesApi";
import {
  Details,
  Genre,
  ProductionCompany,
  ProductionCountry
} from "../../interface/details";
import { useEffect, useState } from "react";
import { getEnvVariables } from "../../helpers";

const { VITE_IMG_PATH } = getEnvVariables();

type SelectId = string | undefined;

export const MoviesPage = () => {
  const [movieDetails, setMovieDetails] = useState<Details | null>(null);

  const { id } = useParams<string>();
  const movieId: SelectId = id?.includes("-") ? id.split("-")[0] : undefined;

  const getMovieDetails = async (id: SelectId): Promise<void> => {
    try {
      const { data } = await moviesApi.get<Details>(`/movie/${id}?append_to_response=videos`);
      setMovieDetails(data);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  const {
    title,
    overview,
    genres,
    production_companies,
    production_countries,
    release_date,
    vote_average
  } = movieDetails || {};

  const urlImg:string =`${VITE_IMG_PATH}/${movieDetails?.poster_path}`

  return (
    <>
   {/* <div className="bg-cover w-full  bg-center h-64" style={{ backgroundImage: `url('${urlImg}')`, opacity: 0.8 }}>
    
  </div> */}
    <div>
    <article className="m-2 mt-20">
    {movieDetails ? (        
        <div className="flex flex-col gap-5 border  rounded-lg shadow-lg p-5 md:grid md:grid-cols-2 md:m-20 md:items-center md:p-8">
          <div className="flex items-center flex-col">
            <img
              className="rounded-md w-40 md:w-2/3"
              src={urlImg}
              alt={title}
            />
          </div>
          <div className="flex  flex-col gap-3">
          <div>
            <h2  className="text-2xl block mb-5">{title}</h2>
            <div className="mb-5">
            <button className="px-6 py-3 bg-secondary rounded-full text-white hover:bg-blue-800 mr-2">Watch now</button>
            <button className="px-6 py-3 bg-secondary rounded-full text-white hover:bg-blue-800">Add to list</button>
            </div>
            <span className="text-secondary block">Overview: </span>
            <p className="block">{overview}</p>
          </div>
          <div>
            <span className="text-secondary">Released: </span>
            <p className="inline">{release_date}</p>
          </div>
          <div>
            <span className="text-secondary">vote_average: </span>
            <p className="inline">{vote_average}</p>
          </div>
          <div className="flex items-center">
            <span className="text-secondary">Genres:</span>
            <p className="ml-2 inline">
              {genres?.map(({ name }: Genre) => name).join(", ")}
            </p>
          </div>
          <div>
            <span className="text-secondary">Production:</span>
            <p className="ml-2 inline">
              {" "}
              {production_companies
                ?.map(({ name }: ProductionCompany) => name)
                .join(", ")}
            </p>
          </div>
          <div>
            <span className="text-secondary">Countries: </span>
            <p className="inline">
              {production_countries
                ?.map(({ name }: ProductionCountry) => name)
                .join(", ")}
            </p>
          </div>
          </div>
         
        </div>
      ) : (
        <p>Cargando Movie...</p>
      )}
    </article>
    </div>
    </>
  );
};
