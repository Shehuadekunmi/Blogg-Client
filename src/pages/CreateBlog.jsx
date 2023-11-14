import React from 'react'
import '../style/create.css'
import Footer from '../components/Footer'
import HeaderSignIn from '../components/HeaderSignIn'

const CreateBlog = () => {
  return (
    <div className='container'>

        <HeaderSignIn/>

<section className='shehu-create'>
    <h1>Create A New Blog</h1>
    <form action="">
    <div className='my-3'>
        <label htmlFor="">Title</label> <br />
        <input type="text"  placeholder='Enter title here' />
    </div>

    <div className='my-3'>
        <label htmlFor="">Tag</label> <br />
        <input type="text"  placeholder='Enter tags here' />
    </div>

    <div className='my-3'>
        <label htmlFor="file">Image</label> <br />
        <input type="file" id='file'   placeholder='Choose cover image from files' />
    </div>

    <div className='my-3 shehu-read-time'>
        <label htmlFor="">Read-time</label> <br />
        <input type="text"  placeholder='Enter  read time' />
    </div>

    <div className='my-3'>
        <label htmlFor="">Story</label> <br />
        <textarea name="" id="" cols="30" rows="10" placeholder='Write your story here'></textarea>    </div>

    <div className='my-3 d-flex gap-5'>
        <button className='shehu-save'>Publish</button>
      <button className='shehu-draft'>Save to drafts</button>
    </div>
    </form>
    </section>

    <Footer/>
    </div>
  )
}

export default CreateBlog