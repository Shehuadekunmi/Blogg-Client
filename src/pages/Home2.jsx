import React from 'react'
import '../style/home.css'
import hom from '../assets/hom.png'
import hom1 from '../assets/hom1.png'
import { AiOutlineEye} from 'react-icons/ai'
import hom2 from '../assets/hom2.png'
import hom3 from '../assets/hom3.png'
import hom4 from '../assets/hom4.png'
import Sport from '../components/Sport'
import HealthCare from '../components/HealthCare'
import Entertainment from '../components/Entertainment'
import HeaderSignIn from '../components/HeaderSignIn'
import Footer from '../components/Footer'


const Home = () => {


  const { currentUser } = useSelector((state) => state.user);

  const [sport, setSport] = useState([])
  const [healt, setHealt] = useState([])
  const [enterta, setEnterta] = useState([])
  const [def, setDef] = useState([])
  const [other, setOther] = useState([])
  const [loading, setLoading] = useState(true);



  const getHealtcare = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`${api}/getbloggs?enums=healthcare&limit=5`);
      setLoading(false);
      setHealt(data)
    } catch (error) {
      console.log(error);
    }
  };

  const getDef = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`${api}/getbloggs?enums=selfdefence&limit=5`);
      setLoading(false);
      setDef(data)
    } catch (error) {
      console.log(error);
    }
  };

  const getEnterta = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`${api}/getbloggs?enums=lifestyle&limit=5`);
      setLoading(false);
      setEnterta(data)
    } catch (error) {
      console.log(error);
    }
  };
  const getOther = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`${api}/getbloggs?enums=other&limit=5`);
      setLoading(false);
      setOther(data)
    } catch (error) {
      console.log(error);
    }
  };


  const getSport = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`${api}/getbloggs`);
      setLoading(false)
      setSport(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHealtcare();
    getDef();
    getEnterta();
    getOther();
    getSport();
  }, [])

  






  return (
    <div className='container '>
        <HeaderSignIn/>
      <section>


      <div>
        {
          sport.map((s) => {
            const {title} = s;
            return(
              <div key={s}>{title}</div>
            )
          })
        }
       </div>

        <div className='d-md-flex shehu-home'>
          <div className='shehu-home-center my-3'>
            <div>
              <h1>From You To The World</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Elementum diam volutpat ultrices nisi.
                Ligula eu aliquet sagittis sit. In justo lectus at rhoncus faucibus nulla sapien.</p>
                <button>Get Started</button>
            </div>
          </div>
            <img src={hom} alt="" />
        </div>
        <hr  className='hr'/>

        <section className='d-md-flex my-5 gap-3 shehu-home-1'>
          <div className='trending'>
            <h1>Trending</h1>
            <img src={hom1} alt="" /> 
            <div className='d-flex gap-5 shehu-home-home my-1'>
              <button>Self defence</button>   <p><AiOutlineEye/> views</p>  <p>4 mins read</p> <p>9/09/2023</p>
            </div>
            <h1>The importance  of self defense: In teenagers</h1>
            <p className='pp'>Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor.
               Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
          </div>

            <section className='shehu-home-2'>
              <h2>Most Read</h2>
              <div className='d-flex gap-3 mt-4 mt-md-0'>
                <img src={hom4} alt="" />
                <div >
                  <div className='d-lg-flex gap-md-4 gap-lg-5 gap-1 mb-lg-  shehu-ade'>
                   <div className='d-flex gap-4 con'>  <button>Construction</button>  </div> 
                  <div className='d-flex gap-4 gap-md-0  '> 
                    <div className='w-7'><span >4 mins read</span> </div> 
                     <p>9/09/2023</p>
                    </div> 
                  </div>
                  <div  className='shehu-sub-div'>
                  <h1>The challenges construction workers are facing </h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Sed vel integer praesent eget ac urna.
                     Sit fames aenean et orci diam. Mauris tincidunt ornare facilisis dolor enim.</p>
                  </div>
                </div>
                
              </div>

              <div className='d-flex gap-3 my-3'>
                <img src={hom3} alt="" />
                <div >
                  <div className='d-lg-flex gap-lg-5 gap-4  shehu-ade'>
                  <div className='d-flex gap-4 care'>  <button>Health care</button>  </div> 
                  <div className='d-flex gap-4 gap-md-0 '>
                  <div className='w-7'><span >4 mins read</span>  </div>  
                  <p>9/09/2023</p> </div>     </div>
                  <div  className='shehu-sub-div'>
                  <h1>The impact of herd immunity in the general populace </h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Sed vel integer praesent eget ac urna.
                     Sit fames aenean et orci diam. Mauris tincidunt ornare facilisis dolor enim.</p>
                  </div>
                </div>
                
              </div>

              <div className='d-flex gap-3'>
                <img src={hom2} alt="" />
                <div >
                  <div className='d-lg-flex gap-lg-5  gap-2  shehu-ade'>
                  <div className='d-flex gap-4  sport'>  <button>Sports</button>     </div> 
                  <div className='d-flex gap-4 gap-md-0  '> 
                   <div className='w-7'><span >4 mins read</span>  </div> 
                    <p>9/09/2023</p> </div>                   </div>
                   <div  className='shehu-sub-div'>
                   <h1>The Olympic community concluded that karate... </h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Sed vel integer praesent eget ac urna.
                     Sit fames aenean et orci diam. Mauris tincidunt ornare facilisis dolor enim.</p>
                  </div>
                </div>
                
              </div>
            </section>
        </section>
      </section>

      <Sport/>
      <HealthCare/>
      <Entertainment/>

      <Footer/>
    </div>
  )
}

export default Home