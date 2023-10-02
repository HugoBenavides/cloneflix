import React, {useEffect, useState} from 'react'
import requests from '../Request'
import axios from 'axios'


const Main = () => {
  const [movies, setMovies] = useState([]); //estado para actualizar la info de la pelicula

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)]; //toma un numero aleatorio de una pelicula y lo muestra cada vez que recargamos
  // const movie se usa para poder acceder a la info ramitidicada para eso se usa "?" al momento de llamar una propiedad de objeto


  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:10xl font-bold'>{movie?.title}</h1>
            <div className='my-4' >
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className='text-gray text-sm my-5'>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%]'>{movie?.overview}</p>
          </div>
      </div>
    </div>
  );
}

export default Main