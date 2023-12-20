import { getEnvVariables } from "../../helpers"

const { VITE_IMG_PATH } = getEnvVariables()

interface Props {
  id: number
  title: string
  poster_path: string
  release_date: string
}

export const MovieCard :React.FC<Props>= ({id, title, poster_path, release_date}) => {
  return (
    <>
     <div key={id} className="shadow-md w-44 rounded-md flex flex-col items-start justify-start">
          <img className="rounded-md" src={`${VITE_IMG_PATH}/${poster_path}`} alt={title} />
          <h5 className="text-secondary">{title.length > 20 ? `${title.substring(0, 20)}...`: title}</h5>
          <p>{release_date}</p>  
      </div>
    </>
  )
}
