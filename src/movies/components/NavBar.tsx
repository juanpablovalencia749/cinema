import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdMovieCreation } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const Links = [
    { name: "Movies", link: "/" },
    { name: "Genders", link: "/" },
    { name: "TV Shows", link: "/" },
  ];

  const option = [
    {item: "hola"},
    {item: "bueno"},
    {item: "ok"}
  ]

  const toggleMenu = ():void => {
    setOpenMenu(!openMenu)
  }

  const toggleSearch = (): void => {
    setOpenSearch(!openSearch)
  }
  
  
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex  md:justify-stretch  items-center justify-between bg-white py-4 md:px-10 px-7">

        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-secondary mr-1 pt-2">
            <MdMovieCreation name="logo-movies"></MdMovieCreation>
          </span>
          <a href="http://localhost:5173">Movies</a>
        </div>

        <div
          onClick={toggleSearch}
          className={`text-3xl absolute right-16 top-6 cursor-pointer md:hidden ${  openSearch ? "hidden" : "block"}`}>
          <IoMdSearch name={openSearch ? "close" : "menu"}></IoMdSearch>
        </div>

       

         <div className={`absolute right-16 top-5 transition-all duration-700 ease-out transform ${openSearch ? 'scale-100 bounce' : 'scale-0 pointer-events-none'} md:scale-100 md:pointer-events-auto`}>
          <input 
          className="w-36 md:w-52 border border-solid rounded-full p-1"
          type="text"
          placeholder="Search" />
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"> 
          <GiHamburgerMenu name={openMenu ? "close" : "menu"}></GiHamburgerMenu>
        </div>


        <ul
          className={`md:flex md:items-start md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 relative group">
            <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500 block px-4 py-5 transition-all">
              {link.name}
            </a>
            
            <ul className="absolute hidden bg-purple-700 w-full z-50 group-hover:block mt-2">
              {option.map(({item}) => (
              <li key={item}> <a href="#" className="block px-4 py-2 text-white hover:bg-purple-600">{item}</a></li>
              ))}
            </ul>
          </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
