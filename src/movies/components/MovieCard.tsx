import React from "react";
import { Link } from "react-router-dom";
import { getEnvVariables } from "../../helpers";

const { VITE_IMG_PATH } = getEnvVariables();

interface Props {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export const MovieCard: React.FC<Props> = ({ id, title, poster_path, release_date }) => {
  const urlImg = `${VITE_IMG_PATH}/${poster_path}`;
  const titleMain = title.length > 20 ? `${title.substring(0, 20)}...` : title;
  const param = `${id}-${title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <Link to={`/movie/${param}`}>
      <div key={id} className="shadow-md w-44 md:w-56 rounded-md flex flex-col items-start justify-start">
        <img className="rounded-md" src={urlImg} alt={title} />
        <h5 className="text-secondary">{titleMain}</h5>
        <p>{release_date}</p>
      </div>
    </Link>
  );
};
