import React from 'react'

const LogOutModal = () => {
  return (
    <div>
        <div className='shehu-logout-modal'>
            <div className="shehu-logout">
            <h2>Are you sure you want to log out?</h2>
            <div className='d-flex justify-content-between'>
                <button className="shehu-b1">Yes</button>
                <button className="shehu-b2">No</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default LogOutModal