import { useNavigate, useParams } from "react-router-dom";
import { moviesApi } from "../../api/moviesApi";
import { DetailsMovie, Genre, ProductionCompany, ProductionCountry} from "../../interface/detailsMovies.ts";
import { useEffect, useState } from "react";
import { getEnvVariables } from "../../helpers";
import { ModalTrailer } from "../components/ModalTrailer";


const { VITE_IMG_PATH } = getEnvVariables();

type SelectId = string | undefined;


export const MoviesPage = () => {

 const navigate = useNavigate()
  const [movieDetails, setMovieDetails] = useState<DetailsMovie | null  >(null);
  const [trailerKey, setTrailerKey] = useState('')

  const { id } = useParams<string>();
  const movieId: SelectId = id?.includes("-") ? id.split("-")[0] : undefined;
  const urlImg:string =`${VITE_IMG_PATH}/${movieDetails?.poster_path}`


  const getMovieDetails = async (id: SelectId): Promise<void> => {

      if (!id) return navigate('/home')

      const { data } = await moviesApi.get<DetailsMovie>(`/movie/${id}?append_to_response=videos`);
      setMovieDetails(data);

      if (data.videos) {
        const trailer = data.videos?.results.find((vid) => vid.name === 'Official Trailer')
        trailer && setTrailerKey(trailer.key);
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
    release_date
  } = movieDetails || {};

  return (
    <>
    <article className="m-2 mt-2">
    {movieDetails ? (        
        <div className="flex flex-col gap-5 border rounded-lg shadow-lg p-5 md:grid md:grid-cols-2 md:m-20 md:items-center md:p-8 ">
          <div className="flex items-center flex-col">
            <img
              className="rounded-md w-40 md:w-2/3"
              src={urlImg}
              alt={title}
            />
          </div>
          <div className="flex flex-col gap-3">
          <div>
            <h2  className="text-2xl block mb-5">{title}</h2>
            <div className="mb-5">
            <ModalTrailer trailerKey={trailerKey}/>
            </div>
            <span className="text-secondary block">Overview: </span>
            <p className="block">{overview}</p>
          </div>
          <div>
            <span className="text-secondary">Released: </span>
            <p className="inline">{release_date}</p>
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
    </>
  );
};
