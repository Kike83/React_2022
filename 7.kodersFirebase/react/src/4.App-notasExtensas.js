import { useState, useEffect } from 'react'
import './App.css'


function App() {
   const [kodersList, setKodersList] = useState([
      {
         name: "Koala",
         generation: "K"
      }
   ])



{/*
Estados
*/}

const [koderData, setKoderData] = useState({})

const [newKoderKey, setNewKoderKey] = useState()



{/*
inputHandler
*/}

const inputHandler = event => {
   const property = event.target.name
   const value = event.target.value
   setKoderData( {...koderData, [property]:value} )
}




{/*
Peticiones
*/}

const saveKoder = async () => {
   let result = await fetch('https://react2022-5a405-default-rtdb.firebaseio.com/koders/.json', {
      method: "POST",
      body:JSON.stringify(koderData)
   })
   result = await result.json()
   setNewKoderKey(result.name)
}




{/*
Hook
con Petición

Es el EFECTO que se trae todos los koders de firebase
   - el equivalente a un: GET

useEffect me pide:
   1.- callback
   2.- array-de-dependencias
      "el array-de-dependencia me sirve para indicar cuántas veces se va a dispara este efecto = controlador/gatillo/trigger"
      "porque si no se cicla, y se va infinito, disparando el efecto y trayendo koders de la BD, y haciendo peticiones, y jalando datos, y gatando batería, y jalando luz, y reduciendo la vida de la batería, y etc. en ese ciclo -> ahorro de energía (usuario y planeta)"
         "si el array-de-dependencia está vacío, este efecto solo se dispara al inicio de mi componente"
            - inicia app
            - al renderizar
         "dentro del array-de-dependencia, una varible [newKoderKey] -- 
            -> porque --> si puedo modificar la variable ==> puedo controlar que se vuelva a disparar el efecto, en este caso, con cada cambio en [newKoderKey]
      -> lograr => cada vez que botón Guardar Koder, se agregue autómatico a la lista
   se convierte en un ciclo-controlado
*/}

useEffect(() => {
   const getKoders = async () => {
      let data = await fetch('https://react2022-5a405-default-rtdb.firebaseio.com/koders/.json')
      data = await data.json()
      console.log(data)
      setKodersList(data)
   }
   getKoders()

},[newKoderKey])




   return (
      <div className='App'>


         <div className="container">
            <div className="row">
               
               
               
               
               <div className="col-12 col-md-6">


                  <div className="row row-cols-1 row-cols-md-2 g-4">
                     {Object.keys(kodersList).map(koderKey => {

                        const {name, generation} = kodersList[koderKey]
                        return (
                           <div className="col" key={koderKey}>
                              <div className="card">
                                 <div className="card-body">
                                    <p className="card-text">Nombre: {name}</p>
                                    <p className="card-text">Generación: {generation}</p>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div>


               </div>



               <div className="col-12 col-md-6">


                  <form action="" className="bg-dark text-white p-3 border rounded">
                     <div className="form-group">
                        <label htmlFor="">Nombre del koder</label>
                           <input type="text" className="form-control" name="name" onChange={inputHandler}/>
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Generacion del koder</label>
                           <input type="text" className="form-control" name="generation" onChange={inputHandler}/>
                     </div>
                     <button type="button" className="btn btn-primary" onClick={saveKoder}>
                        Guardar Koder
                     </button>
                  </form>   


               
               </div>



            </div>
         </div>


      </div>
   )
}

export default App