
import React, { useState } from 'react'
import post from "../assets/BLOGG.png";
import sign from "../assets/sign.png";
import '../style/getstarted.css'
import { Link } from 'react-router-dom'
import fb from "../assets/fb.png";
import appl from "../assets/appl.png";
import google from "../assets/google.png";
import line from "../assets/line.png";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiShow, BiHide } from 'react-icons/bi'
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { register } from '../redux/apiCallsUser';
// import { registerFailure, registerStart, registerSuccess } from '../redux/userReducer';
import axios from 'axios';
// import {productRequest} from '../requestMethods'
import {api} from '../requestMethods'





const GetStarted = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const [error, setError] = useState('');

  // const handleChange = (e) => {
  //   const {name, value}= e.target;
  //   setUserData({...userData, [name]: value})
  // };
  // const { loading } = useSelector((state) => state.user);



         
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!username || !email || !password) {
  //     setError('Please fill in all fields.');
  //     return;
  //   }

  //   try {
  //     dispatch(registerStart());

  //    const res =  await axios.post('localhost:4200/api/v1/auth/register', {
  //     email,
  //     username,
  //     password
  //    });
  //    const data = await res.json();
  //    if (data.success === true){
  //     dispatch(registerSuccess(data));
  //     navigate('/signin')
  //     return;
  //     // if(data.success === true){
  //     //   dispatch(registerSuccess())
  //     // }
  //    }
  //     // navigate('/signin');
  //   } catch (error) {
  //     setError(error.message || 'An error occurred during signup');
  //   }
  // };

  const handleShow = () =>{
    setShow(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const {data} = await axios.post(`${api}/signup`, {
        email,
        username,
        password
      });
      // const data = await res.json();
      console.log(data);
      if(data.success === false){
        setLoading(false)
        setError(error.message);
        return;
      };
      setLoading(false);
      setError(null);
      navigate('/signin')
    } catch (error) {
      setLoading(false);
      setError(error.message)
      console.log(error);
    }
  }
  return (
    <div>

  <section className='d-md-flex shehu-signin'>
        <div className='shehu-mobile'>
          <img src={sign} alt="" />
        </div>
     
          
     <div className=' pt-4 pt-md-0 shehu-sign-form'>

      <form className='  ' onSubmit={handleSubmit} >

        <div className='text-center pt-md-5 my-lg-3'>
          <Link to='/'> <img src={post} alt="" /></Link> 
        <h1 className='fw-bold my-4 py-lg-2'>Join Blogg</h1>
        <p className=' px-2'>Enter your email address to create an account with us</p>

          </div>
      
        <div className='my-3'>
          <label htmlFor="email"> Email Address</label> <br />
          <input type="email" placeholder='name@example.com'
           value={email}  id='email' onChange={(e) => setEmail(e.target.value)} name='email' />
        </div> 

        <div className='my-3'>
          <label htmlFor="username"> Username</label> <br />
          <input type="text" placeholder='enter username' 
          id='username'  value={username}  onChange={(e) => setUsername(e.target.value)} name='username' />
        </div> 

        <div className='my-3'>
          <label htmlFor="password"> Password</label> <br />
          <div className="shehu-shehu-get">
          <input type="password" placeholder='Password' 
          id='password'  value={password} name='password' onChange={(e) => setPassword(e.target.value)} onClick={handleShow} />
          {show ? <BiShow/> : <BiHide/> } <AiOutlineEyeInvisible className='eye'/> 
          </div>
        </div> 
      
       <button type='submit'  disabled={loading} className='btn btn-primary mb-3' > {loading ? 'loading...' : 'Sign Up' } </button>
        <p className='pb-2'>Already have an account? <Link to={'/signin '}>Sign In</Link></p>

        <div className='shehu-signin-hr'>
         <img src={line} alt="" />
          <span>Or</span>
         <img src={line} alt="" />
        </div>
     

        <h5>Sign up with </h5>

        <div className='d-flex my-md-4 shehu-fb'>
          <img src={fb} alt="" />
          <img src={appl} alt="" />
          <img src={google} alt="" />

        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </form>
     
      </div>

      </section>
    </div>
  )
}

export default GetStarted