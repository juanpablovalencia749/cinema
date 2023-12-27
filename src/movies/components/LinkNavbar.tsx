
export const LinkNavbar = () => {
  return (
  <div className="relative group">
    <p className="hover:text-blue-700 p-4 cursor-pointer">Genders</p>
    <div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">
      <ul className=" w-64 rounded-lg text-white bg-blue-500 text-center p-2 grid grid-cols-2 gap-2">
        <li>
          <a href="">Action</a></li>
        <li>Animation</li>
        <li>Crime</li>
        <li>Adventure</li>
        <li>Adventure</li>
        <li>Adventure</li>
        <li>Adventure</li>
        <li>Adventure</li>
      </ul>
    </div>
  </div>
  )
}

