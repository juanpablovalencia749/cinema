import {  useRef, useState, ChangeEvent } from "react";
import { moviesApi } from "../../api/moviesApi";
import { Multi, Search } from "../../interface/search";
import { ShowResults } from ".";
import { SearchBar } from "keep-react";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";

export const SearchBox = (): JSX.Element => {
  const [search, setSearch] = useState<Search[]>([]);
  const debounceRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  const searchMoviesByQuery = async (query: string): Promise<void> => {
    const { data } = await moviesApi.get<Multi>(
      `https://api.themoviedb.org/3/search/multi?query=${query}`
    );
    setSearch(data.results)
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const { value } = event.target;
      searchMoviesByQuery(value);
    }, 1000);
  };


  return (
    <>
    <div ref={containerRef}>
      <SearchBar
        size={"md"}
        placeholder="Search"
        addon={<MagnifyingGlass size={20} color="#5E718D" />}
        addonPosition="left"
        icon={<ArrowRight size={20} color="#5E718D" />}
        iconPosition="right"
        handleOnChange={handleChange}
      >
      <ShowResults search={search}  handleChange = {handleChange} containerRef={containerRef}/>  
      </SearchBar>
      </div>
    </>
  );
};
