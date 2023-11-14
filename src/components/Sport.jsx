import React from 'react'
import '../style/sport.css'
import Card from 'react-bootstrap/Card';
import sport from '../assets/sport.png' 
import sport1 from '../assets/sport1.png' 
// import sport2 from '../assets/sport2.png' 

import { AiOutlineEye} from 'react-icons/ai'


const Sport = () => {
  return (
    <div>
        <div className="d-flex gap-4 shehu-popular my-3">
        <h1>Popular </h1>
        <button>Sport</button>
        </div>
        <div className='shehu-sport'>
        <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={sport} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
    
       <h2>The Evolution of Basketball: From Peach Baskets to Slam Dunks</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
      
     </Card>
     </div>
     
     <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={sport1} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>Soccer vs. American Football: A Comparative Analysis of Global...</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
     
     </Card>
     </div>

    <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={sport} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>The Untold Story of Women in Tennis: Pioneers and Champions</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
      
     </Card>
     </div>

     <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={sport} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>The Evolution of Basketball: From Peach Baskets to Slam Dunks</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
     
     </Card>
     </div>
    </div>
    </div>
  )
}

export default Sport