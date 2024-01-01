import { moviesApi } from "../api/moviesApi";
import { GenresMovies } from "../interface/genresMovies";


export  const getGenders = async (gender: string | undefined): Promise<string | undefined> => {
  if (!gender) return undefined;
  const numberGenre = parseInt(gender, 10)

  const { data } = await moviesApi.get<GenresMovies>(`/genre/movie/list`);
  const selectedGenre = data.genres.find(({ id }) => id === numberGenre);

  return selectedGenre ? selectedGenre.name : undefined;
}