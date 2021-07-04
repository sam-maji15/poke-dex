import React from 'react'

export default function SearchBar(prop) {
  return (
    <div className='con-search'>
      <input className='inp-search-bar' type="text" placeholder="Search a pokemon"/>
      <button className='btn-search' onClick={prop.onclick}>Search</button>
    </div>
    )}
