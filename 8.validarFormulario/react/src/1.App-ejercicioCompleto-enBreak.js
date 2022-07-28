import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'



function App() {
   
   {/*
   Estados
   */}
   // const [name, setName] = useState("")
   // const [nameHasError, setNameHasError] = useState(false)

   const { register, handleSubmit } = useForm()

   const onSubmit = data => console.log(data)



{/*
Handlers:
   inputHandler
*/}
   // const nameFieldHandler = event => {
   //    setName(event.target.value)
   //    setNameHasError(false)
   // }

   // const validateField = event => {
   //    !name ? setNameHasError(true) : setNameHasError(false)
   // }


{/*
Hook
todavía sin usar
*/}


   return (
      <div className='App'>


         <div className="container">
            <div className="row">
               
               
               
               
               <div className="col-12 col-md-6">


                  <div className="row row-cols-1 row-cols-md-2 g-4">
                     
                           <div className="col">
                              <div className="card">
                                 <div className="card-body">
                                    <p className="card-text">Nombre:</p>
                                    <p className="card-text">Generación:</p>
                                       <button className="btn btn-danger">Borrar koder</button>
                                 </div>
                              </div>
                           </div>

                  </div>


               </div>



               <div className="col-12 col-md-6">


                  <form onSubmit={handleSubmit(onSubmit)} className="bg-dark text-white p-3 border rounded">
                     <div className="form-group">
                        <label htmlFor="">Nombre del koder</label>
                           <input 
                              type="text" 
                              className="form-control" 
                              placeholder="Escribe un nombre"
                              {...register('nombre')}
                              />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Generacion del koder</label>
                           <input 
                              type="text" 
                              className="form-control" 
                              {...register('generacion')}
                           />
                              
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Fecha</label>
                           <input 
                              type="date" 
                              className="form-control" 
                              {...register('fecha')}
                           />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Mail</label>
                           <input 
                              type="text" 
                              className="form-control" 
                              {...register('correo')}/>
                     </div>



                     <button type="submit" className="btn btn-primary mt-3">
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