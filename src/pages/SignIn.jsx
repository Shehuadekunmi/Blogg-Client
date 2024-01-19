
import React, { useState } from 'react'
import post from "../assets/BLOGG.png";
import sign from "../assets/sign.png";
import '../style/getstarted.css'
import { Link, useNavigate } from 'react-router-dom'
import fb from "../assets/fb.png";
import appl from "../assets/appl.png";
import google from "../assets/google.png";
import line from "../assets/line.png";
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
// import { signinSuccess } from '../redux/userReducer';
import { login } from '../redux/apiCallsUser';
import { signinStart, signinSuccess, signinFailure, } from '../redux/userReducer';
import axios from 'axios';
import { API_URL, api } from '../requestMethods';


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [userData, setUserData] = useState({
  //   email: '',
  //   password: ''
  // });

  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // const [formData, setFormData] = useState({});
  // const { loading, error } = useSelector((state) => state.user);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setUserData({...userData, [name]: value})
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = await dispatch(login, { email, password });
  //     // const data = await response.json();
  //     if (data && data.status === 'success') {
  //       navigate('/home');
  //       console.log(data);
  //     } else {
  //       setError('Invalid email or password');
  //     }
  //   } catch (error) {
  //     setError('An error occurred during login');
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      dispatch(signinStart());
      const res = await axios.post(`${api}/signin`, {
        email, password,
        // headers: { token: `Bearer${TOKEN}`}

      })
      const data = await res.data;
      console.log(data);
      if(data.success === false){
        dispatch(signinFailure(data.message))
        setLoading(false);
        setError(null);
        return;
      }
      setLoading(false);
      setError(null);
      dispatch(signinSuccess(data));
      navigate('/')
    } catch (error) {
      dispatch(signinFailure())
      setLoading(false);
      setError(null);
      console.log(error);
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const {data} = await axios.post(`${api}/signin`, {
  //       email, password
  //     });
  //     console.log(data);
  //     if(data.success === false){
  //       setLoading(false)
  //       setError(error.message);
  //       return;
  //     };
  //     setLoading(false);
  //     setError(null);
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error);
  //     setError(null);
  //     setLoading(false);
  //   }
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     dispatch(signinStart());
  //     const res = await axios.post(`${api}/signin`, {email, password});
  //     const data = await res.json();
  //     console.log(data);
  //     if(data.success){
  //       localStorage.setItem("token", data.token)
  //       dispatch(signinSuccess(data))
  //       navigate('/')
  //     };
      
  //   } catch (error) {
  //     dispatch(signinFailure(error.message))
  //     console.error((error));
  //   }
  // }

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
    

          {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className='my-4'>
          <label htmlFor="username"> Email</label> <br />
          <input type="text" placeholder='enter username' id='username' 
          value={email}  onChange={(e) => setEmail(e.target.value)} name='email' required />
        </div> 

        <div className='my-3'>
          <label htmlFor="password"> Password</label> <br />
          <div className="shehu-shehu-get">
          <input type="password" placeholder='Password'
          id='password'  value={password} name='password' onChange={(e) => setPassword(e.target.value)}  required /> <AiOutlineEyeInvisible className='eye'/> 
          </div>
        </div> 
      
       <button type='submit' className='btn btn-primary mb-3' disabled={loading}>{ loading ? 'loading...' : 'Sign Up' }</button>
        <p className='pb-2'>Don't have an account? <Link to={'/getstarted'}>Sign up</Link></p>

        <div className='shehu-signin-hr'>
         <img src={line} alt="" />
          <span>Or</span>
         <img src={line} alt="" />
        </div>
     

        <h5>Sign up with </h5>

        <div className='d-flex my-md-5  shehu-fb'>
          <img src={fb} alt="" />
          <img src={appl} alt="" />
          <img src={google} alt="" />

        </div>

      </form>
     
      </div>

      </section>
    </div>
  )
}

export default SignIn