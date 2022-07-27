import './App.css';
import {useState} from 'react'

/*
lo que yo escriba en el input, se ve reflejado de inmediato en el título
*/

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

  const inputHandler = event => {
    setTitle(event.target.value)   
    // event.target.value      -> AQUÍ se guarda lo que sea que yo esté escribiendo en mi input.
  }
  return (
    <div className='App'>
      <input type="text" onChange={inputHandler}/>
      <h1>{title}</h1>
    </div>

  )
}






export default App