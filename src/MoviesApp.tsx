import { BrowserRouter } from "react-router-dom";
import { MoviesRouter } from "./router";




const MoviesApp = ():JSX.Element => {
  return (
    <BrowserRouter>
      <MoviesRouter/>
    </BrowserRouter>
  )
}
export default MoviesApp
