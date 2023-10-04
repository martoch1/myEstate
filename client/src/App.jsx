import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Career from './Pages/Career'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Navbar from './Components/Navbar/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'

export default function App() {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Header />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Career" element={<Career/>} />
  <Route path="/Contact" element={<Contact/>} />
  <Route path="/Profile" element={<Profile/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/SignIn" element={<SignIn/>} />
</Routes>

</BrowserRouter>


    </div>
  )
}
