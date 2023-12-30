import React from "react";
import { Link } from "react-router-dom";
import { getEnvVariables } from "../../helpers";
import { ProgressBar } from ".";

const { VITE_IMG_PATH } = getEnvVariables();

interface Props {
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
}

export const MovieCard: React.FC<Props> = ({ id, title, poster_path, release_date, vote_average }) => {
  const urlImg = `${VITE_IMG_PATH}/${poster_path}`;
  const titleMain = title.length > 20 ? `${title.substring(0, 20)}...` : title;
  const param = `${id}-${title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <Link to={`/movie/${param}`}>
        <div key={id} className="relative bg-[#0f1530] p-2 shadow-md w-44 md:w-56 rounded-md flex flex-col items-start justify-start overflow-hidden hover:shadow-lg transform transition-transform hover:scale-105">
          <img className="rounded-md" src={urlImg} alt={title} />
          <div className="absolute bottom-14">
            <ProgressBar vote_average={vote_average}/>
           </div>
          <h5 className="text-white 600 mt-5">{titleMain}</h5>
          <p>{release_date}</p>
    </div>
    </Link>
  );
};
