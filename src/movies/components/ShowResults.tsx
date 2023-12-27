import {  useNavigate } from "react-router-dom";
import { getEnvVariables } from "../../helpers";
import {  Result } from "../../interface/movies"

interface Props  {
  search: Result[]
}

const { VITE_IMG_PATH } = getEnvVariables()

export const ShowResults: React.FC<Props> = ({ search }) => {
  
  const navigate = useNavigate();

  const handleItemClick = (itemId:number, title:string) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');  
    navigate(`/movie/${itemId}-${formattedTitle}`);
  };


  return (
    <>
    <ul className="absolute z-50  space-y-4 list-none mt-3 bg-slate-300 rounded-md overflow-y-auto max-h-96">
      {search.map((item) => (
        <li
          key={item.id}
          className="m-3 cursor-pointer grid grid-cols-2 gap-2 justify-items-start items-center"
          onClick={() => handleItemClick(item.id, item.title)}
        >     
          <img src={`${VITE_IMG_PATH}/${item.poster_path}`} alt={item.title} className="w-24 rounded-md"/>
  
          <div className="col-span-1 space-y-0">
            <h6>{item.title}</h6>
            <p className="text-sm">{item.release_date?.slice(0,4)}</p>
            <p className="text-sm">{item.media_type}</p>
          </div>
          <hr className="border-b my-4" />
        </li>
      ))}
    </ul>
  </>
  
  );
};
