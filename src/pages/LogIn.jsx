import React, {useState} from 'react'
import background2 from '../img/Netflix-fetaure-banner.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const LogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword]=useState('')
  const [error, setError] = useState('')
  const {user, singIn} = UserAuth()
  const navigate = useNavigate()

  const handleSumbit = async (e) => {
    e.preventDefault();
    setError('')

    try {
      await singIn (email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };


  return (
    <>
      <div className="text-white w-full h-screen">
        <img
          src={background2}
          alt="/"
          className="hidden sm:block absolute w-full h-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        <div className="fixed w-full px-4 py-24 z-50 left-[33vw]">
          <div className="max-w-[450px] h-[540px] mx-aut bg-black/75 text-white rounded-[10px]">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-center font-bold text-3xl">Sing In</h1>
              {error ? <p className='py-3 bg-red-400 my-2'>{error}</p> : null}
              <form onSubmit={handleSumbit} className="w-full flex flex-col py-4">
                <input
                  onChange={(e)=>setEmail(e.target.value)}
                  className="py-3 px-2 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                />
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  className="py-3 px-2 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
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
                  <span className="mr-2 text-gray-600 text-sm">New to Netflix?</span>
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