import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import post from "../assets/BLOGG.png";
import { Link} from 'react-router-dom'
import pro from '../assets/pro.png'

const HeaderSignIn = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiar">
      <Container  className="me-auto my-2 my-lg-0 shehu" >
        <Navbar.Brand href="#"><img src={post} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="text-start my-2 my-lg-0 w-75  nav"  navbarScroll >
           <Link to={'/'} className='text-decoration-none text-black bb'>   <h6 className="mx-3"  href="#action1">Home</h6> </Link> 
           <Link to={'/blog'}  className='text-decoration-none text-black bb'> <h6 className="mx-3"  href="#action1">Blog</h6> </Link> 
           <Link to={'/about'}  className='text-decoration-none text-black bb'> <h6 className="mx-3"  href="#action1">About</h6> </Link> 
           <Link to={'/contact'}  className='text-decoration-none text-black bb'> <h6 className="mx-3"  href="#action2">Contact</h6> </Link> 
         
          </Nav>
          <Nav className=' shehu-header-SignIn'>
            <img src={pro} alt="" />
         {/* <Link to={'/getstarted'}  className='text-decoration-none text-black bb'> <button className='btnn'>Get Started</button> </Link> 
          <Link to={'/signin'}  className='text-decoration-none text-black bb'>  <button className='shehu-head'>Sing In</button> </Link>  */}
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    <hr  className='hr'/>
    </div>
   
  )
}

export default HeaderSignIn