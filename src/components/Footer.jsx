import React from 'react'
import post from "../assets/BLOGG.png";
import { Link } from 'react-router-dom'
import '../style/footer.css'

const Footer = () => {
  return (
    <div className='container'>
        <section className=' px-1 my-5 text-white shehu-foot py-5 '>
            <div className='img  text-center text-md-start'>
                <img src={post} alt="" />
                <p> Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor.
                     Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
                     <form action="" cl>
                        <input type="email"  placeholder='Email'/>
                        <button>Subscribe</button>
                     </form>
            </div>
            
            <div  className="shehu-footer  mx-auto gap-5 py-5 py-md-0">
                <div>
                <p>Quick Links</p>
                <Link to={'/'} className='text-decoration-none text-white bb'>   <h6 className="mx-3"  href="#action1">Home</h6> </Link> 
           <Link to={'/blog'}  className='text-decoration-none text-white bb'> <h6 className="mx-3"  href="#action1">Blog</h6> </Link> 
           <Link to={'/about'}  className='text-decoration-none text-white bb'> <h6 className="mx-3"  href="#action1">About</h6> </Link> 
           <Link to={'/contact'}  className='text-decoration-none text-white bb'> <h6 className="mx-3"  href="#action2">Contact</h6> </Link> 
         
                </div>

                <div className="shehu-foo">
                <p>Quick Links</p>
                <Link to={'/'} className='text-decoration-none text-white bb'>   <h6 className="mx-3"  href="#action1">Home</h6> </Link> 
           <Link to={'/blog'}  className='text-decoration-none text-white bb'> <h6 className="mx-3"  href="#action1">Blog</h6> </Link> 
           <Link to={'/about'}  className='text-decoration-none text-white bb'> <h6 className="mx-3"  href="#action1">About</h6> </Link> 
           <Link to={'/contact'}  className='text-decoration-none text-white bb'> <h6 className="mx-3"  href="#action2">Contact</h6> </Link> 
         
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer