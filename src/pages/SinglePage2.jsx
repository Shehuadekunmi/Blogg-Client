import React from 'react'
import home from '../assets/hom1.png'
import '../style/single.css'
import { AiOutlineEye} from 'react-icons/ai'
import enter from '../assets/enter.png'
import enter1 from '../assets/enter1.png'
import Card from 'react-bootstrap/Card';
import HeaderSignIn from '../components/HeaderSignIn'
import Footer from '../components/Footer'


const SinglePage = () => {
  return (
    <div className='container'>

        <HeaderSignIn/>

        <h1 className='shehu-defense py-4'>The importance  of self defense: In teenagers</h1>
        
        <div className='d-flex  shehu-single-page my-4'>
              <button>Self defence</button>   <p><AiOutlineEye/> views</p>  <p>4 mins read</p> <p>9/09/2023</p>
            </div>

            <section className='shehu-single'>
              <img src={home} alt="" />

              <p className='px-1 pt-md-3'>
              Lorem ipsum dolor sit amet consectetur. Enim justo rhoncus vulputate enim amet.
               Egestas fermentum pulvinar interdum pharetra facilisis tincidunt ultricies. A tincidunt laoreet imperdiet ac fermentum. 
               Volutpat eget dictum nunc sit vestibulum pretium in. Integer facilisis tortor 
               diam vulputate et pretium luctus. In tortor consequat metus ultricies quis.
                Molestie mi elit nunc tincidunt at facilisi. Nibh leo lobortis sit quisque cras metus sed ipsum laoreet.
                 Sagittis enim aliquet rhoncus vel sed et suspendisse elementum. Neque accumsan eleifend id nibh turpis pellentesque quisque natoque.
                  Tortor enim non suspendisse lectus scelerisque orci arcu massa. Pretium sit tincidunt vitae massa tristique. Aliquam nunc auctor nulla duis at facilisis. 
                   Pharetra et lorem enim dignissim.
                Consectetur diam sed aliquam duis tortor ipsum. Tempor ultrices viverra auctor aliquam placerat sit. Nunc amet dui in nibh. Diam leo duis feugiat ullamcorper.
                Lorem quam dictum nisi tincidunt. Platea a pellentesque platea fames bibendum eget ac quis. Volutpat a nunc sed elementum sed lacus. At est senectus lectus semper viverra.
                  Pulvinar pellentesque amet urna rhoncus eget. Nec scelerisque imperdiet at orci. Et etiam erat a quis gravida vestibulum blandit.
                Lorem ipsum dolor sit amet consectetur. Mi adipiscing facilisis elementum amet. Suspendisse sit quis morbi justo maecenas tellus.
                Auctor risus orci proin tincidunt duis lacus. Senectus vitae in mauris phasellus at quam. Orci massa elit in elit. Consequat commodo sed blandit lorem dapibus.
                Id arcu commodo non facilisis leo blandit. Aliquet nibh sed semper gravida posuere viverra potenti. Quam a sit hendrerit et donec diam nulla nunc metus.
                Quis neque quam risus tincidunt. Volutpat venenatis blandit tortor aliquam enim mauris facilisi massa. Mauris elit placerat consequat posuere convallis.
                  Leo eu egestas non egestas facilisis. Dui curabitur massa sed enim a purus laoreet sed at. Porta magna egestas magna malesuada ultrices. Arcu ornare volutpat morbi ut.
                  Iaculis sagittis eget consequat turpis tellus tellus dolor morbi facilisis. Pulvinar quam mollis viverra dis magna purus.
                Morbi quisque metus eget iaculis eu placerat. Consectetur tristique in viverra velit malesuada nunc neque elementum. Commodo semper enim volutpat lorem habitasse libero.
                Pellentesque quam mi sodales dolor et at est. Ultrices imperdiet non lorem lorem consectetur imperdiet volutpat netus sem. Sit arcu tempus leo non elit elit purus.
                  Enim aliquet vel semper vulputate nunc dui sapien lectus.
                          </p>
            </section>


            <section className='shehu-recommend my-5'>
              <h1>Recommended</h1>


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
     </section>

        <Footer/>
            
    </div>
  )
}

export default SinglePage