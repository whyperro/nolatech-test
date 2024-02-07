import React from 'react'
import './drinksmenu.css'
import Pic2 from '../../../assets/Pic2.png'
import Pic3 from '../../../assets/Pic3.png'
import Pic4 from '../../../assets/Pic4.png'
import DrinkCard from '../../ui/DrinkCard/DrinkCard'

const DrinksMenu = () => {
  return (
    <section className='drinks-section'>
        <h1 className='drinks-title'>Lorem ipsum</h1>
        <p className='drinks-subtitle'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      <div className='drinks-cards'>
        <DrinkCard img={Pic2} btnText='Lorem Ipsum' />
        <DrinkCard img={Pic3} btnText='Lorem Ipsum' />
        <DrinkCard img={Pic4} btnText='Lorem Ipsum' />
      </div>
      <button className='drinks-btn'>LEARN MORE</button>
    </section>
  )
}

export default DrinksMenu