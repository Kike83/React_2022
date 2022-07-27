import './App.css';

import products from './assets/mock-product';
import List from './Components/Lists'
import Shape from './Components/Shape';

function App() {
  const inputHandler = (event) => console.log(event.target.value)
  
  return (
    <div className='App'>
      

      <input 
        type="text"      
        onChange={inputHandler}
      />


      {/*
      mal hecho, porque se debe ir a un componenete,
      pero funciona

      <input type="text" onChange={(event) => console.log(event.target.value)}/>
      */}


    </div>

  )
}






export default App