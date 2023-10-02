import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Tv Top Rated' fetchURL={requests.requestTvTopRated} />
        <Row title='Up Coming' fetchURL={requests.requestUpComing} />
        <Row title='Now Playing' fetchURL={requests.requestNowPlaying} />
        
    </div>

  )
}

export default Home