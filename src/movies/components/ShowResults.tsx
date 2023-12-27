import {   useNavigate } from "react-router-dom";
import { getEnvVariables } from "../../helpers";
import {  Search } from "../../interface/search"

interface Props  {
  search: Search[]
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>void
}

const { VITE_IMG_PATH } = getEnvVariables()

export const ShowResults: React.FC<Props> = ({ search, handleChange }) => {
  
  const navigate = useNavigate();

  const handleItemClick = (itemId:number, title: string | undefined, name: string | undefined) => {

    if (name) {
    const formattedTitle = name.toLowerCase().replace(/\s+/g, '-');  
    navigate(`/tv/${itemId}-${formattedTitle}`);
    handleChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
  }  

    const formattedTitle = title?.toLowerCase().replace(/\s+/g, '-');  
    navigate(`/movie/${itemId}-${formattedTitle}`);
    handleChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)

  }

  return (
    <>
    <ul className="absolute z-50  space-y-4 list-none mt-3 bg-[#141a32] rounded-md overflow-y-auto max-h-96">
      {search.map((item) => (
        <li
          key={item.id}
          className="m-3 cursor-pointer grid grid-cols-2 gap-2 justify-items-start items-center"
          onClick={() => handleItemClick(item.id, item.name,item.title)}
        >
          <img src={`${VITE_IMG_PATH}/${item.poster_path}`} alt={item.title} className="w-24 rounded-md"/>

          <div className="col-span-1 space-y-0">
          {item.name ? (
                <>
                  <h6>{item.name}</h6>
                  <p className="text-sm">{item.first_air_date?.slice(0, 4)}</p>
                </>
              ) : (
                <>
                  <h6>{item.title}</h6>
                  <p className="text-sm">{item.release_date?.slice(0, 4)}</p>
                </>
              )}
            <p className="text-sm">{item.media_type}</p>
          </div>
          <hr className="border-b my-4" />
        </li>
      ))}
    </ul>
</>
  
  );
};


