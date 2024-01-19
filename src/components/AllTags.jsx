import React, { useState, useEffect} from 'react'
import { API_URL, api } from '../requestMethods';
import axios from 'axios'
import { useSelector } from 'react-redux';
const AllTags = () => {


    
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
      const res = await axios.get(`${api}/getbloggs?enums=healthcare&limit=5`);
      setLoading(false);
      setHealt(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getDef = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${api}/getbloggs?enums=selfdefence&limit=5`);
      setLoading(false);
      setDef(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getEnterta = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${api}/getbloggs?enums=lifestyle&limit=5`);
      setLoading(false);
      setEnterta(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  const getOther = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${api}/getbloggs?enums=other&limit=5`);
      setLoading(false);
      setOther(res.data)
    } catch (error) {
      console.log(error);
    }
  };


  const getSport = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${api}/getbloggs?enums=sport&limit=5`);
      setLoading(false)
      setSport(res.data)
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
    <>AllTags
    <div>
        {
          sport.map((s) => {
            const {_id, title} = s;
            return(
              <div key={_id}>{title}</div>
            )
          })
        }
       </div>

       <div>
        {
          healt.map((s) => {
            const {_id, title} = s;
            return(
              <div key={_id}>{title}</div>
            )
          })
        }
       </div>
    </>
  )
}

export default AllTags