import React from 'react'
import './VideoCard.css'

const VideoCard = ({img, title}) => {
  return (
    <div className='video-card'>
      <i class="fa-regular fa-circle-play" className=' fa-regular fa-circle-play video-icon'></i>
      <img  src={img} alt="Imagen de video" className='video-img' />
      <p className='video-title'>{title}</p>
    </div>
  )
}

export default VideoCard