import MovieDb from 'moviedb-promise'
import { effect } from 'easy-peasy'
console.log(process.env.REACT_APP_TMDB_API_KEY)
const moviedb = new MovieDb(process.env.REACT_APP_TMDB_API_KEY)

export default {
  movies: {
    PopularMovies: [],
    TopRatedMovies: [],
    LatestMovies: [],
    UpcomingMovies: [],
    NowPlayingMovies: [],

    setInit: (state, payload) => {
      state.PopularMovies = payload[0]
      state.TopRatedMovies = payload[1]
      state.LatestMovies = payload[2]
      state.UpcomingMovies = payload[3]
      state.NowPlayingMovies = payload[4]
    },
    init: effect(async (dispatch, payload, getState) => {
      const front = await Promise.all([
        moviedb.miscPopularMovies(),
        moviedb.miscTopRatedMovies(),
        moviedb.miscLatestMovies(),
        moviedb.miscUpcomingMovies(),
        moviedb.miscNowPlayingMovies()
      ])

      dispatch.movies.setInit(front)
    })
  }
}
