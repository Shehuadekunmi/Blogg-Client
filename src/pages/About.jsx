import React from 'react'
import ProfileModal from '../components/ProfileModal'
import LogOutModal from '../components/LogOutModal'
import PublishModal from '../components/PublishModal'
import DraftModal from '../components/DraftModal'

const About = () => {
  return (
    <div>
    <ProfileModal/>
    <LogOutModal/>
    <PublishModal/>
    <DraftModal/>
    </div>
  )
}

export default About