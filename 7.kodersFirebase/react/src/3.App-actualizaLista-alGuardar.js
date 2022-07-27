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