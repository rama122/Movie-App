import './App.css'
import Navpage from './Components/NavPage'
// import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Sign from '../src/Login/Sign'
import Signup from './Login/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/sign in' element={<Sign/>} />
        <Route path='/sign up' element={<Signup/>} />
        <Route path='/' element={<Navpage />} />
      </Routes>
    </>
  )
}

export default App
