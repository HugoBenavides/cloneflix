const key ={
    key: import.meta.env.VITE_TMDB_KEY
}

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key.key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key.key}`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key.key}`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key.key}`,
    requestTvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key.key}`,
}

export default requests;