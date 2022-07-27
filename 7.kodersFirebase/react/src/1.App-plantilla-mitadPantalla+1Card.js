import { useState, useEffect } from 'react'
import './App.css'


function App() {
   const [kodersList, setKodersList] = useState([
      {
         name: "Koala",
         generation: "K"
      }
   ])



   return (
      <div className='App'>


         <div className="container">
            <div className="row">
               <div className="col-12">


                  <div className="row row-cols-1 row-cols-md-2 g-4">
                     {kodersList.map(koder => {
                        const { name, generation } = koder
                        return (
                           <div className="col">
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
            </div>
         </div>


      </div>
   )
}

export default App