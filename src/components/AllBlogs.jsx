import {useState, useEffect} from 'react'
import { API_URL, api } from '../requestMethods';
import axios from 'axios'



const AllBlogs = () => {
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token')

    const getAllBloggs = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(`${api}/getbloggs`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setBlog(data.blog);
        } catch (error) {
          console.error('Error fetching blog posts:', error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
        getAllBloggs();
        
    }, [])

  return (
    <div>AllBlogs
         {
            loading ? <p>loading.....</p> : (
                blog.map((b) => {
                    const {title, tag, userRef, story, img} = b;
                    return(
                        <div key={b}>
                            <p>{title}</p> 
                            <p>{story}</p> 

                        </div>
                    )
                })
            )
        }
    </div>
  )
}

export default AllBlogs
