import './App.css';
import {useState} from 'react'

function App() { 
  const [title, setTitle] = useState("Hola ejercicio kike")
  
  // esto:
  // const [title, setTitle] = useState("Hola ejercicio kike")
  // es lo mismo que:
  // title = "Hola ejercicio kike"
  // const setTitle (valor) => { 
  //   title = valor
  // }
    // esto es -> el equivalente de un Estado


  return (
    <div className='App'>
      <h1>{title}</h1>
    </div>

  )
}






export default App