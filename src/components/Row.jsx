import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
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
      <div className="relative flex items-center group">
        <MdChevronLeft className='bg-white left-0 rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40} />
        
        <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight className='bg-white right-0 rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40} />
      </div>
    </>
  );
}

export default Row