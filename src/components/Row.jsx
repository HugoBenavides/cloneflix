import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'


const Row = ({title, fetchURL}) => {
  //recuerda que para importar las props es necesario usar la llaves

  const [movies, setMovies] = useState([]);



  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  //En el metodo .map mucho cuidado con usar las llaves en lugar de los parantesis, ya que si usas llaves rompre el codigo y rect te manda errror de ejecucion.



  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={`slider`}>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row