import React from "react";
import { Link } from "react-router-dom";
import { getEnvVariables } from "../../helpers";
import { ProgressBar } from ".";

const { VITE_IMG_PATH } = getEnvVariables();

interface Props {
  id: number
  original_name: string
  poster_path: string
  first_air_date: string
  vote_average: number
}

export const TvCard: React.FC<Props> = ({ id, original_name, first_air_date, poster_path , vote_average }) => {
  const urlImg = `${VITE_IMG_PATH}/${poster_path}`;
  const titleMain = original_name.length > 20 ? `${original_name.substring(0, 20)}...` : original_name;
  const param = `${id}-${original_name.toLowerCase().replace(/\s+/g, '-')}`
  const dateObject = new Date(first_air_date);
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);

  return (
    <Link to={`/tv-info/${param}`}>
        <div key={id} className="relative bg-[#0f1530] p-2 shadow-md w-44 md:w-56 rounded-md flex flex-col items-start justify-start overflow-hidden hover:shadow-lg transform transition-transform hover:scale-105">
          <img className="rounded-md" src={urlImg} alt={original_name} />
          <div className="absolute bottom-14">
            <ProgressBar vote_average={vote_average}/>
           </div>
          <h5 className="text-white 600 mt-5">{titleMain}</h5>
          <p>{formattedDate}</p>
    </div>
    </Link>
  );
};
