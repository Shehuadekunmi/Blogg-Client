import React from 'react'
import '../style/published.css'
import pro from '../assets/pro.png'
import pub from '../assets/pub.png'
import { AiOutlineEye} from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Footer from '../components/Footer'
import HeaderSignIn from '../components/HeaderSignIn'


const Published = () => {
  return (
    <div className='container'>

            <HeaderSignIn/>

        <section className='shehu-pub d-flex'>
            <div className='shehu-profile'>
                <img src={pro} alt="" />
                <div className='d-md-fle'>
                    <h1>Jane Doe</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Ridiculus in tellus cras vitae donec pellentesque condimentum feugiat. 
                    Massa id vestibulum enim nunc netus aliquet id feugiat hac. Vel malesuada odio volutpat magna quis. Feugiat sodales cras diam dictum se
                    </p>
                    <div> <span>15,000 views</span>  <span>60 Published</span></div>
                </div>
            </div>
            <button>Edit</button>
        </section>

        <section className='shehu-published'>
            <div>
                <button>Published</button>  <button>Drafts</button>
                <hr className="pub-hr" />
            </div>



            <section className='d-flex '>
              <div className='shehu-pro gap-lg-4'>
                <img src={pub} alt="" />
                <div className='shehu-text'>
                 <div className='d-flex gap-2 gap-md-4  shehu-pro-pro my-1'>
                        <button>Beauty & Fashion</button>   <p><AiOutlineEye/> views</p>  <p>4 mins read</p> <p>9/09/2023</p>
                    </div>
                    <h1>The impact of beauty products on self esteem of individuals</h1>
                    <div className='shehu-ppp'>
                        <p >Lorem ipsum dolor sit amet consectetur. Turpis enim a massa sit neque at quam amet. Aenean dui id consequat egestas ullamcorper ridiculus risus.
                        Magna urna mattis dictum sit vulputate. Velit amet nibh nisl sed. Molestie non varius urna ornare cursus egestas non. Dui elit pretium nullam tellus. 
                        In morbi aliquet amet posuere. Sed pellentesque egestas donec sit varius convallis. Proin in ullamcorper odio duis dui quis placerat. 
                        Duis gravida in congue felis. In vulputate vitae integer quis scelerisque a imperdiet in adipiscing.</p>
                    </div>
                </div>
              </div>
                <BsThreeDotsVertical className='shehu-dot'/>
            </section>
        </section>

        <Footer/>
    </div>
  )
}

export default Published