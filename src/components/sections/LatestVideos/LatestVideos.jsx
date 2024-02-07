import React from 'react'
import './latestvideo.css'
import VideoCard from '../../ui/VideoCard/VideoCard'
import Pic1 from '../../../assets/Pic1.png';

const LatestVideos = () => {
  return (
    <section className='latest-section'>
      <h1 className='latest-title'>Latest Videos</h1>
      <div className='latest-content'>
        <VideoCard img={Pic1} title='Lorem ipsum dolor sit amet, consetetur' />
        <VideoCard img={Pic1} title='Lorem ipsum dolor sit amet, consetetur' />
        <VideoCard img={Pic1} title='Lorem ipsum dolor sit amet, consetetur' />
        <VideoCard img={Pic1} title='Lorem ipsum dolor sit amet, consetetur' />
        <VideoCard img={Pic1} title='Lorem ipsum dolor sit amet, consetetur' />
        <VideoCard img={Pic1} title='Lorem ipsum dolor sit amet, consetetur' />
      </div>
    </section>
  )
}

export default LatestVideos