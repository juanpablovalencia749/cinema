import { useNavigate } from "react-router-dom"

type Item = {
  id:string 
  name:string
  media_type: string
}

interface Props {
  title:string
  option: Item[]
  width: number
  col: number
}



export const LinkNavbar:React.FC<Props> = ({title, option, width, col }) => {

  const navigate = useNavigate();

  const assignIdToLink = (id:string,media_type:string):void => { 
    navigate(`/${media_type}/${id}`)
  }

  return (
  <div className="relative group">
    <p className="hover:text-blue-700 p-4 cursor-pointer">{title}</p>
    <div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">
      <ul className={`w-${width} rounded-lg text-white bg-[#141a32]  p-2 grid grid-cols-${col} gap-2`}>
      {
        option.map(({name, id, media_type}) => (
          <li key = {id} onClick={()=> assignIdToLink(id, media_type)}>
              <a className="cursor-pointer hover:text-secondary p-2">{name}</a>
            </li>
          ))
        }
        </ul>   
    </div>
  </div>
  )
}

