import React from 'react'
import background from '../img/Netflix-hero-banner2.jpg'
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <>
      <div className="text-white w-full h-screen">
        <img
          src={background}
          alt="/"
          className="hidden sm:block absolute w-full h-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        <div className="fixed w-full px-4 py-24 z-50 left-[33vw]">
          <div className="max-w-[450px] h-[540px] mx-aut bg-black/75 text-white rounded-[10px]">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-center font-bold text-3xl">Sing In</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="py-3 px-2 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                />
                <input
                  className="py-3 px-2 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  type="summit"
                  onClick={(e) => e.preventDefault()}
                >
                  Sing In
                </button>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p className="text-sm text-gray-600">Need Help?</p>
                </div>
                <p className="mt-8 pt-3">
                  <span className="mr-2 text-gray-600 text-sm">Not suscribe to Netflix yet?</span>
                  <Link className="hover:cursor-pointer" to="/singup">| Sing Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn