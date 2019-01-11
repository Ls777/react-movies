import React, { useEffect } from 'react'
import { useStore, useAction } from 'easy-peasy'
import styled from 'styled-components'
import { MoviePoster } from '../components'

const list = [
  'PopularMovies',
  'TopRatedMovies',
  'UpcomingMovies',
  'NowPlayingMovies'
]

const Home = props => {
  const img = useStore(state => state.img)
  console.log(img)
  return (
    <div>
      <HomeRow property={list[0]} />
    </div>
  )
}

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 92px);
  /*-webkit-transform: rotateY(10deg); 
  transform: rotateY(10deg) translateZ(-40px);
  transform-origin: left center;
  transition: width 2s;*/
`

const HomeRow = ({ property }) => {
  const movies = useStore(state => state.movies[property])
  console.log(movies)
  if (!movies.results) return null
  return (
    <>
      <h2>Popular</h2>
      <Grid>
        {movies.results.map(movie => (
          <MoviePoster movie={movie} key={movie.id} />
        ))}
      </Grid>
    </>
  )
}

export default Home
