import React, { useEffect } from 'react'
import { useAction } from 'easy-peasy'
import './App.css'
import Home from './routes/Home'

const App = () => {
  const init = useAction(dispatch => dispatch.movies.init)
  useEffect(() => {
    init()
  })

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
