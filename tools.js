export default class Tools {
  constructor() {
    this.val = ''
  }
}

function getDefTheme() {
  const defTheme = {
    colPri: '#FCE38A',
    colPriVar: '#F38181',
    colSec: '#EAFFD0',
    colSecVar: '#95E1D3'
  }
  return defTheme
}


/* returns a random color */
function getRandomColor() {
  
  // random colors array
  const randColors = [
    '#E99497', // faded redish
    '#F3C583', // brownish yellow
    '#E8E46E', // light green
    '#B3E283' // green
    ]
  
  return randColors[Math.floor(Math.random()*randColors.length)]
}




/* Capitalizes the first letter */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export { 
  getDefTheme, // default theme
  getRandomColor, // random colors
  
  
  capitalize, // capitalizes first letter
}