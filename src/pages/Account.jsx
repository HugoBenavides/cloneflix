import React from 'react'
import background from '../img/Netflix-hero-banner2.jpg'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='text-white w-full'>
        <img className="w-full h-[400px] object-cover" src={background} alt="account-bg" />
        
      </div>
      <div className='bg-black/60 w-full fixed top-0 left-0 h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8 '>
        <h1 className='text-white text-3xl md:text-5xl font-bold c'>My Shows</h1>
      </div>
      <SavedShows />
    </>
  )
}

export default Account