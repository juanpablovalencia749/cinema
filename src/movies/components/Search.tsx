import { useRef, useState } from "react"
import { moviesApi } from "../../api/moviesApi"
import { Movies, Result } from "../../interface/movies"
import { ShowResults } from "."
import { SearchBar } from "keep-react";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";



export const Search = () :JSX.Element => {
    
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
      <SearchBar
      size={'sm'}
      placeholder="Search"
      bordered={false}
      addon={<MagnifyingGlass size={20} color="#5E718D" />}
      addonPosition="left"
      icon={<ArrowRight size={20} color="#5E718D" />}
      iconPosition="right"    
      handleOnChange={handleChange}
    >  
      <ShowResults search={search}/>
    </SearchBar>
    </>
    
  );
}

