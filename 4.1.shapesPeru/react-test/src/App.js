import './App.css';

import products from './assets/mock-product';
import List from './Components/Lists'

function App() {
  console.log('dentro de app')
  console.log('products')
  const shapes = [
    {
      shape: 'square',
      color: 'red'
    },
    {
      shape: 'circle',
      color: 'blue'
    },
    {
      shape: 'rectangle',
      color: 'green'
    },
    {
      shape: 'circle',
      color: 'black'
    },
    {
      shape: 'square',
      color: 'yellow'
    },
    {
      shape: 'rectangle',
      color: 'red'
    }
  ]
  
  return (
    <div className='App'>
      <div className="square"></div>
      <div className="circle"></div>
      <div className="rectangle"></div>

    </div>

  )
}






export default App