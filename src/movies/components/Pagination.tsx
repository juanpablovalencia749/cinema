import { useEffect, useState } from "react"

interface Props {
  totalPage: number,
  currentPage: number
  getMovies: (page:number) => void
}

export const Pagination :React.FC<Props> = ({totalPage, getMovies, currentPage}) => {

  const [items, setItems] = useState< JSX.Element[]>([])
  
  const nextPage = (page: number):void => {
    getMovies(page + 1)
  }

  const previousPage = (page: number):void => {
    getMovies(page - 1)
  }

  useEffect(() => {
    const renderItems: JSX.Element[] = [];
    for (let i = 1; i < totalPage; i++) {
      renderItems.push(
        <li key={i}>
          <a
            className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-secondary rounded-full m-0.5"
            onClick={(e) => {
              getMovies(parseInt((e.target as HTMLAnchorElement).textContent || "0"));
            }}
          >
            {i}
          </a>
        </li>
      );
      setItems(renderItems)
    }
  }, [totalPage, getMovies]);
  
  return (
    <>
    <nav>
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li >
          <button  onClick={() => previousPage(currentPage)} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-green-100 rounded-full">
            <span className="sr-only">Previous</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </button>
        </li>

        {items.slice(0, 5).map((item) => {
            return item;
          })}

        <li >
          <button  onClick={() => nextPage(currentPage)} className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-green-100 borde rounded-full">
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
