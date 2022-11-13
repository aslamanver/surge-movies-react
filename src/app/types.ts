export interface Movie {
  original_title: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  title: string;
  popularity: number;
  voteCount: number;
  video: boolean;
  vote_average: number;
  poster_path?: string;
  backdrop_path?: string;
}

export interface MovieState {
  movies: Movie[];
  page: number;
  status: 'idle' | 'loading' | 'failed' | 'rejected';
}

export interface MovieRowProps {
  item: Movie;
  index: number;
}
