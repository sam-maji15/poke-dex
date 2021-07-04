import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './assets/components/SearchBar.js'
import PokeCard from './assets/components/PokeCard.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      pokeDat: {
        name: '', height: 0, weight: 0, type: '', imgSrc: ''},
    }
  }
  
  componentDidMount() {
    
    // search something on 'enter' key press
    document.querySelector('.inp-search-bar').addEventListener('keyup', (event) => {
      
      // key code of 'enter' key is 13
      if (event.keyCode === 13) {
        // clears default behaviour
        event.preventDefault()
        // triggers search button click
        document.querySelector('.btn-search').click()
      }
    })
    
    // retrieving search-data from local storage
    let last_search = localStorage.getItem('last-search')
    
    if (typeof last_search !== 'null') {
      // reloading last search
      document.querySelector('.inp-search-bar').value = last_search
      document.querySelector('.btn-search').click()
      document.querySelector('.inp-search-bar').value = ''
    }
  }
  
  // onclick function for search button
  searchBtnClick = () => {
    let pokeName = document.querySelector('.inp-search-bar').value.toLowerCase()
    
    //fetching data from poke api
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => {
      return response.json()
    }).then(data => {
      let poke_dat = `ht: ${data.height}m\nwt: ${data.weight}kg`
      this.setState({pokeDat: {
        name: pokeName,
        height: data.height,
        weight: data.weight,
        type: data.types.map(item => ' '+item.type.name).toString(),
        imgSrc: data.sprites.other['official-artwork'].front_default
      }})
    })
    
    //saving last data
    localStorage.setItem('last-search', pokeName)
    
  }
  
  render() {
    
    return (
    <div>
      <SearchBar onclick={this.searchBtnClick}/>
      <PokeCard pokeDat={this.state.pokeDat} dat={this.state.dat} />
    </div>
    )
  }
}


const root = document.getElementById('react-app')
ReactDOM.render(<App/>, root)