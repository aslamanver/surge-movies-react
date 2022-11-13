import {Movie} from '../../app/types';
import {API_KEY} from '../../secrets';

export function fetchMovies(page: number) {
  return new Promise<Movie[]>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`,
    )
      .then(res => res.json())
      .then(resJson => resolve(resJson.results))
      .catch(err => reject(err));
  });
}
