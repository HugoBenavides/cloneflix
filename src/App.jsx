import { Route, Routes } from 'react-router';
import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { AuthContextProvider } from './context';

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </AuthContextProvider>
    </>
  ) 
}

export default App
