import { useRef, useState } from "react"
import { moviesApi } from "../../api/moviesApi"
import { Movies, Result } from "../../interface/movies"
import { ShowResults } from "."

interface Props {
  openSearch:boolean
}

export const SearchBar: React.FC<Props> = ({openSearch}) => {

  const [search, setSearch] = useState<Result[]>([])
  const debounceRef = useRef<number>()


  const searchMoviesByQuery = async (query: string): Promise<void> => {
  
      const {data} = await moviesApi.get<Movies>(`https://api.themoviedb.org/3/search/multi?query=${query}`)
      setSearch(data.results)
      console.log(data.results);
      

  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    if (event.currentTarget) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      const { value } = event.target
      searchMoviesByQuery(value)
    }, 1000);
      
  }   

  return (
    <>
      <div className={`absolute right-16 top-5 transition-all duration-700 ease-out transform ${openSearch ? 'scale-100 bounce' : 'scale-0 pointer-events-none'} md:scale-100 md:pointer-events-auto`}>
        <input 
        className="w-36 md:w-52 border border-solid rounded-full p-1"
        type="text"
        placeholder="Search"
        onChange={handleChange}/>

      <ShowResults  search={search}/>
    </div>

    </>
  )
}
