import React from 'react'
import suc from '../assets/suc.png'
import '../style/modal.css'

const PublishModal = () => {
  return (
    <div>PublishModal
        <div className='shehu-logout-modal1'>
            <div className="shehu-logout1 text-center">
            <img src={suc} alt="" />
            <h2 className='py-2 py-lg-4'>Your work has been successfully published</h2>
            <div className='d-flex justify-content-between'>
                <button className="shehu-b3">Continue</button>
                <button className="shehu-b4">Back to Home</button>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default PublishModal