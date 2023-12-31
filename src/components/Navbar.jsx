import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {

    const {user, logOut} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async ()=>{
        try {
            await logOut()
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    

    //console.log(user.email)

    return (
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        {user?.email ? (
          <div className="text-white">
            <Link to="/account">
              <button className="text-white pr-5">Account</button>
            </Link>
              <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Logout
              </button>
          </div>
        ) : (
          <div className="text-white">
            <Link to="/login">
              <button className="text-white pr-5">Sing In</button>
            </Link>
            <Link to="/singup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sing Up
              </button>
            </Link>
          </div>
        )}
      </div>
    );
};

export default NavBar;
