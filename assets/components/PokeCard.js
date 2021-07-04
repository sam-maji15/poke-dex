import React from 'react'
import { getRandomColor } from '../../tools.js'

export default function PokeCard(prop) {
  
  return (
  <div style={{ background: getRandomColor() }} className='poke-card-con'>
    <img src={prop.pokeDat.imgSrc} className='poke-card-img'/>
    
    <div>
    <h2>{prop.pokeDat.name}</h2>
    <h2><b>Height:</b> {prop.pokeDat.height}m</h2>
    <h2><b>Weight:</b> {prop.pokeDat.weight}kg</h2>
    <h2><b>Type(s):</b> {prop.pokeDat.type}</h2>
    </div>
    
    <button className='poke-card-btn'>Read More</button>
  </div>
    )
}