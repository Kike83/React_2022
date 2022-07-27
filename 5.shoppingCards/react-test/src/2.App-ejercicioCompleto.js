import './App.css';
import { useState } from 'react'




function App() {
   const [kodersList, setKodersList] = useState([])
   const [koderData, setKoderData] = useState({})


   const inputHandler = event => {
      let property = event.target.name
      let value = event.target.value
      console.log(`property: ${property} , value: ${value}`)
      setKoderData({ ...koderData, [property]: value })
   }

   const guardarKoder = event => {
      setKodersList([...kodersList, koderData])
   }
   return (
      <div className='App'>

         <div className="container-fluid">
            <div className="row">



               <div className="col-12 col-md-6">
                  <form action="" className="bg-dark text-white p-3 border rounded">
                     <div className="form-group">
                        <label htmlFor="">Nombre</label>
                        <input type="text" className="form-control" name="nombre" onChange={inputHandler} />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Correo</label>
                        <input type="text" className="form-control" name="email" onChange={inputHandler} />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Generacion</label>
                        <input type="text" className="form-control" name="generacion" onChange={inputHandler} />
                     </div>
                     <button className="btn btn-success mt-3 ms-auto" onClick={guardarKoder} type="button">Guardar koder</button>
                  </form>
               </div>



               <div className="col-12 col-md-6 mt-3">
                  {/*
                  conditional renderin
                  */}
                  {
                     !kodersList.length && (<h2>Comienza a registrar un koder en el formulario</h2>)
                  }
                  
                  
                  <div className="row row-cols-1 row-cols-md-3 g-4">

                     {kodersList.map( (koder, index) => {
                        const { nombre, email, generacion } = koder
                        return (
                           <div className="col" key={index}>
                              <div className="card">
                                 <div className="card-body">
                                    <p className="card-text">{nombre}</p>
                                    <p className="card-text">{email}</p>
                                    <p className="card-text">{generacion}</p>
                                 </div>
                              </div>
                           </div>
                        )
                     })}

                  </div>

                  
               </div>


            </div>
         </div>


      </div>
   )
}




export default App