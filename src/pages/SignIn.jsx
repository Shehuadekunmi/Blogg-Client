
import React, { useState } from 'react'
import post from "../assets/BLOGG.png";
import sign from "../assets/sign.png";
import '../style/getstarted.css'
import { Link } from 'react-router-dom'
import fb from "../assets/fb.png";
import appl from "../assets/appl.png";
import google from "../assets/google.png";
import line from "../assets/line.png";

import { AiOutlineEyeInvisible } from 'react-icons/ai'


const SignIn = () => {

  return (
    <div>
      <section className='d-md-flex shehu-signin'>
        <div className='shehu-mobile'>
          <img src={sign} alt="" />
        </div>
     
          
     <div className=' pt-4 pt-md-0 shehu-sign-form'>

      <form className='  ' >

        <div className='text-center pt-md-5 my-lg-3'>
          <Link to='/'> <img src={post} alt="" /></Link> 
        <h1 className='fw-bold my-4 py-lg-2'>Join Blogg</h1>
        <p className=' px-2'>Enter your email address to create an account with us</p>

          </div>
    

        <div className='my-4'>
          <label htmlFor=""> Username</label> <br />
          <input type="text" placeholder='enter username' />
        </div> 

        <div className='my-3'>
          <label htmlFor=""> Password</label> <br />
          <div className="shehu-shehu-get">
          <input type="email" placeholder='Password' /> <AiOutlineEyeInvisible className='eye'/> 
          </div>
        </div> 
      
       <button type='submit' className='btn btn-primary mb-3'>Sign Up</button>
        {/* <p className='pb-2'>Already have an account? <Link to={'/login'}>Sign In</Link></p> */}

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