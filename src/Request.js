const key = 'be924ada152564ebfff657d56075075e'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestLatest: ` https://api.themoviedb.org/3/movie/latest?api_key=${key}`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key${key}`,
    requestDiscover: `https://api.themoviedb.org/3/discover/movie?api_key${key}`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key${key}`
}

export default requests;