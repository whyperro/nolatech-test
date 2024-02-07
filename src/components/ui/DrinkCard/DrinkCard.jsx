import React from 'react'
import './drinkcard.css'

const DrinkCard = ({img, btnText}) => {
  return (
    <div className='drink-card'>
      <img className='card-image' src={img} alt='Imagen de bebida'/>
      <button className='card-btn'>{btnText}</button>
    </div>
  )
}

export default DrinkCard