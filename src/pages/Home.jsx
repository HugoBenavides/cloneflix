import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' title='Movies Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowId='2' title='Tv Top Rated' fetchURL={requests.requestTvTopRated} />
        <Row rowId='3' title='Up Coming Movies' fetchURL={requests.requestUpComing} />
        <Row rowId='4' title='Now Playing' fetchURL={requests.requestNowPlaying} />
    </div>

  )
}

export default Home