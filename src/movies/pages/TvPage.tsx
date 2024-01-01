import { useEffect, useState } from "react";
import { getEnvVariables } from "../../helpers";
import { moviesApi } from "../../api/moviesApi";
import { DetailsTv, Genre, Network, ProductionCountry } from "../../interface/detailsTv";
import { useParams } from "react-router-dom";
import { ModalTrailer } from "../components";

const { VITE_IMG_PATH } = getEnvVariables();
type SelectId = string | undefined;


export const TvPage = () => {

  const [tvDetails, setTvDetails] = useState<DetailsTv | null  >(null);
  const [trailerKey, setTrailerKey] = useState('')

  const { id } = useParams<string>();
  const tvId: SelectId = id?.includes("-") ? id.split("-")[0] : undefined
  const urlImg:string =`${VITE_IMG_PATH}/${tvDetails?.poster_path}`


  const getTvDetails = async (id: SelectId): Promise<void> => {
      const { data } = await moviesApi.get<DetailsTv>(`/tv/${id}?append_to_response=videos`);
      setTvDetails(data)

      if (data.videos) {
        const trailer = data.videos?.results[0].key
        setTrailerKey(trailer)
      }
  };

  useEffect(() => {
    getTvDetails(tvId)
  }, [tvId])
  
  const {
    name,
    overview,
    genres,
    networks,
    production_countries,
    first_air_date,
    last_air_date
  } = tvDetails || {};


  return (
 
    <article className="m-2 mt-2">
    {tvDetails ? (        
        <div className="flex flex-col gap-5 border rounded-lg shadow-lg p-5 md:grid md:grid-cols-2 md:m-20 md:items-center md:p-8 ">
          <div className="flex items-center flex-col">
            <img
              className="rounded-md w-40 md:w-2/3"
              src={urlImg}
              alt={name}
            />
          </div>
          <div className="flex flex-col gap-3">
          <div>
            <h2  className="text-2xl block mb-5">{name}</h2>
            <div className="mb-5">
              <ModalTrailer trailerKey={trailerKey}/>
            </div>
            <span className="text-secondary block">Overview:</span>
            <p className="block">{overview}</p>
          </div>
          <div>
            <span className="text-secondary">Released: </span>
            <p className="inline">{first_air_date}</p>
          </div>
          <div>
            <span className="text-secondary">Last Air Date: </span>
            <p className="inline">{last_air_date}</p>
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
              {networks
                ?.map(({ name }: Network) => name)
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
 
  )
}
