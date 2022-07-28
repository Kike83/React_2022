import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'



function App() {
   
   {/*
   Estados
   */}
   // const [name, setName] = useState("")
   // const [nameHasError, setNameHasError] = useState(false)
      {/*
      Hooke -> useForm
      */}  


   const { 
      register, 
      handleSubmit,
      formState: { errors }         // mete -> formState para controlar errores del formulario
         // URL: react-hook-form.com/advanced-usage
   } = useForm()

   const onSubmit = async data => {
      console.log(data)
      console.log(errors)
      let result = await fetch('https://react2022-5a405-default-rtdb.firebaseio.com/koders/.json', {
         method: "POST",
         body:JSON.stringify(data)
      })
      console.log( await result.json())
   }



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
                              className="form-control mb-4"
                              name="name" 
                              placeholder="Escribe un nombre"
                              {...register('nombre',  {required: true})}
                           />
                              {errors.nombre && errors.nombre.type === "required" && <span>Este campo es requerido_</span>}
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Generacion del koder</label>
                           <input 
                              type="text" 
                              className="form-control mb-4" 
                              name="name"
                              {...register('generacion',  {required: true})}
                           />
                              {errors.nombre && errors.nombre.type === "required" && 
                                 <div class="alert alert-warning" role="alert">
                                 Alerta usando bootstrap!
                                 </div>}
                     </div>
                     <div className="form-group mb-4">
                        <label htmlFor="">Fecha</label>
                           <input 
                              type="date" 
                              className="form-control" 
                              name="name"
                              {...register('fecha')}
                           />
                     </div>
                     <div className="form-group mb-4">
                        <label htmlFor="">email</label>
                           <input 
                              type="email" 
                              className="form-control" 
                              name="name"
                              {...register('email',  {
                                 pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                  }
                              })}
                           />
                            {errors.email && errors.email.type === "pattern" && 
                                 <div class="alert alert-warning" role="alert">
                                 {errors.email.message}
                                 </div>}
                     </div>



                     <button type="submit" className="btn btn-primary">
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