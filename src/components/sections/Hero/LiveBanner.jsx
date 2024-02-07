import React from 'react'
import './livebanner.css'
const LiveBanner = () => {
  return (
    <div className='live-banner'>
      <span class="isLive">Live &nbsp;&nbsp;<i class="fa-solid fa-satellite-dish"></i></span>
      <span className='center-text'> Lorem ipsu dolor sit amet </span>
      <span  class="isJoin"> Join Now &nbsp;&nbsp;<i class="fa-solid fa-circle-play"></i></span>
    </div>
  )
}

export default LiveBanner