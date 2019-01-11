import MovieDb from 'moviedb-promise'
import { effect } from 'easy-peasy'
console.log(process.env.REACT_APP_TMDB_API_KEY)
const moviedb = new MovieDb(process.env.REACT_APP_TMDB_API_KEY)

export default {
  img: {
    backdrop_sizes: [],
    base_url: '',
    logo_sizes: [],
    poster_sizes: [],
    profile_sizes: [],
    secure_base_url: '',
    still_sizes: [],
    init: (state, payload) => payload,
    initFetch: effect(async (dispatch, payload, getState) => {
      const conf = await moviedb.configuration()
      dispatch.img.init(conf.images)
    })
  },

  movies: {
    PopularMovies: [],
    TopRatedMovies: [],
    UpcomingMovies: [],
    NowPlayingMovies: [],
    setMovies: (state, payload) => ({ ...state, ...payload }),
    init: effect(async (dispatch, payload, getState) => {
      dispatch.img.initFetch()

      const fetchFunctions = [
        'PopularMovies',
        'TopRatedMovies',
        'UpcomingMovies',
        'NowPlayingMovies'
      ]

      fetchFunctions.forEach(func => {
        moviedb[`misc${func}`]().then(data => {
          dispatch.movies.setMovies({ [func]: data })
        })
      })
    })
  }
}
