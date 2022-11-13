import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchMovies} from './movieAPI';
import {Movie, MovieState} from '../../app/types';

// const showToast = (message: string) => {
//   ToastAndroid.show(message, ToastAndroid.SHORT);
// };

// const log = console.log;
// console.log = (...data) => {
//   log(...data);
//   showToast(data.toString());
// };

const initialState: MovieState = {
  movies: [],
  page: 1,
  status: 'idle',
};

export const fetchAsync = createAsyncThunk<
  Movie[],
  number,
  {state: {movie: MovieState}}
>('movie/fetchMovies', async (page, {getState, dispatch}) => {
  console.log(
    `Calling http... page=${page} & movies=${getState().movie.movies.length}`,
  );
  const movieState = getState().movie;
  if (page === 1 && movieState.movies.length > 0) {
    dispatch(setPage(1));
    dispatch(setMovies([]));
  }
  const response = await fetchMovies(page);
  dispatch(setPage(page));
  return response;
});

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAsync.pending, state => {
        state.status = 'loading';
        console.log(
          `state.status=pending & page=${state.page} & movies=${state.movies.length}`,
        );
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.movies = [];
        }
        state.status = 'idle';
        state.movies = state.movies.concat(action.payload);
        console.log(
          `state.status=fulfilled & page=${state.page} & movies=${state.movies.length}`,
        );
      })
      .addCase(fetchAsync.rejected, state => {
        state.status = 'rejected';
        console.log(
          `state.status=rejected & page=${state.page} & movies=${state.movies.length}`,
        );
      });
  },
});

export const {setPage, setMovies} = movieSlice.actions;
export const selectMovies = (state: RootState) => state.movie.movies;

export default movieSlice.reducer;
