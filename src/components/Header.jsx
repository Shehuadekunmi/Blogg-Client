
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import post from "../assets/BLOGG.png";
import { Link, useNavigate} from 'react-router-dom'
import HeaderSignIn from './HeaderSignIn';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search] );
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
          <Nav className='gap-3 gap-lg-5'>
            
            { 
              currentUser ? (
                
                <img src={currentUser.avater} alt="profile" className='currentuser' />
                // <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile" />
              ) : (
                <Link to={'/getstarted'}  className='text-decoration-none text-black bb'> <button className='btnn'>Get Started</button> </Link>  
              )
            }
        
                 {/* {currentUser? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/signin">Login</Link></h3>} */}

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    <hr  className='hr'/>
    </div>
  );
};

export default Header;