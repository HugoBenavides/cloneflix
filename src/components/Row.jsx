import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Row = ({title, fetchURL}) => { //recuerda que para importar las props es necesario usar la llaves 

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })

    },[fetchURL])

    console.log(movies)

    //En el metodo .map mucho cuidado con usar las llaves en lugar de los parantesis, ya que si usas llaves rompre el codigo y rect te manda errror de ejecucion. 

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={`slider`}>
                {
                    movies.map((item,id)=>(
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280] inline-block cursor-pointer relative p-2'>
                                <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Row