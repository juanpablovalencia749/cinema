import { Navbar } from "keep-react";
import { MdMovieCreation } from "react-icons/md";
import { CaretDown } from "phosphor-react";
import { SearchBox } from ".";
import { LinkNavbar } from "./";
import LinkNabarMobile from "./LinkNabarMobile";

const optionMovies = [{
    id:   'popular',
    name: 'Popular',
    media_type: 'movie'
  },
  { 
    id:   'now_playing',
    name: 'Now Playing',
    media_type: 'movie'
  },
  { 
    id:   'upcoming',
    name:  'Upcoming',
    media_type: 'movie'
  },
  { 
    id:   'top_rated',
    name: 'Top Rated',
    media_type: 'movie'
  },
]

const optionGender = [
  {
    id:   '28',
    name: 'Action',
    media_type: 'gender'
  },
  {
     id:   '12',
     name: 'Adventure',
     media_type: 'gender'
  },

  { 
    id:   '16',
    name:  'Animation',
    media_type: 'gender'
  },
  { 
    id:   '35',
    name: 'Comedy',
    media_type: 'gender'
  },
  { 
    id:   '80',
    name: 'Crime',
    media_type: 'gender'
  },
  { 
    id:   '99',
    name: 'Documentary',
    media_type: 'gender'
  },
  { 
    id:   '18',
    name: 'Drama',
    media_type: 'gender'
  },
  { 
    id:   '14',
    name: 'Fantasy',
    media_type: 'gender'
  },


]

const optionTvShows = [
  {
    id:   'popular',
    name: 'Popular',
    media_type: 'tv'
  },
  { 
    id:   'airing_today',
    name: 'Airing Today',
    media_type: 'tv'
  },
  { 
    id:   'on_the_air',
    name:  'On TV',
    media_type: 'tv'
  },
  { 
    id:   'top_rated',
    name: 'Top Rated',
    media_type: 'tv'
  },
]

export const NavBar = () => {

  return (
    <Navbar 
     fluid={false} rounded={true}  className="bg-primary shadow-lg shadow-custom" >
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand className="flex gap-2 items-center">
            <MdMovieCreation className='text-3xl text-white'></MdMovieCreation>
            <a href="http://localhost:5173">Cinema</a>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
             <LinkNavbar title = { 'Movies' } option = {optionMovies} width= {40} col = {1} />
             <LinkNavbar title = { 'Genders' } option = {optionGender} width= {72} col = {2} />
             <LinkNavbar title = { 'Tv Shows'} option = {optionTvShows} width= {40} col = {1} />
             
          </Navbar.Container>

          <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-primary w-4/5 p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">

              <SearchBox/>

          
            <Navbar.Link
              href ="#"
              linkName="Movies"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
             <LinkNabarMobile option={optionMovies}/>

             <Navbar.Divider></Navbar.Divider>
            <Navbar.Link
              href ="#"
              linkName="Genders"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
              <LinkNabarMobile option={optionGender}/>

              <Navbar.Divider></Navbar.Divider>
            <Navbar.Link
              href ="#"
              linkName="TV Shows"
              icon={<CaretDown size={20} />}
              className="!py-0"
            /> 
            <LinkNabarMobile option={optionTvShows}/>

          </Navbar.Container>
        </Navbar.Collapse>

        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <div className="hidden lg:block">
            <SearchBox/>
          </div>
          <Navbar.Toggle/>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}







