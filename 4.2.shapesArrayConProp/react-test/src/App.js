import './App.css';

import products from './assets/mock-product';
import List from './Components/Lists'
import Shape from './Components/Shape';

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
      {
        shapes.map( shape => 
          <Shape shape={shape.shape} color={shape.color}/>)
      }

    </div>

  )
}






export default App