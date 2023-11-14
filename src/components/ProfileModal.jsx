import React, { useState} from 'react'
import pro from '../assets/pro.png'
import vid from '../assets/vid.png'
import del from '../assets/del.png'
import '../style/modal.css'

const ProfileModal = () => {
   
  
  return (
    <div>
        <div className="shehu-pro-modal">

           <div className="shehu-img-pro">
           <img src={pro} alt="" />
            </div> 

            <div className="shehu-pro-img1">
            <p>  <img src={vid} alt="" /> Edit Profile Picture</p>
            </div>

            <div className="shehu-pro-img2">
            <p> <img src={del} alt="" /> Log Out</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileModal