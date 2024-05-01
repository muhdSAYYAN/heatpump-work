import React from 'react'
import './VideoSection.css'
import heat from './heat.mp4'

const VideoSection = () => {
  return (
    <div className='main ' >
      <video className='col-12' styl={{height:"30%"}} autoPlay loop muted  >
        <source src={heat} type="video/mp4" />
    
      </video>
      <h1 >Heating that doesn’t cost the earth</h1>
    </div>
  )
}

export default VideoSection