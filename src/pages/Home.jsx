import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' titleRow='Movies Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowId='2' titleRow='Tv Top Rated' fetchURL={requests.requestTvTopRated} />
        <Row rowId='3' titleRow='Up Coming Movies' fetchURL={requests.requestUpComing} />
        <Row rowId='4' titleRow='Now Playing' fetchURL={requests.requestNowPlaying} />
    </div>

  )
}

export default Home