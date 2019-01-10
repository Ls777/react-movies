import React, { useEffect } from 'react'
import { useStore, useAction } from 'easy-peasy'

const Home = props => {
  const list = useStore(state => state.movies.PopularMovies)
  console.log(list)

  return <div>test</div>
}

export default Home
