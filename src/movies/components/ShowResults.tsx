import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEnvVariables } from '../../helpers';
import { Search } from '../../interface/search';

interface Props {
  search: Search[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  containerRef: React.RefObject<HTMLDivElement>; // Ref para el elemento contenedor que debe hacer scroll
}

const { VITE_IMG_PATH } = getEnvVariables();

export const ShowResults: React.FC<Props> = ({ search, handleChange, containerRef }) => {
  const navigate = useNavigate();
  const [scrollToItem, setScrollToItem] = useState<number | null>(null);
  const itemRef = useRef<HTMLLIElement | null>(null);

  const handleItemClick = (itemId: number, title: string | undefined, name: string | undefined) => {
    const formattedTitle = name ? name.toLowerCase().replace(/\s+/g, '-') : title?.toLowerCase().replace(/\s+/g, '-');

    if (formattedTitle) {
      setScrollToItem(itemId);
      navigate(`#${formattedTitle}`);
    }

    if (name) {
      navigate(`/tv-info/${itemId}-${formattedTitle}`);
    } else {
      navigate(`/movie-info/${itemId}-${formattedTitle}`);
    }

    handleChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  useEffect(() => {
    // Scroll al elemento contenedor externo cuando cambia el ítem
    if (scrollToItem !== null && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setScrollToItem(null); // Restablecer el estado después de hacer scroll
    }
  }, [scrollToItem, containerRef]);

  return (
    <>
      <ul className="absolute z-50 space-y-4 list-none mt-3 bg-[#141a32] rounded-md overflow-y-auto max-h-96">
        {search.map((item) => (
          <li
            ref={(el) => (itemRef.current = el)}
            id={item.name ? item.name.toLowerCase().replace(/\s+/g, '-') : item.title?.toLowerCase().replace(/\s+/g, '-')}
            key={item.id}
            className="m-3 cursor-pointer grid grid-cols-2 gap-2 justify-items-start items-center"
            onClick={() => handleItemClick(item.id, item.title, item.name)}
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


