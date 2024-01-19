import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import GetStarted from './pages/GetStarted'
import SignIn from './pages/SignIn'
import SinglePage from './pages/SinglePage'
import CreateBlog from './pages/CreateBlog'
import Published from './pages/Profile'
import Home2 from './pages/Home2'
import SinglePage2 from './pages/SinglePage2'

function App() {
 

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/getstarted' element={<GetStarted/>}/>
        <Route path='/signin'  element={<SignIn/>}/> 
        <Route path='/singlepage' element={<SinglePage/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/publish' element={<Published/>}/>
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/singlepage2'  element={<SinglePage2/>}/>
      </Routes>
     
    </>
  )
}

export default App
