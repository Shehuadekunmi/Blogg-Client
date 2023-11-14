import React from 'react'
import '../style/health.css'
import '../style/sport.css'
import { AiOutlineEye} from 'react-icons/ai'
import enter from '../assets/enter.png'
import enter1 from '../assets/enter1.png'
import Card from 'react-bootstrap/Card';




const Entertainment = () => {
  return (
    <div className='my-5'>

    <div className="d-flex gap-4 shehu-popular my-3 enter">
        <h1>Popular </h1>
        <button>Entertainment</button>
        </div>
        <div className='shehu-sport'>
        <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={enter} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
    
       <h2>From Harry Potter to Dune: A Journey into the World of Book...</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
      
     </Card>
     </div>
     
     <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={enter1} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>The Art of Stand-Up Comedy: A Look at the Craft of Making ...</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
     
     </Card>
     </div>

    <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={enter} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>From Harry Potter to Dune: A Journey into the World of Book...</h2>
        <Card.Text>
          <p >Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. 
            Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
        </Card.Text>
      
     </Card>
     </div>

     <div className='shehu-sport-div'>
     <Card style={{ width: '28re' }} >
      <img src={enter1} alt="" />
      <div className="d-flex gap-3">
         <span><AiOutlineEye/> views</span>  <span>4 mins read</span> <span>9/09/2023</span>
        </div>
      
       <h2>The Art of Stand-Up Comedy: A Look at the Craft of Making ...</h2>
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

export default Entertainment