import React from 'react'
import '../style/health.css'
import '../style/sport.css'
import { AiOutlineEye} from 'react-icons/ai'
import health from '../assets/health.png'
import health1 from '../assets/health1.png'
import Card from 'react-bootstrap/Card';




const HealthCare = () => {
  return (
    <div className='my-5'>

<div className="d-flex gap-4 shehu-popular my-3 health">
        <h1>Popular </h1>
        <button>Health care</button>
        </div>
        <div className='shehu-sport'>
        <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={health} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
    
       <h2>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
      
     </Card>
     </div>
     
     <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={health1} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>The Power of Plant-Based Eating: Exploring the Benefits of a Vega...</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
     
     </Card>
     </div>

    <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={health} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>Intermittent Fasting: Is It the Right Approach for Weight Loss and...</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
      
     </Card>
     </div>

     <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={health1} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>The Power of Plant-Based Eating: Exploring the Benefits of a Vega...</h2>
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

export default HealthCare