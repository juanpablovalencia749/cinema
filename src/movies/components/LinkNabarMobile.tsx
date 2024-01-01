import { useNavigate } from "react-router-dom"

type Item = {
  id:string 
  name:string
  media_type: string
}

interface Props {
  option: Item[]
}

const LinkNabarMobile:React.FC<Props> = ({ option}) => {

  const navigate = useNavigate()

  const LinkNavbar = (id:string, media_type:string ):void => {
    navigate(`/${media_type}/${id}`)
  }

  return (
    <ul className="grid grid-cols-2 gap-2">
      {option.map(({id, name, media_type})=>(
        <li key={id}
            onClick={()=>LinkNavbar(id, media_type)}>
          <a className="cursor-pointer">{name}</a>
        </li>
      ))}
    </ul>
  )
}

export default LinkNabarMobile