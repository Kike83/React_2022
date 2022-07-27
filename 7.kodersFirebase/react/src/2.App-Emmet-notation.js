import { useState, useEffect } from 'react'
import './App.css'


function App() {
   const [kodersList, setKodersList] = useState([
      {
         name: "Koala",
         generation: "K"
      }
   ])

useEffect(() => {
   const getKoders = async () => {
      let data = await fetch('https://react2022-5a405-default-rtdb.firebaseio.com/koders/.json')
      data = await data.json()
      console.log(data)
      setKodersList(data)
   }
   getKoders()

},[])

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


{/*
in Emmet notation:
form.bg-dark.text-white.p-3.border.rounded>div.form-group*2>label+input.form-control


<form action="" className="bg-dark text-white p-3 border rounded">
   <div className="form-group"><label htmlFor=""></label><input type="text" className="form-control" /></div>
   <div className="form-group"><label htmlFor=""></label><input type="text" className="form-control" /></div>
</form>   



*/}

                  <form action="" className="bg-dark text-white p-3 border rounded">
                     <div className="form-group"><label htmlFor=""></label><input type="text" className="form-control" /></div>
                     <div className="form-group"><label htmlFor=""></label><input type="text" className="form-control" /></div>
                  </form>   




{/*
Emmet
-like Emmet Brown?, de volver al futuro?-

   Emmet:
button.btn.btn-danger{Borrar koder}

   Result:
<button className="btn btn-danger">Borrar koder</button>
*/}


                  <button className="btn btn-danger">Borrar koder</button>



               
               </div>



            </div>
         </div>


      </div>
   )
}

export default App