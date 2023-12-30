import { useNavigate } from "react-router-dom";

interface Props {
  totalPage: number,
  currentPage: number
  getMovies: (page:number) => void
}

export const Pagination :React.FC<Props> = ({totalPage, getMovies, currentPage}) => {

  
  const navigate = useNavigate();

  const nextPage = (page: number): void => {
    getMovies(page + 1);
    navigate(`/home?page=${page + 1}`);
  };

  const previousPage = (page: number): void => {
    getMovies(page - 1);
    navigate(`/home?page=${page - 1}`);
  };
  
  return (
    <>
    <nav>
      <ul className="flex items-center -space-x-px h-10 text-base gap-1">
        <li >
          <button  onClick={() => previousPage(currentPage)} className="flex items-center justify-center px-5 h-12 ms-0 leading-tight bg-[#1d2747] rounded-full">
            <span className="sr-only">Previous</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </li>

        <li>
          <div className="flex items-center justify-center py-4 px-4 h-14 leading-tight text-white bg-[#1d2747] rounded-full m-0.5 gap-1">
          <span className="rounded-full bg-secondary w-10 h-10 inline-block leading-10 text-center align-middle">{currentPage}</span>
              <span>of</span> 
              <span>{totalPage}</span> 
          </div>
        </li>

        <li >
          <button  onClick={() => nextPage(currentPage)} className="flex items-center justify-center px-5 h-12 leading-tight text-white bg-[#1d2747] borde rounded-full">
            <span className="sr-only">Next</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
    </>

  )
}
