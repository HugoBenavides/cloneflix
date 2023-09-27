import React from 'react'

const NavBar = () => {
    return <div className='flex items-center justify-between p-4'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            <div className='text-white'>
                <button className='text-white pr-4'>Sing In</button>
                <button className='bg-red-600 px-6 px-2 rounded cursor-pointer text-white'>Sing Up</button>
            </div>
    </div>;
};

export default NavBar;