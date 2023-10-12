import { Route, Routes } from 'react-router';
import './App.css'
import NavBar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext.jsx';
import LogIn from './pages/LogIn';
import SingUp from './pages/SingUp';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login' element={<LogIn />} />
            <Route path='singup' element={<SingUp />} />
            <Route path='account' element={<ProtectedRoute><Account /></ProtectedRoute>}  />
        </Routes>
      </AuthContextProvider>
    </>
  ) 
}

export default App
