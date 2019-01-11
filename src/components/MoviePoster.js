import React from 'react'
import { useStore } from 'easy-peasy'
import styled from 'styled-components'

const Img = styled.img`
  position: relative;
  transform: rotateY(-10deg) translateZ(0px) scale(0.5);
  transition: transform 0.1s;
  z-index: 1;

  &:hover {
    transform: rotateY(0deg) translateZ(0px) scale(1);
    z-index: 5;
    transition: transform 0.5s;
  }
`

const Li = styled.li`
  width: 92px;
  height: 138px;
`

const MoviePoster = ({ movie }) => {
  const { base_url, poster_sizes } = useStore(state => state.img)
  return (
    <Li>
      <Img src={`${base_url}${poster_sizes[2]}${movie.poster_path}`} />
    </Li>
  )
}

export default MoviePoster
