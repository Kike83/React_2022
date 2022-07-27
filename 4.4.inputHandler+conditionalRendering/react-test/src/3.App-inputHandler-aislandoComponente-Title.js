import './App.css';
import {useState} from 'react'
import Title from './Components/Title'

/*
lo que yo escriba en el input, se ve reflejado de inmediato en el título

pero ahora:
  -> asilando-componente
  
  - en carpeta Title>
    - archivo index.js
      que exporta Title
  - y aquí (arriba)>
    - importamos Title 
*/



function App() { 
  const [title, setTitle] = useState("Hola ejercicio kike")
  const [isLogged, setIsLogged] = useState(false)
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
  }

  const loginHandler = () => {
    setIsLogged(true)
  }

  const logoutHandler = () => {
    setIsLogged(false)
  }

  return (
    <div className='App'>
      
      {/*
      { !isLogged && <button className="btn btn-success" onClick={loginHandler}>Login</button>}
      { isLogged && <button className="btn btn-warning" onClick={logoutHandler}>Sign out</button>}
      */}
      
      
      <input type="text" onChange={inputHandler}/>
      <Title texto={title}/>
      
    </div>
  )
}






export default App