
export const TvPage = () => {
  return (
 
    <article className="m-2 mt-2">
    {tvDetails ? (        
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
 
  )
}
