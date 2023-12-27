// import { Search} from "./Search";

// import { MagnifyingGlass } from "phosphor-react";
import { Navbar } from "keep-react";
import { MdMovieCreation } from "react-icons/md";
import { CaretDown } from "phosphor-react";
import { Search } from ".";
import { LinkNavbar } from "./";

export const NavBar = () => {


  return (
    <Navbar fluid={true} >
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand className="flex gap-2">
            <MdMovieCreation className='text-3xl text-secondary' name="movies"></MdMovieCreation>
            <a href="http://localhost:5173">Monkies</a>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
             <Navbar.Link linkName="Movies" />
             <LinkNavbar/>

            <Navbar.Link linkName="TV Shows" />
          </Navbar.Container>

          <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white w-full p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">

              <Search/>
            <Navbar.Link
              linkName="Movies"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <ul className="grid grid-cols-2 gap-2">
              <li>Popular</li>
              <li>Now Playing</li>
              <li>Upcoming</li>
              <li>Top Rated</li>
              </ul>
            <Navbar.Link
              linkName="Generes"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
             <ul className="grid grid-cols-2 gap-2">
              <li>Action</li>
              <li>Adventure</li>
              <li>Family</li>
              <li>children</li>
              <li>Hover</li>
              </ul>
            <Navbar.Link
              linkName="TV Shows"
              icon={<CaretDown size={20} />}
              className="!py-0"
            /> 
             <ul className="grid grid-cols-2 gap-2
             ">
              <li>Popular</li>
              <li>Airing Today</li>
              <li>On TV</li>
              <li>Top Rated</li>
              </ul>
          </Navbar.Container>
        </Navbar.Collapse>

        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <div className="hidden lg:block">
            <Search/>
          </div>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}







